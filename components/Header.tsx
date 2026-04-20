'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#0A0A0A", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/brand/swirlie-logo.png"
            alt="Portal spiral mark"
            width={32}
            height={32}
            className="invert"
          />
          <span
            style={{
              fontFamily: "var(--font-anton, 'Anton', sans-serif)",
              letterSpacing: "0.12em",
              fontSize: "1.05rem",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Portal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFFFFF")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+12068296396"
            className="hidden md:inline-flex items-center gap-2"
            style={{
              fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            (206) 829-6396
          </a>
          <Link href="/contact" className="btn-cta hidden md:inline-block" style={{ padding: "0.6rem 1.5rem", fontSize: "0.8rem" }}>
            Free Estimate
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#FFFFFF", transition: "transform 0.2s", transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#FFFFFF", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#FFFFFF", transition: "transform 0.2s", transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.08)" }} className="md:hidden px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-cta mt-2" onClick={() => setOpen(false)}>
              Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
