import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "Services",
  description: "Residential concrete services in West Seattle — driveways, patios, walkways, stairs, retaining walls, foundation work, and reconditioning.",
};

const services = [
  {
    title: "Driveways",
    slug: "driveways",
    desc: "Broom-finish, exposed aggregate, stamped pattern — we do all of it. Every driveway gets proper sub-base prep, reinforcement, and a finish that holds up to Seattle freeze-thaw cycles. No thin pours, no shortcuts.",
    img: "/images/driveways/driveway_4_big_house.jpeg",
  },
  {
    title: "Patios",
    slug: "patios",
    desc: "Slabs that become the centerpiece of your yard. We handle grade, drainage, and form work before a drop of concrete falls. Smooth, broom, or decorative — you pick the finish.",
    img: "/images/patios/patio_6_big_tiles.jpeg",
  },
  {
    title: "Walkways & Stairs",
    slug: "walkways-stairs",
    desc: "From tight garden paths to full front-entry rebuilds. ADA-compliant slopes, proper rise-run ratios, and clean edges. The entry to your home should look like you meant it.",
    img: "/images/walkways-stairs/walkways_stairs_15_down_stairs.jpeg",
  },
  {
    title: "Retaining Walls",
    slug: "retaining-walls",
    desc: "Seattle lots are steep. Retaining walls have to do a job — hold soil, manage water, and stay put for 30 years. We engineer them that way.",
    img: "/images/walls/walls_7_retaining_wall.jpeg",
  },
  {
    title: "Foundation Work",
    slug: "foundation-work",
    desc: "New foundation pours, crack repair, waterproofing, and slab replacement. The work nobody sees — done the way it deserves to be done.",
    img: "/images/team/wix_garage_pour.jpeg",
  },
  {
    title: "Reconditioning",
    slug: "reconditioning",
    desc: "Old, stained, or crumbling concrete doesn't have to be torn out. Overlay systems, grinding, and sealing can bring surfaces back to life at a fraction of replacement cost.",
    img: "/images/stamped/stamped_decorative_3_textured.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 1.5rem 4rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={32} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              Services
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#FFFFFF", lineHeight: 0.95 }}>
            What<br />we build
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", maxWidth: "560px", marginTop: "1.75rem", lineHeight: 1.7 }}>
            Residential concrete only. No commercial jobs, no subcontractors, no rushing. Chris is on every site from first form to final broom.
          </p>
        </div>
      </section>

      {/* Service list */}
      <section style={{ backgroundColor: "#0A0A0A", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}>
            {services.map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="service-tile"
                style={{
                  backgroundColor: "#0A0A0A",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                  textDecoration: "none",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "3/2", order: i % 2 === 0 ? 0 : 1 }}>
                  <Image src={svc.img} alt={svc.title} fill className="object-cover" style={{ opacity: 0.8 }} />
                </div>
                {/* Text */}
                <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 1 : 0 }}>
                  <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
                    {svc.title}
                  </h2>
                  <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "400px", marginBottom: "1.5rem" }}>
                    {svc.desc}
                  </p>
                  <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF6B1A" }}>
                    See the work →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#F5F3EF", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0A0A0A", marginBottom: "1rem" }}>
            Not sure what you need?
          </h2>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1rem", color: "rgba(10,10,10,0.55)", marginBottom: "2rem" }}>
            Send us a message and we&rsquo;ll figure it out together. Free estimates, no pressure.
          </p>
          <Link href="/contact" className="btn-cta">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
