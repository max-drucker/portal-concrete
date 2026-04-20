import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "Concrete Patios",
  description: "New concrete patios in West Seattle. Smooth, broom, stamped, or decorative. Proper drainage and finish that lasts.",
};

const gallery = [
  { src: "/images/patios/patio_1_bw_chairs.jpeg", label: "Backyard patio slab" },
  { src: "/images/patios/patio_2_fence.jpeg", label: "Fenced yard patio" },
  { src: "/images/patios/patio_3_fountain.jpeg", label: "Patio with fountain" },
  { src: "/images/patios/patio_4_reddish.jpeg", label: "Decorative finish patio" },
  { src: "/images/patios/patio_5_grey_tiles.jpeg", label: "Large-format tile look" },
  { src: "/images/patios/patio_6_big_tiles.jpeg", label: "Oversized slab pour" },
  { src: "/images/patios/patio_7_overhang.jpeg", label: "Covered patio extension" },
  { src: "/images/stamped/wix_stamped_patio_1.jpeg", label: "Stamped patio pattern" },
];

export default function PatiosPage() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "flex-end", backgroundColor: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/patios/patio_6_big_tiles.jpeg" alt="Concrete patio" fill priority className="object-cover" style={{ opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 4rem", width: "100%" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={28} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Services / Patios</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Patios
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "520px", lineHeight: 1.7 }}>
            Outdoor slabs that become real living space. Grade, drainage, and formwork dialed in before any concrete is poured.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#0A0A0A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#FFFFFF", marginBottom: "1.5rem" }}>What goes into a Portal patio</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Grade assessment and drainage planning before any excavation. Water has to go somewhere — we make sure it goes away from your house.",
                "Base compaction to prevent settling. A concrete slab is only as stable as what's under it.",
                "Rebar or fiber reinforcement throughout. Heavy furniture, fire pits, foot traffic — your patio can handle all of it.",
                "Decorative options: smooth trowel, broom, exposed aggregate, or stamped patterns.",
                "Clean edges and consistent finish, from center to perimeter.",
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
              { q: "What size patio can you pour?", a: "We've done everything from compact courtyard slabs to large backyard patio-and-path systems. No minimum, no maximum." },
              { q: "Smooth or textured finish?", a: "Your call. Smooth trowel is sleek and easy to clean. Broom or exposed aggregate give grip in wet weather. Stamped adds character. We'll show samples." },
              { q: "Can the patio connect to my existing concrete?", a: "Usually yes. We'll assess the existing slab for levelness and condition and determine the best connection approach." },
              { q: "How long until it cures?", a: "Walkable in 24–48 hours. Full cure for heavy use takes about 28 days, though it's fully functional in a week." },
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
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "2.5rem" }}>Patio gallery</h2>
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
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#0A0A0A", marginBottom: "1.5rem" }}>Ready for a real patio?</h2>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem" }}>Get a Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
