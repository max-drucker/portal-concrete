import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";
import { featuredReviews } from "@/lib/reviews";

const services = [
  {
    title: "Driveways",
    slug: "driveways",
    desc: "Broom, exposed aggregate, stamped. Built for Seattle winters.",
    img: "/images/driveways/driveway_4_big_house.jpeg",
  },
  {
    title: "Patios",
    slug: "patios",
    desc: "Outdoor living slabs that age well. Clean lines, proper drainage.",
    img: "/images/patios/patio_1_bw_chairs.jpeg",
  },
  {
    title: "Walkways & Stairs",
    slug: "walkways-stairs",
    desc: "The approach to your house, poured right.",
    img: "/images/walkways-stairs/walkways_stairs_15_down_stairs.jpeg",
  },
  {
    title: "Retaining Walls",
    slug: "retaining-walls",
    desc: "Steep lots, tough drainage. We solve for both.",
    img: "/images/walls/walls_2_base.jpeg",
  },
  {
    title: "Foundations",
    slug: "foundation-work",
    desc: "Slab-on-grade, footings, stem walls. The part you don't see.",
    img: "/images/other/other_4_bolt.jpeg",
  },
  {
    title: "Repair & Reconditioning",
    slug: "reconditioning",
    desc: "When tear-out isn't the answer. Crack repair, resurfacing, grinding.",
    img: "/images/before-after/after-stairs.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ────────────────────────────────────────────────────────────
         HERO — logo-led, eyebrow stamp, massive display, orange CTA
      ──────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "6rem 1.5rem 5rem", overflow: "hidden" }}>
        {/* Faint background photo */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/driveways/driveway_5_modern_garage.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center 70%",
            opacity: 0.14,
            filter: "grayscale(1) contrast(1.1)",
          }}
        />
        {/* Scrim */}
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, #0A0A0A 85%)" }} />

        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "2.5rem" }}>
            <SwirlieSpiral size={24} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
              West Seattle · Residential Concrete · Est. Owner-Operated
            </span>
          </div>

          {/* Massive wordmark headline */}
          <h1
            style={{
              fontFamily: "var(--font-anton, sans-serif)",
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
              color: "#FFFFFF",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              marginBottom: "2rem",
              maxWidth: "15ch",
            }}
          >
            Concrete with<br />
            <span style={{ color: "#FF6B1A" }}>conviction.</span>
          </h1>

          <p style={{ maxWidth: "560px", fontSize: "1.15rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            35+ years of pouring the driveways, patios, and walls that West Seattle homeowners actually live with. Owner on every job. Year-round pours, rain or shine.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-cta">Get a Free Estimate</Link>
            <a href="tel:+12068296396" className="btn-outline">(206) 829-6396</a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
         STATS BAR — the four numbers, big + orange
      ──────────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "2rem" }}>
            {[
              { num: "35+", label: "Years of concrete" },
              { num: "150+", label: "Five-star reviews" },
              { num: "4.9", label: "Google rating" },
              { num: "1", label: "Owner on every job" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FF6B1A", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
         SERVICES GRID
      ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <div>
              <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                01 · What we build
              </span>
              <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 0.95, marginTop: "0.75rem" }}>
                Every pour, <span style={{ color: "#FF6B1A" }}>every time.</span>
              </h2>
            </div>
            <Link href="/services" className="link-hover" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              All services →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service-tile img-zoom-wrap"
                style={{ backgroundColor: "#0A0A0A", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", display: "block" }}
              >
                <div style={{ position: "relative", aspectRatio: "4/3" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover", filter: "grayscale(0.3)" }} sizes="(max-width: 768px) 100vw, 400px" />
                </div>
                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "1.6rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.55 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
         THE ALL-SEASON MANIFESTO BAND (bone section, editorial moment)
      ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F8F5ED", padding: "7rem 1.5rem", position: "relative" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(10,10,10,0.5)", display: "block", marginBottom: "1.5rem" }}>
            02 · The Portal difference
          </span>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.75rem, 8vw, 6.5rem)", color: "#0A0A0A", lineHeight: 0.9, marginBottom: "2rem" }}>
            Pour year-round.<br />
            <span style={{ color: "#FF6B1A" }}>Rain or shine.</span>
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(10,10,10,0.75)", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto 2rem" }}>
            Most concrete contractors pack it in from November to April. In the Pacific Northwest, that's half the year your project sits waiting. We don't work like that. Cold-weather admixtures, covered cures, proper site protection — we know how to pour concrete when the weather says otherwise.
          </p>
          <Link href="/process" className="link-hover" style={{ color: "#0A0A0A", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "1px solid #0A0A0A", paddingBottom: "2px" }}>
            Read our process →
          </Link>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
         FEATURED REVIEWS
      ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              03 · What customers say
            </span>
            <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 0.95, marginTop: "0.75rem" }}>
              <span style={{ color: "#FF6B1A" }}>150+</span> five-star reviews.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", marginTop: "1rem", maxWidth: "520px" }}>
              A 4.9 average across Google, HomeAdvisor, and BuildZoom. The ones below are real.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {featuredReviews.map((r, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "2rem 1.75rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "0.15rem" }}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k} style={{ color: "#FF6B1A", fontSize: "0.9rem" }}>★</span>
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.65, flex: 1 }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1rem" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontWeight: 500 }}>— {r.author}</span>
                  <span style={{ fontFamily: "var(--font-archivo, sans-serif)", color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {r.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/reviews" className="btn-outline">Read all 150+ reviews</Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
         MEET CHRIS — subtle skate moment (founder on a driveway)
      ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "0", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", alignItems: "stretch", gap: 0 }}>
          {/* Image side */}
          <div style={{ position: "relative", minHeight: "520px" }}>
            <Image
              src="/images/chris/chris-driveway-skate.jpg"
              alt="Chris Hildebrand, founder of Portal, at a finished residential driveway"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Text side */}
          <div style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#0A0A0A" }}>
            <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "1rem" }}>
              04 · Meet the founder
            </span>
            <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 0.92, letterSpacing: "0.005em", marginBottom: "1.75rem" }}>
              Chris Hildebrand.<br />
              <span style={{ color: "#FF6B1A" }}>Owner-operator.</span><br />
              On every job.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: "52ch" }}>
              35+ years pouring concrete in Seattle. Chris handles every bid personally, works every pour, and finishes what he starts. No shell games. No subs you&rsquo;ve never met showing up in a random truck.
            </p>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, maxWidth: "52ch", marginBottom: "2rem" }}>
              He reads concrete by how it finishes and, when the work&rsquo;s done, by how it rides.
            </p>
            <div>
              <Link href="/about" style={{ display: "inline-block", fontFamily: "var(--font-anton, sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF6B1A", borderBottom: "1px solid #FF6B1A", paddingBottom: "2px" }}>
                Read Chris&rsquo;s story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
         FINAL CTA — orange band
      ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FF6B1A", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.75rem, 7vw, 5rem)", color: "#0A0A0A", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Ready to pour?<br />Let&rsquo;s talk.
          </h2>
          <p style={{ fontSize: "1.15rem", color: "rgba(10,10,10,0.8)", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.55 }}>
            Free estimates. Fast response. Chris answers his phone.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#0A0A0A",
                color: "#FFFFFF",
                fontFamily: "var(--font-anton, sans-serif)",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "1rem 2.25rem",
              }}
            >
              Request an Estimate
            </Link>
            <a
              href="tel:+12068296396"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#0A0A0A",
                fontFamily: "var(--font-anton, sans-serif)",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "1rem 2.25rem",
                border: "1px solid #0A0A0A",
              }}
            >
              (206) 829-6396
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
