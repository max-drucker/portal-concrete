import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "Concrete Reconditioning",
  description: "Old concrete brought back to life. Overlay systems, grinding, sealing, and resurfacing in West Seattle.",
};

const gallery = [
  { src: "/images/stamped/stamped_decorative_1_speckled_curb.jpeg", label: "Decorative overlay" },
  { src: "/images/stamped/stamped_decorative_2_rainy.jpeg", label: "Stamped resurfacing" },
  { src: "/images/stamped/stamped_decorative_3_textured.jpeg", label: "Textured finish" },
  { src: "/images/stamped/wix_stamped_patio_2.jpeg", label: "Pattern overlay" },
  { src: "/images/before-after/before-stairs.jpeg", label: "Before: crumbling stairs" },
  { src: "/images/before-after/after-stairs.jpeg", label: "After: rebuilt stairs" },
];

export default function ReconditioningPage() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "flex-end", backgroundColor: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/stamped/stamped_decorative_3_textured.jpeg" alt="Reconditioned concrete" fill priority className="object-cover" style={{ opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 4rem", width: "100%" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={28} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Services / Reconditioning</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Reconditioning
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "520px", lineHeight: 1.7 }}>
            Old concrete doesn&rsquo;t have to look old. We bring tired surfaces back — at a fraction of full replacement cost.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#0A0A0A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#FFFFFF", marginBottom: "1.5rem" }}>What reconditioning looks like</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Surface grinding to remove laitance, staining, and surface deterioration.",
                "Overlay systems — thin bonded concrete layers that go on over sound existing slabs.",
                "Stamped overlays to add decorative pattern to plain concrete.",
                "Sealing and densifying to harden and protect the surface.",
                "Crack routing and filling before any overlay or seal work.",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <SwirlieSpiral size={18} color="#FF6B1A" style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{point}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/contact" className="btn-cta">Get a Free Estimate</Link>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { q: "Is my concrete a candidate?", a: "If the slab is structurally sound with no significant settling or heaving, reconditioning is likely on the table. We'll assess on-site and tell you what makes sense." },
              { q: "How much cheaper than replacement?", a: "Depends on the condition and scope, but overlay systems can be 40–60% of full replacement cost. Sometimes more." },
              { q: "How long does an overlay last?", a: "A properly bonded overlay on a good substrate can last 15–20+ years with minimal maintenance." },
              { q: "The 30-year-old driveway looks new — really?", a: "From Armand W.'s review — yes, really. Surface grinding plus sealer can be a dramatic transformation on old but solid concrete." },
            ].map((faq) => (
              <div key={faq.q} style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontWeight: 600, fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>{faq.q}</p>
                <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#111111", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "2.5rem" }}>Before &amp; after</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2px" }}>
            {gallery.map((img) => (
              <div key={img.src} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image src={img.src} alt={img.label} fill className="object-cover" style={{ filter: "grayscale(15%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.75rem 1rem", background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent)" }}>
                  <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#FF6B1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#0A0A0A", marginBottom: "1.5rem" }}>Bring it back.</h2>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem" }}>Get a Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
