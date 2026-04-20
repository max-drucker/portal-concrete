import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "About",
  description:
    "Portal is a residential concrete contractor based in West Seattle. Owner-operated by Chris Hildebrand, 35+ years of concrete.",
};

export default function AboutPage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────
         HERO — The Chris photo. This is the brand moment.
      ────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "70vh", minHeight: "480px", overflow: "hidden" }}>
        <Image
          src="/images/chris/chris-skate-hero.jpg"
          alt="Chris Hildebrand, founder of Portal Concrete, skateboarding in a Seattle bowl"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        {/* Scrim */}
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.55) 65%, rgba(10,10,10,1) 100%)" }} />

        <div style={{ position: "absolute", inset: 0, padding: "6rem 1.5rem 4rem", display: "flex", alignItems: "flex-end" }}>
          <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
              <SwirlieSpiral size={20} color="#FF6B1A" />
              <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                About · Founder · Chris Hildebrand
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(3rem, 10vw, 8rem)", color: "#FFFFFF", lineHeight: 0.88, letterSpacing: "-0.01em" }}>
              Built by a skater.<br />
              <span style={{ color: "#FF6B1A" }}>For homeowners.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────
         THE SHORT VERSION (Chris's real voice)
      ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "1.5rem" }}>
            01 · The short version
          </span>
          <p style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.15, marginBottom: "2rem", letterSpacing: "0.01em" }}>
            We show up when we say we will. We do quality work. We don&rsquo;t disappear when something needs fixing.
          </p>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Portal is a residential concrete contractor based in West Seattle. We specialize in driveways, patios, walkways, stairs, and retaining walls for homeowners throughout Seattle.
          </p>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            The company is owner-operated. That means Chris is on every job — measuring, planning, pouring, finishing. Not delegating from a truck.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────
         STATS (bone section — palate cleanser)
      ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F8F5ED", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2.5rem" }}>
            {[
              { num: "35+", label: "Years of concrete" },
              { num: "150+", label: "Five-star reviews" },
              { num: "4.9", label: "Google rating" },
              { num: "1", label: "Owner on every job" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", color: "#FF6B1A", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(10,10,10,0.55)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────
         FOUNDER — Chris story (subtle skate reference)
      ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "start" }}>
          <div>
            <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
              02 · Meet Chris
            </span>
            <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#FFFFFF", lineHeight: 0.95, marginTop: "0.75rem", marginBottom: "1.5rem" }}>
              Chris Hildebrand.<br />
              <span style={{ color: "#FF6B1A" }}>Founder.</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Chris started pouring concrete in Seattle in the late 80s. More than three decades in, he still shows up to every bid, every pour, and every finish. That&rsquo;s the job.
            </p>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Outside of work, Chris skates. Empty bowls, pools, the old spots. Thirty-five years of reading concrete by how it rides as much as how it looks. It&rsquo;s why the transitions on Portal projects flow, why the broom finishes feel right underfoot, why the stairs don&rsquo;t trip you up.
            </p>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
              The crew he hires works the same way — quiet pros who care about the craft and don&rsquo;t cut corners. Everyone on site has a relationship with the material.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "2rem 1.75rem" }}>
              <p style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem" }}>
                Trade
              </p>
              <p style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "1.5rem", color: "#FFFFFF" }}>
                Residential concrete
              </p>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "2rem 1.75rem" }}>
              <p style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem" }}>
                Based
              </p>
              <p style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "1.5rem", color: "#FFFFFF" }}>
                West Seattle
              </p>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "2rem 1.75rem" }}>
              <p style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem" }}>
                Licensed
              </p>
              <p style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "1.5rem", color: "#FFFFFF" }}>
                WA · PORTAL*803D4
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginTop: "0.4rem" }}>
                Bonded · Insured
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────
         HOW WE WORK (differentiators)
      ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "4rem 1.5rem 6rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "1rem" }}>
            03 · How we work
          </span>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "3rem", maxWidth: "20ch" }}>
            The things we <span style={{ color: "#FF6B1A" }}>don&rsquo;t do.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem 3rem" }}>
            {[
              { h: "Disappear.", p: "We answer the phone. Chris personally. You won&rsquo;t be forwarded to a call center in another state." },
              { h: "Sub out.", p: "Every pour is done by our crew. No shell games, no nameless subcontractors showing up in a random truck." },
              { h: "Cut corners.", p: "Proper prep. Proper base. Proper reinforcement. Proper cure. If that costs a day, it costs a day." },
              { h: "Stop in the winter.", p: "Most concrete contractors pack it in November. Pacific Northwest homeowners don&rsquo;t have that luxury. Neither do we." },
              { h: "Dodge hard lots.", p: "Steep terrain, tight access, difficult drainage — that&rsquo;s the work we&rsquo;re known for." },
              { h: "Ghost the warranty.", p: "Something not right six months later? Call. We&rsquo;ll come look." },
            ].map((item) => (
              <div key={item.h}>
                <h3 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "1.4rem", color: "#FFFFFF", marginBottom: "0.75rem", letterSpacing: "0.01em" }}>
                  {item.h}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: item.p }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────
         CTA
      ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FF6B1A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.25rem, 6vw, 4rem)", color: "#0A0A0A", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Got a project?<br />Let&rsquo;s talk about it.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.25rem" }}>
              Get a Free Estimate
            </Link>
            <a href="tel:+12068296396" style={{ display: "inline-block", backgroundColor: "transparent", color: "#0A0A0A", fontFamily: "var(--font-anton, sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.25rem", border: "1px solid #0A0A0A" }}>
              (206) 829-6396
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
