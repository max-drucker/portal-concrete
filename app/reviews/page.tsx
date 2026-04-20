import type { Metadata } from "next";
import Link from "next/link";
import { reviews } from "@/lib/reviews";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "150+ five-star reviews. 4.9 average rating on Google. Read what West Seattle homeowners say about Portal Concrete.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "6rem 1.5rem 4rem", backgroundColor: "#0A0A0A", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={24} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
              Reviews · Google · HomeAdvisor · BuildZoom
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(3rem, 10vw, 8rem)", color: "#FFFFFF", lineHeight: 0.9, letterSpacing: "-0.01em" }}>
            <span style={{ color: "#FF6B1A" }}>150+</span><br />
            five-star<br />
            reviews.
          </h1>
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", alignItems: "baseline", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "3rem", color: "#FF6B1A", lineHeight: 1 }}>4.9</p>
              <p style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "0.4rem" }}>
                ★★★★★ average on Google
              </p>
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "460px", lineHeight: 1.65 }}>
              The ones below are real, pulled from our public profiles. Clients describe Chris and the crew in their own words.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "1.75rem 1.65rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                backgroundColor: "rgba(255,255,255,0.015)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "0.15rem" }}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k} style={{ color: "#FF6B1A", fontSize: "0.88rem" }}>★</span>
                  ))}
                </div>
                <span style={{ fontFamily: "var(--font-archivo, sans-serif)", color: "rgba(255,255,255,0.35)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {r.source}
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.65, flex: 1 }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", fontWeight: 500, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.9rem" }}>
                — {r.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FF6B1A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", color: "#0A0A0A", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            Liked our work?<br />Leave a review.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(10,10,10,0.8)", maxWidth: "500px", margin: "0 auto 2rem" }}>
            We&rsquo;re grateful every time. Google reviews help West Seattle neighbors find us.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.google.com/search?q=Portal+LLC+Seattle+Concrete"
              target="_blank"
              rel="noopener noreferrer"
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
              Leave a Google Review
            </a>
            <Link
              href="/contact"
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
              Start a New Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
