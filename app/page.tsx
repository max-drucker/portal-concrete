import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";
import { reviews } from "@/lib/reviews";

const services = [
  {
    title: "Driveways",
    slug: "driveways",
    desc: "Broom-finish, exposed aggregate, stamped. Built to handle Seattle winters for decades.",
    img: "/images/driveways/driveway_4_big_house.jpeg",
  },
  {
    title: "Patios",
    slug: "patios",
    desc: "Outdoor living slabs that age well. Clean lines, proper drainage, no shortcuts.",
    img: "/images/patios/patio_1_bw_chairs.jpeg",
  },
  {
    title: "Walkways & Stairs",
    slug: "walkways-stairs",
    desc: "Safe, code-compliant, and dialed in. From garden paths to front-entry overhauls.",
    img: "/images/walkways-stairs/walkways_stairs_3_black_tiles_rain.jpeg",
  },
  {
    title: "Retaining Walls",
    slug: "retaining-walls",
    desc: "Structural walls that hold. Engineered for slope, soil, and the long haul.",
    img: "/images/walls/walls_7_retaining_wall.jpeg",
  },
  {
    title: "Foundation Work",
    slug: "foundation-work",
    desc: "New pours, crack repair, waterproofing. The kind of work that holds up a house.",
    img: "/images/team/wix_garage_pour.jpeg",
  },
  {
    title: "Reconditioning",
    slug: "reconditioning",
    desc: "Old concrete doesn't have to look old. Overlay, grind, seal — we bring it back.",
    img: "/images/stamped/stamped_decorative_3_textured.jpeg",
  },
];

const featuredProjects = [
  { img: "/images/driveways/driveway_5_modern_garage.jpeg", label: "Modern garage driveway, West Seattle" },
  { img: "/images/patios/patio_6_big_tiles.jpeg", label: "Oversized tile patio, Admiral" },
  { img: "/images/walkways-stairs/walkways_stairs_15_down_stairs.jpeg", label: "Front-entry stairs rebuild, Fauntleroy" },
];

const featuredReviews = reviews.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "flex-end", backgroundColor: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/hero-stairs.jpeg"
            alt="Freshly poured concrete stairs"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.55 }}
          />
          {/* bottom gradient */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 5rem", width: "100%" }}>
          {/* Swirlie mark above headline */}
          <div style={{ marginBottom: "1.5rem", opacity: 0.9 }}>
            <SwirlieSpiral size={52} color="#FFFFFF" />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-anton, 'Anton', sans-serif)",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              maxWidth: "900px",
              marginBottom: "1.75rem",
            }}
          >
            Concrete<br />with<br />conviction.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "520px",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            West Seattle&rsquo;s residential concrete studio. Driveways, patios, stairs, retaining walls — done right, by hand, by Chris.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-cta">Free Estimate</Link>
            <Link href="/projects" className="btn-outline">See the Work</Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#F5F3EF", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", textAlign: "center" }}>
          {[
            { num: "6+", label: "Years in Business" },
            { num: "100+", label: "Five-Star Reviews" },
            { num: "1", label: "Owner on Every Job" },
          ].map((s) => (
            <div key={s.label}>
              <p style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0A0A0A", lineHeight: 1, letterSpacing: "0.02em" }}>
                {s.num}
              </p>
              <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10,10,10,0.5)", marginTop: "0.4rem" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ padding: "6rem 1.5rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#FFFFFF" }}>
              What we build
            </h2>
            <Link href="/services" style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "2px" }}>
              All Services →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}>
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="img-zoom-wrap"
                style={{ backgroundColor: "#0A0A0A", display: "block", position: "relative", overflow: "hidden", aspectRatio: "4/3" }}
              >
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  style={{ opacity: 0.7 }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "1.4rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                    {svc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ padding: "6rem 1.5rem", backgroundColor: "#111111" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#FFFFFF" }}>
              Recent work
            </h2>
            <Link href="/projects" style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "2px" }}>
              Full Gallery →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2px" }}>
            {featuredProjects.map((p) => (
              <div key={p.img} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src={p.img}
                  alt={p.label}
                  fill
                  className="object-cover"
                  style={{ filter: "grayscale(20%)" }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.25rem", background: "linear-gradient(to top, rgba(10,10,10,0.8), transparent)" }}>
                  <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
                    {p.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS SNIPPET ── */}
      <section style={{ padding: "6rem 1.5rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", display: "flex", gap: "1rem", alignItems: "center" }}>
            <SwirlieSpiral size={28} color="#FF6B1A" />
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.5rem, 4vw, 3rem)", color: "#FFFFFF" }}>
              100+ five-star reviews
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {featuredReviews.map((r, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                <p style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.25rem" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                  — {r.author}
                </p>
                {/* Stars */}
                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", display: "flex", gap: "2px" }}>
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "#FF6B1A", fontSize: "0.7rem" }}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link href="/reviews" className="btn-outline">Read All Reviews</Link>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ backgroundColor: "#FF6B1A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem" }}>
          <SwirlieSpiral size={36} color="#0A0A0A" />
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 6vw, 5rem)", color: "#0A0A0A", lineHeight: 1, maxWidth: "700px" }}>
            Ready to pour?<br />Let&rsquo;s talk.
          </h2>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.05rem", color: "rgba(10,10,10,0.6)", maxWidth: "440px" }}>
            Free estimates. Fast turnaround. No subcontractors.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#0A0A0A",
              color: "#FFFFFF",
              fontFamily: "var(--font-anton, 'Anton', sans-serif)",
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
            }}
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
