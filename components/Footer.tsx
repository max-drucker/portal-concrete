'use client'

import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Driveways", href: "/services/driveways" },
  { label: "Patios", href: "/services/patios" },
  { label: "Walkways & Stairs", href: "/services/walkways-stairs" },
  { label: "Retaining Walls", href: "/services/retaining-walls" },
  { label: "Foundation Work", href: "/services/foundation-work" },
  { label: "Reconditioning", href: "/services/reconditioning" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large faded swirlie background */}
      <div
        style={{
          position: "absolute",
          right: "-80px",
          bottom: "-80px",
          width: "400px",
          height: "400px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/brand/swirlie-logo.png"
          alt=""
          fill
          className="object-contain invert"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/brand/swirlie-logo.png"
                alt="Portal"
                width={28}
                height={28}
                className="invert"
              />
              <span
                style={{
                  fontFamily: "var(--font-anton, 'Anton', sans-serif)",
                  letterSpacing: "0.12em",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                Portal
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "240px" }}>
              West Seattle&rsquo;s residential concrete studio. Owner on every job.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/people/Portal-Concrete/61587187841272/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/portal.llc/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFFFFF")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="/contact"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}
              >
                Get in touch
              </a>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
                West Seattle, WA
              </p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
                Residential concrete only
              </p>
              <Link href="/contact" className="btn-cta mt-4" style={{ fontSize: "0.8rem", padding: "0.75rem 1.75rem" }}>
                Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="section-rule mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Portal LLC. All rights reserved. West Seattle, WA.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Reviews", href: "/reviews" },
              { label: "Process", href: "/process" },
              { label: "About", href: "/about" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
