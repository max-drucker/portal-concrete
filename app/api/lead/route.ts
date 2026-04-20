import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function buildVCard(name: string, email: string, phone: string, address: string, projectType: string, notes: string): string {
  const nameParts = name.trim().split(/\s+/);
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  const firstName = nameParts.slice(0, -1).join(" ") || name;
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${name}`,
    `N:${lastName};${firstName};;;`,
    email ? `EMAIL:${email}` : "",
    phone ? `TEL;TYPE=CELL:${phone}` : "",
    address ? `ADR:;;${address};;;;` : "",
    `NOTE:Project: ${projectType}\\n${notes ? `Notes: ${notes}` : ""}`,
    "ORG:Portal Concrete Lead",
    "END:VCARD",
  ].filter(Boolean).join("\r\n");
}

function buildEmailHtml(data: {
  name: string; email: string; phone: string; projectType: string; address: string; notes: string;
}): string {
  return `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
  <div style="background: #0A0A0A; padding: 24px 32px;">
    <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">PORTAL</h1>
    <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 4px 0 0; text-transform: uppercase; letter-spacing: 1px;">New Lead</p>
  </div>
  <div style="padding: 32px; background: #fff; border: 1px solid #eee;">
    <table style="width:100%; border-collapse: collapse;">
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; width: 140px; font-size: 13px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${data.name}</td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Project Type</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #FF6B1A;">${data.projectType}</td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Address</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${data.address || "—"}</td></tr>
      <tr><td style="padding: 10px 12px 10px 0; color: #888; font-size: 13px; vertical-align: top;">Notes</td><td style="padding: 10px 0; white-space: pre-wrap;">${data.notes || "—"}</td></tr>
    </table>
  </div>
  <div style="padding: 16px 32px; background: #f8f8f8; font-size: 11px; color: #999; border: 1px solid #eee; border-top: none;">
    Sent from buildwithportal.com — vCard attached for quick save to contacts.
  </div>
</div>`;
}

async function parseBody(req: NextRequest): Promise<Record<string, string>> {
  const ct = (req.headers.get("content-type") ?? "").toLowerCase();
  const out: Record<string, string> = {};
  try {
    if (ct.includes("application/json")) {
      const body = await req.json();
      for (const [k, v] of Object.entries(body ?? {})) {
        if (typeof v === "string") out[k] = v;
      }
      return out;
    }
    // urlencoded or multipart — both work via formData()
    const formData = await req.formData();
    for (const [k, v] of formData.entries()) {
      if (typeof v === "string") out[k] = v;
    }
    return out;
  } catch {
    return out;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await parseBody(req);

    // Support both snake_case and camelCase for project_type
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const projectType = (body.project_type ?? body.projectType ?? "").trim();
    const address = (body.address ?? "").trim();
    const notes = (body.notes ?? body.message ?? "").trim();

    // Validate required fields
    if (!name || !email || !phone || !projectType) {
      return NextResponse.json({ error: "Name, email, phone, and project type are required." }, { status: 400 });
    }

    // Email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Insert to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("leads").insert({
      name,
      email,
      phone,
      project_type: projectType,
      address,
      notes,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      // Don't block email send if DB fails
    }

    // Send email via Resend
    if (resend) {
      const vcf = buildVCard(name, email, phone, address, projectType, notes);
      const vcfBase64 = Buffer.from(vcf).toString("base64");

      await resend.emails.send({
        from: process.env.LEAD_FROM ?? "Portal Website <leads@buildwithportal.life>",
        to: process.env.LEAD_EMAIL ?? "chris@buildwithportal.com",
        subject: `New lead: ${name} — ${projectType}`,
        html: buildEmailHtml({ name, email, phone, projectType, address, notes }),
        attachments: [
          {
            filename: `${name.replace(/\s+/g, "_")}.vcf`,
            content: vcfBase64,
          },
        ],
      });
    } else {
      console.warn("RESEND_API_KEY not set — email skipped. Lead data:", { name, email, phone, projectType, address });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
