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
      style={{ backgroundColor: "rgba(255,255,255,0.96)", borderBottom: "1px solid rgba(10,10,10,0.1)", backdropFilter: "blur(12px)" }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto">
        {/* Logo — the real hand-drawn wordmark */}
        <Link href="/" className="flex items-center" aria-label="Portal — Seattle Concrete, home">
          <Image
            src="/images/brand/portal-logo-cropped.jpeg"
            alt="Portal — Seattle Concrete"
            width={1700}
            height={900}
            priority
            style={{
              height: "56px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-hover"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.68)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+12068296396"
            className="hidden md:inline-flex items-center gap-2 link-hover"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              color: "rgba(10,10,10,0.68)",
            }}
          >
            (206) 829-6396
          </a>
          <Link href="/contact" className="btn-cta hidden md:inline-block" style={{ padding: "0.65rem 1.4rem", fontSize: "0.75rem" }}>
            Free Estimate
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#0A0A0A", transition: "transform 0.2s", transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#0A0A0A", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#0A0A0A", transition: "transform 0.2s", transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(10,10,10,0.1)" }} className="md:hidden px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  fontSize: "0.95rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(10,10,10,0.78)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+12068296396"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                fontSize: "0.95rem",
                color: "#FF6B1A",
                marginTop: "0.5rem",
              }}
            >
              (206) 829-6396
            </a>
            <Link href="/contact" className="btn-cta mt-2" onClick={() => setOpen(false)}>
              Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
