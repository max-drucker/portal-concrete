import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "Walkways & Stairs",
  description: "Concrete walkways and stairs in West Seattle. Front-entry rebuilds, garden paths, ADA-compliant slopes. Done right.",
};

const gallery = [
  { src: "/images/walkways-stairs/walkways_stairs_1_blue_house.jpeg", label: "Front walkway" },
  { src: "/images/walkways-stairs/walkways_stairs_3_black_tiles_rain.jpeg", label: "Wet-pour stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_4_grey_siding.jpeg", label: "Entry stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_5_wood_walk.jpeg", label: "Garden walkway" },
  { src: "/images/walkways-stairs/walkways_stairs_7_grass_winding.jpeg", label: "Winding path" },
  { src: "/images/walkways-stairs/walkways_stairs_10_green_stairs.jpeg", label: "Side-entry stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_15_down_stairs.jpeg", label: "Front-entry stairs" },
  { src: "/images/walkways-stairs/wix_pretty_stairs.jpeg", label: "Finished stair set" },
];

export default function WalkwaysStairsPage() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "flex-end", backgroundColor: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/walkways-stairs/walkways_stairs_15_down_stairs.jpeg" alt="Concrete stairs" fill priority className="object-cover" style={{ opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 4rem", width: "100%" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={28} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Services / Walkways & Stairs</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Walkways<br />&amp; Stairs
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "520px", lineHeight: 1.7 }}>
            The entry to your home should look like you meant it. Safe, code-compliant, and finished to last.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#0A0A0A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#FFFFFF", marginBottom: "1.5rem" }}>What we build</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Front-entry stair rebuilds — demo the old, pour the new, clean edges and proper rise-run ratios.",
                "Garden and side-yard walkways, including curved paths and grade transitions.",
                "ADA-compliant slope ramps where needed.",
                "Stair step overlays and skim coats when full replacement isn't warranted.",
                "Companion retaining walls and planter curbs integrated with walkway systems.",
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
              { q: "Can you demo the old stairs first?", a: "Yes. Demo is typically included in the quote. Old concrete out, new sub-base in, fresh pour on top." },
              { q: "What finish for outdoor stairs?", a: "Broom finish is standard for traction. We can also do exposed aggregate or add a non-slip additive to smooth finishes." },
              { q: "Do you do handrail posts?", a: "We'll set the anchor sleeves for handrail posts in the pour. Railing installation is separate — we can refer you." },
              { q: "How long do stairs take?", a: "Most stair projects are one-to-two day jobs depending on scope. Walkable in 24 hours." },
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
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "2.5rem" }}>Walkway &amp; stair gallery</h2>
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
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#0A0A0A", marginBottom: "1.5rem" }}>Time for new stairs?</h2>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem" }}>Get a Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
