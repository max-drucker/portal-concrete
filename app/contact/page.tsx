import type { Metadata } from "next";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";
import ContactForm from "@/components/ContactForm";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a free estimate from Portal Concrete — West Seattle's residential concrete studio. Fill out the form and Chris will be in touch.",
};

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "portal-concrete/consultation";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 1.5rem 4rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={32} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              Contact
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#FFFFFF", lineHeight: 0.95 }}>
            Let&rsquo;s talk.
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", maxWidth: "520px", marginTop: "1.75rem", lineHeight: 1.7 }}>
            Free estimates. Fast response. Chris answers his phone.
          </p>

          {/* Quick contact */}
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Phone</p>
              <a href="tel:+12068296396" style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "1.4rem", color: "#FF6B1A", letterSpacing: "0.04em" }}>
                (206) 829-6396
              </a>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Instagram</p>
              <a href="https://www.instagram.com/portal.llc/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "1.4rem", color: "#FFFFFF", letterSpacing: "0.04em" }}>
                @portal.llc
              </a>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Service area</p>
              <p style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "1.4rem", color: "#FFFFFF", letterSpacing: "0.04em" }}>
                West Seattle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "2rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "1.8rem", color: "#FFFFFF", marginBottom: "2rem" }}>
              Send a request
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar info */}
          <div style={{ paddingTop: "0.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "1.8rem", color: "#FFFFFF", marginBottom: "2rem" }}>
              What to expect
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { title: "Fast response", body: "Chris typically responds within a few hours during business hours. Not days." },
                { title: "On-site estimate", body: "We come to you. You'll get a clear scope and price, not a range." },
                { title: "No obligation", body: "Estimates are free. No pressure, no follow-up sales calls." },
                { title: "Owner on every job", body: "Chris is there from day one to final seal. No hand-offs." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ marginTop: "2px", flexShrink: 0 }}>
                    <SwirlieSpiral size={20} color="#FF6B1A" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontWeight: 600, fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "0.3rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.87rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
                Follow the work
              </p>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <a href="https://www.instagram.com/portal.llc/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                  Instagram →
                </a>
                <a href="https://www.facebook.com/people/Portal-Concrete/61587187841272/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                  Facebook →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com scheduling */}
      <section style={{ backgroundColor: "#111111", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#FFFFFF", marginBottom: "0.75rem" }}>
              Book a consultation
            </h2>
            <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", maxWidth: "480px" }}>
              Prefer to pick a time? Use the scheduler below to book a call or site visit directly on Chris&rsquo;s calendar.
            </p>
          </div>
          <CalEmbed calLink={CAL_LINK} />
        </div>
      </section>
    </>
  );
}
