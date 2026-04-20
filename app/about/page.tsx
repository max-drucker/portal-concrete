import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "About",
  description: "Portal LLC — West Seattle residential concrete. Owner and founder Chris Hildebrand, 6+ years, 100+ five-star reviews.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 1.5rem 4rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={32} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              About
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#FFFFFF", lineHeight: 0.95 }}>
            Built<br />different.
          </h1>
        </div>
      </section>

      {/* Chris section */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "2rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* Photo */}
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
            <Image
              src="/images/team/chris_team1.jpeg"
              alt="Chris Hildebrand, Portal founder"
              fill
              className="object-cover"
              style={{ filter: "grayscale(20%)" }}
            />
          </div>

          {/* Text */}
          <div style={{ paddingTop: "1rem" }}>
            <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(1.8rem, 3vw, 3rem)", color: "#FFFFFF", marginBottom: "2rem" }}>
              Chris Hildebrand<br />
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6em" }}>Founder & Owner</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Portal started with a simple idea: West Seattle deserves a concrete contractor that actually cares about the craft. Not the fastest, not the cheapest — the most thorough.",
                "Chris founded Portal after years in the trades, learning what separates concrete that lasts from concrete that cracks. The answer is always prep. Proper sub-base, proper forms, proper timing on the pour.",
                "Every Portal project has Chris on site. Not a foreman, not a crew lead — Chris. He walks every job from demolition to final seal. That's the promise.",
                "When he's not pouring, he's in West Seattle with his family. This is his neighborhood. The work he does here will be here for decades.",
              ].map((para, i) => (
                <p key={i} style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[
                { num: "6+", label: "Years in concrete" },
                { num: "100+", label: "5-star reviews" },
                { num: "1", label: "Owner on every job" },
                { num: "0", label: "Subcontractors" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "2.5rem", color: "#FFFFFF", lineHeight: 1 }}>
                    {s.num}
                  </p>
                  <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "0.3rem" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team photos */}
      <section style={{ backgroundColor: "#111111", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#FFFFFF", marginBottom: "3rem" }}>
            The crew
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "2px" }}>
            {[
              { src: "/images/team/team_1_rainbow_warrior.jpeg", label: "On-site, West Seattle" },
              { src: "/images/team/team_2_jackhammer.jpeg", label: "Demo day" },
              { src: "/images/team/team_3_job_site.jpeg", label: "Crew at work" },
              { src: "/images/team/team_4_backs.jpeg", label: "Pour day" },
              { src: "/images/team/team_5_stairs.jpeg", label: "Finishing stairs" },
              { src: "/images/team/wix_team_grinding.jpeg", label: "Grinding finish" },
            ].map((img) => (
              <div key={img.src} style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}>
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover"
                  style={{ filter: "grayscale(30%)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#FFFFFF", marginBottom: "3rem" }}>
            What we stand for
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "2rem" }}>
            {[
              { title: "No shortcuts", body: "Sub-base compacted. Forms checked. Slump tested. The parts you can't see are the parts that matter most." },
              { title: "Your home, our craft", body: "Residential only. We're not managing 12 commercial sites. Your project has our full attention." },
              { title: "Transparent pricing", body: "Straight quotes. No bait-and-switch. If something changes on-site, you hear about it before we touch it." },
              { title: "West Seattle roots", body: "We work where we live. The accountability that comes from that is the kind you can't fake." },
            ].map((v) => (
              <div key={v.title} style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1.5rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                  <SwirlieSpiral size={18} color="#FF6B1A" />
                  <h3 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "1.1rem", color: "#FFFFFF" }}>{v.title}</h3>
                </div>
                <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  {v.body}
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
            Come meet us on-site.
          </h2>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem" }}>
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
