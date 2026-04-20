import type { Metadata } from "next";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";
import { reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description: "100+ five-star reviews from West Seattle homeowners who hired Portal Concrete for driveways, patios, stairs, and more.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 1.5rem 4rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={32} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              Reviews
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#FFFFFF", lineHeight: 0.95 }}>
            100+ five-star<br />reviews
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", maxWidth: "520px", marginTop: "1.75rem", lineHeight: 1.7 }}>
            West Seattle homeowners, in their own words.
          </p>

          {/* Rating summary */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "2.5rem" }}>
            <div>
              <span style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "4rem", color: "#FFFFFF", lineHeight: 1 }}>4.9</span>
              <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#FF6B1A", fontSize: "1.2rem" }}>★</span>
                ))}
              </div>
            </div>
            <div style={{ borderLeft: "1px solid rgba(255,255,255,0.12)", paddingLeft: "1.5rem" }}>
              <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
                Average rating
              </p>
              <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>
                100+ reviews on Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Review grid */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "2rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "2rem",
                  position: "relative",
                  backgroundColor: i % 7 === 0 ? "#111111" : "#0A0A0A",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "#FF6B1A", fontSize: "0.75rem" }}>★</span>
                  ))}
                </div>
                <p style={{
                  fontFamily: "var(--font-archivo, 'Archivo', sans-serif)",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>
                      {r.author[0]}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}>
                    {r.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.9rem", color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>
              See all 100+ reviews on Google
            </p>
            <a
              href="https://www.google.com/search?q=Portal+Concrete+Seattle+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#F5F3EF", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0A0A0A", marginBottom: "1.5rem" }}>
            Join them.
          </h2>
          <Link href="/contact" className="btn-cta">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
