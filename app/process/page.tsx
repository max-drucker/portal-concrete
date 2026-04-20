import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "The Process",
  description: "How Portal pours concrete — from first site visit to final finish. No surprises, no shortcuts.",
};

const steps = [
  {
    num: "01",
    title: "Site visit & estimate",
    body: "Chris comes to you. No photos sent back and forth, no guesswork. He walks the site, talks through options, and gives you a straight price — usually within 24 hours. Free, always.",
  },
  {
    num: "02",
    title: "Demolition & prep",
    body: "Bad concrete out, substrate prepped right. This is where most contractors cut corners — not us. Proper compaction, correct base depth, drainage slope built in before any concrete is poured.",
  },
  {
    num: "03",
    title: "Forming",
    body: "Forms set to grade, checked twice. Every edge and corner is thought through. If it's stamped or decorative, the pattern layout is reviewed with you before the pour.",
  },
  {
    num: "04",
    title: "The pour",
    body: "Concrete ordered to spec — the right mix, the right slump. Owner on site. We don't rush the pour and we don't let it sit too long. Timing is everything in concrete work.",
  },
  {
    num: "05",
    title: "Finish work",
    body: "Broom, trowel, stamp, or exposed aggregate — whatever the finish, it's done by hand at the right moment. Control joints cut to spec. Edges tooled clean.",
  },
  {
    num: "06",
    title: "Cure & seal",
    body: "Fresh concrete gets curing compound and time. We walk you through care instructions before we leave. Most residential slabs are walkable in 24 hours, driveable in a week.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 1.5rem 4rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={32} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              Process
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#FFFFFF", lineHeight: 0.95 }}>
            How we<br />work
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", maxWidth: "520px", marginTop: "1.75rem", lineHeight: 1.7 }}>
            Concrete is not complicated if you do it right. Here&rsquo;s what right looks like.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "2rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                padding: "3.5rem 0",
                borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                alignItems: "center",
              }}
            >
              <div>
                <span style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "5rem", color: "rgba(255,255,255,0.05)", lineHeight: 1, display: "block", marginBottom: "-0.5rem" }}>
                  {step.num}
                </span>
                <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#FFFFFF" }}>
                  {step.title}
                </h2>
              </div>
              <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo break */}
      <section style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <Image
          src="/images/team/team_2_jackhammer.jpeg"
          alt="Portal crew on the job"
          fill
          className="object-cover"
          style={{ opacity: 0.6 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.9) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 1.5rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
            <p style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "clamp(1.2rem, 3vw, 2rem)", color: "rgba(255,255,255,0.9)", fontStyle: "italic", maxWidth: "500px", lineHeight: 1.5 }}>
              &ldquo;We don&rsquo;t cut corners. Proper prep, proper pour, proper finish — every time.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "1rem" }}>
              — Chris Hildebrand, Owner
            </p>
          </div>
        </div>
      </section>

      {/* Why Portal */}
      <section style={{ backgroundColor: "#111111", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#FFFFFF", marginBottom: "3rem" }}>
            Why it matters
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "No subcontractors", body: "Chris pours every job himself, with his own crew. You know who you hired and that's who shows up." },
              { title: "Residential only", body: "We don't do commercial work. Every project gets the focus it deserves." },
              { title: "Concrete specialists", body: "We do concrete. Just concrete. Six-plus years of it. That depth shows in the work." },
              { title: "Free estimates", body: "No obligation, no pressure. Come see what it would cost — then decide." },
            ].map((item) => (
              <div key={item.title} style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1.5rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                  <SwirlieSpiral size={18} color="#FF6B1A" />
                  <h3 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "1.1rem", color: "#FFFFFF" }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FF6B1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0A0A0A", marginBottom: "1.5rem" }}>
            Ready to start?
          </h2>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem" }}>
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
