import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Driveways", href: "/services/driveways" },
  { label: "Patios", href: "/services/patios" },
  { label: "Walkways & Stairs", href: "/services/walkways-stairs" },
  { label: "Retaining Walls", href: "/services/retaining-walls" },
  { label: "Foundations", href: "/services/foundation-work" },
  { label: "Repair & Reconditioning", href: "/services/reconditioning" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "5rem 1.5rem 3rem", position: "relative", overflow: "hidden" }}>
      {/* Giant faded logo watermark bottom-right */}
      <div aria-hidden style={{ position: "absolute", bottom: "-50px", right: "-100px", opacity: 0.035, pointerEvents: "none" }}>
        <Image
          src="/images/brand/portal-logo-cropped.jpeg"
          alt=""
          width={1700}
          height={900}
          style={{ width: "900px", height: "auto", filter: "invert(1)", objectFit: "contain" }}
        />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Top: logo + tagline */}
        <div style={{ marginBottom: "3.5rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="/images/brand/portal-logo-cropped.jpeg"
            alt="Portal — Seattle Concrete"
            width={1700}
            height={900}
            style={{ height: "110px", width: "auto", filter: "invert(1)", objectFit: "contain", marginBottom: "1.5rem" }}
          />
          <p style={{ fontFamily: "var(--font-anton, sans-serif)", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "#FFFFFF", letterSpacing: "0.02em", maxWidth: "540px", lineHeight: 1.1 }}>
            Concrete with conviction. <span style={{ color: "#FF6B1A" }}>West Seattle since the 80s.</span>
          </p>
        </div>

        {/* Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          {/* Services */}
          <div>
            <p style={{ fontFamily: "var(--font-archivo, sans-serif)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>
              Services
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "none", padding: 0 }}>
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link-hover" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: "var(--font-archivo, sans-serif)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>
              Portal
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "none", padding: 0 }}>
              {company.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link-hover" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "var(--font-archivo, sans-serif)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>
              Get in touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="tel:+12068296396" style={{ fontFamily: "var(--font-anton, sans-serif)", color: "#FF6B1A", fontSize: "1.1rem", letterSpacing: "0.03em" }}>
                (206) 829-6396
              </a>
              <a href="mailto:chris@buildwithportal.com" className="link-hover" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem" }}>
                chris@buildwithportal.com
              </a>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", marginTop: "0.4rem" }}>
                West Seattle, WA
              </p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>
                Mon–Fri 7:30a – 5p
              </p>
            </div>
          </div>

          {/* Social + License */}
          <div>
            <p style={{ fontFamily: "var(--font-archivo, sans-serif)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>
              Follow
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href="https://www.instagram.com/portal.llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/Portal-Concrete/61587187841272/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}
              >
                Facebook
              </a>
            </div>
            <p style={{ fontFamily: "var(--font-archivo, sans-serif)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "2rem", marginBottom: "0.6rem" }}>
              License
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", fontFamily: "var(--font-archivo, monospace)", letterSpacing: "0.04em" }}>
              WA · PORTAL*803D4
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", marginTop: "0.25rem" }}>
              Licensed · Bonded · Insured
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "var(--font-archivo, sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Portal LLC · Residential concrete, West Seattle
          </p>
          <p style={{ fontFamily: "var(--font-archivo, sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>
            buildwithportal.life
          </p>
        </div>
      </div>
    </footer>
  );
}
