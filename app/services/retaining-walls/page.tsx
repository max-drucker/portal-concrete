import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "Retaining Walls",
  description: "Concrete retaining walls in West Seattle. Engineered for slope, soil, and the long haul. Owner on every job.",
};

const gallery = [
  { src: "/images/walls/walls_2_base.jpeg", label: "Retaining wall base" },
  { src: "/images/walls/walls_5_blue_slope.jpeg", label: "Hillside retaining wall" },
  { src: "/images/walls/walls_7_retaining_wall.jpeg", label: "Full retaining wall" },
  { src: "/images/walls/walls_9_white_balconies.jpeg", label: "Tiered wall system" },
  { src: "/images/walls/walls_10_step_down.jpeg", label: "Step-down retaining" },
  { src: "/images/walls/walls_11_grass_long.jpeg", label: "Long hillside wall" },
];

export default function RetainingWallsPage() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "flex-end", backgroundColor: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/walls/walls_7_retaining_wall.jpeg" alt="Retaining wall" fill priority className="object-cover" style={{ opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 4rem", width: "100%" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={28} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Services / Retaining Walls</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Retaining<br />Walls
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "520px", lineHeight: 1.7 }}>
            Seattle lots are steep. Retaining walls have one job: hold. We build them to do it for decades.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#0A0A0A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#FFFFFF", marginBottom: "1.5rem" }}>Built to hold</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Footing depth calculated for soil type and wall height — not guessed.",
                "Drainage aggregate and weep holes behind every wall to prevent hydrostatic pressure build-up.",
                "Reinforced concrete throughout. West Seattle soil moves. Your wall doesn't.",
                "Deadman anchors or stepped footing for tall walls and heavy slope loads.",
                "Clean finish on the face — these walls are visible, so they have to look right.",
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
              { q: "How tall can the wall be?", a: "Depends on site conditions, soil type, and surcharge. We design for what the site needs — not a standard spec." },
              { q: "Do I need a permit?", a: "In Seattle, walls over 4 feet typically require a permit. We'll advise you on what applies to your project." },
              { q: "What about drainage?", a: "Built in, always. Drainage aggregate, filter fabric, and weep holes are standard on every wall — not an add-on." },
              { q: "Can you build tiered walls?", a: "Yes. For taller slopes, stepped or tiered wall systems are often the right approach. We've done complex multi-tier sites." },
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
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "2.5rem" }}>Retaining wall gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2px" }}>
            {gallery.map((img) => (
              <div key={img.src} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image src={img.src} alt={img.label} fill className="object-cover" style={{ filter: "grayscale(15%)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#FF6B1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#0A0A0A", marginBottom: "1.5rem" }}>Need to hold your slope?</h2>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem" }}>Get a Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
