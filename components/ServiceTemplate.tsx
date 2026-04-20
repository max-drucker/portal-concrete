import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export type ServicePage = {
  /** URL slug (matches folder name) — used for hreflang, cross-linking */
  slug: string;
  /** Top eyebrow label, e.g. "01 · Driveways" */
  eyebrow: string;
  /** Big hero headline, line 1 */
  headlineA: string;
  /** Big hero headline, line 2 (renders in orange) */
  headlineB: string;
  /** Hero lead paragraph (1-2 sentences) */
  lead: string;
  /** Hero background image path */
  heroImage: string;
  /** Big-idea pull quote for the bone section */
  manifestoHeadlineA: string;
  manifestoHeadlineB: string; // rendered in orange
  manifestoBody: string;
  /** 3-4 "what we do" bullet cards */
  features: Array<{ title: string; body: string }>;
  /** 6-8 gallery images */
  gallery: Array<{ src: string; label: string }>;
  /** "The things we care about" list — 3-5 items */
  standards: string[];
  /** Cross-sell links (other related services) */
  relatedSlugs: string[];
};

const ALL_SERVICES: Record<string, { label: string; href: string }> = {
  "driveways": { label: "Driveways", href: "/services/driveways" },
  "patios": { label: "Patios", href: "/services/patios" },
  "walkways-stairs": { label: "Walkways & Stairs", href: "/services/walkways-stairs" },
  "retaining-walls": { label: "Retaining Walls", href: "/services/retaining-walls" },
  "foundation-work": { label: "Foundations", href: "/services/foundation-work" },
  "reconditioning": { label: "Repair & Reconditioning", href: "/services/reconditioning" },
};

export default function ServiceTemplate({ page }: { page: ServicePage }) {
  return (
    <>
      {/* ──────────────────────────────────────────────
         HERO
      ────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "70vh", minHeight: "480px", overflow: "hidden", backgroundColor: "#0A0A0A" }}>
        <Image
          src={page.heroImage}
          alt={`${page.headlineA} — Portal Concrete, West Seattle`}
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.55 }}
        />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, padding: "6rem 1.5rem 4rem", display: "flex", alignItems: "flex-end" }}>
          <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
              <SwirlieSpiral size={22} color="#FF6B1A" />
              <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                {page.eyebrow}
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.5rem, 9vw, 7rem)", color: "#FFFFFF", lineHeight: 0.9, letterSpacing: "-0.005em", marginBottom: "1.5rem" }}>
              {page.headlineA}<br />
              <span style={{ color: "#FF6B1A" }}>{page.headlineB}</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.65, maxWidth: "640px" }}>
              {page.lead}
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         MANIFESTO — bone palate cleanser
      ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F8F5ED", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(10,10,10,0.45)", display: "block", marginBottom: "1.25rem" }}>
            The pitch
          </span>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#0A0A0A", lineHeight: 0.95, marginBottom: "1.75rem" }}>
            {page.manifestoHeadlineA}<br />
            <span style={{ color: "#FF6B1A" }}>{page.manifestoHeadlineB}</span>
          </h2>
          <p style={{ fontSize: "1.15rem", color: "rgba(10,10,10,0.72)", lineHeight: 1.65, maxWidth: "680px", margin: "0 auto" }}>
            {page.manifestoBody}
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         FEATURES — 3/4 what-we-do cards
      ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "1rem" }}>
            02 · What we do
          </span>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "3rem", maxWidth: "24ch" }}>
            The <span style={{ color: "#FF6B1A" }}>full range.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem" }}>
            {page.features.map((f) => (
              <div key={f.title} style={{ borderTop: "2px solid #FF6B1A", paddingTop: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "0.75rem", letterSpacing: "0.01em" }}>
                  {f.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         GALLERY
      ────────────────────────────────────────────── */}
      {page.gallery.length > 0 && (
        <section style={{ backgroundColor: "#0A0A0A", padding: "2rem 1.5rem 6rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "1rem" }}>
              03 · Recent work
            </span>
            <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "3rem" }}>
              Things we&rsquo;ve <span style={{ color: "#FF6B1A" }}>poured.</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {page.gallery.map((g, i) => (
                <div key={i} style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", backgroundColor: "#1a1a1a" }}>
                  <Image
                    src={g.src}
                    alt={g.label}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                    className="gallery-img"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 50%)", display: "flex", alignItems: "flex-end", padding: "1rem" }}>
                    <p style={{ color: "#FFFFFF", fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.8rem", letterSpacing: "0.04em", fontWeight: 500 }}>
                      {g.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────
         STANDARDS — what we care about
      ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "5rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "1rem" }}>
            04 · Our standards
          </span>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", lineHeight: 0.95, marginBottom: "3rem" }}>
            Non-negotiable.
          </h2>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {page.standards.map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.25rem" }}>
                <span style={{ fontFamily: "var(--font-anton, sans-serif)", color: "#FF6B1A", fontSize: "1.5rem", lineHeight: 1, flexShrink: 0, letterSpacing: "0.02em", minWidth: "42px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.05rem", lineHeight: 1.6 }}>
                  {s}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         RELATED SERVICES
      ────────────────────────────────────────────── */}
      {page.relatedSlugs.length > 0 && (
        <section style={{ backgroundColor: "#0A0A0A", padding: "4rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "1.5rem" }}>
              Also pour
            </span>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {page.relatedSlugs.map((s) => {
                const svc = ALL_SERVICES[s];
                if (!svc) return null;
                return (
                  <Link key={s} href={svc.href} className="link-hover" style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "1.35rem", color: "#FFFFFF", letterSpacing: "0.02em", textDecoration: "none", paddingBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                    {svc.label} →
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────
         CTA
      ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FF6B1A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.25rem, 6vw, 4rem)", color: "#0A0A0A", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Ready to pour?<br />Let&rsquo;s talk.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(10,10,10,0.78)", maxWidth: "520px", margin: "0 auto 2rem" }}>
            Free estimates. Fast response. Chris answers his phone.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
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
