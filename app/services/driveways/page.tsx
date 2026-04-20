import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "Concrete Driveways",
  description: "New concrete driveways in West Seattle. Broom-finish, exposed aggregate, stamped. Proper prep, proper pour, owner on every job.",
};

const gallery = [
  { src: "/images/driveways/driveway_1_grey_garage.jpeg", label: "Broom-finish driveway" },
  { src: "/images/driveways/driveway_2_grey_house.jpeg", label: "Residential approach" },
  { src: "/images/driveways/driveway_3_white_garage.jpeg", label: "White garage approach" },
  { src: "/images/driveways/driveway_4_big_house.jpeg", label: "Large-format driveway" },
  { src: "/images/driveways/driveway_5_modern_garage.jpeg", label: "Modern garage driveway" },
  { src: "/images/driveways/driveway_6_long_walk.jpeg", label: "Long approach" },
  { src: "/images/driveways/IMG_3538.jpeg", label: "Fresh pour" },
  { src: "/images/driveways/wix_driveway_broom.jpeg", label: "Broom finish close-up" },
];

export default function DrivewaysPage() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "flex-end", backgroundColor: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/driveways/driveway_4_big_house.jpeg" alt="Concrete driveway" fill priority className="object-cover" style={{ opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 4rem", width: "100%" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={28} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Services / Driveways</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Driveways
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "520px", lineHeight: 1.7 }}>
            The first thing people see. Built to handle Seattle winters, look clean from the street, and last decades — not years.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#0A0A0A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#FFFFFF", marginBottom: "1.5rem" }}>What goes into a Portal driveway</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Sub-base excavated and compacted to spec — this is where most driveways fail, and where we don't cut corners.",
                "Steel or fiber reinforcement throughout. Seattle soil moves. Your driveway shouldn't.",
                "Control joints scored at the right depth and spacing to direct any cracking where you want it.",
                "Finish of your choice: broom for grip, exposed aggregate for texture, or stamped patterns for character.",
                "Curing compound applied immediately after finishing. Your concrete sets up right, every time.",
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
              { q: "How long does a driveway take?", a: "Most residential driveways are poured in one day. You'll be able to walk on it within 24 hours, drive on it within 7 days." },
              { q: "What does it cost?", a: "Depends on size, site conditions, and finish. We'll quote you accurately after a site visit — not before." },
              { q: "Can you do a curved driveway?", a: "Yes. We've done 70-yard curved driveways on slopes. The more complex, the more careful we are." },
              { q: "Do you handle permit applications?", a: "We advise on what's typically required for your project type and help you understand the process." },
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
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "2.5rem" }}>Driveway gallery</h2>
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
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#0A0A0A", marginBottom: "1.5rem" }}>Ready for a new driveway?</h2>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem" }}>Get a Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
