import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwirlieSpiral } from "@/components/Swirlie";

export const metadata: Metadata = {
  title: "Projects",
  description: "Concrete project gallery — driveways, patios, walkways, stairs, retaining walls, and more across West Seattle.",
};

type Category = "all" | "driveways" | "patios" | "walkways-stairs" | "walls" | "other";

interface Project {
  src: string;
  label: string;
  category: Category;
}

const projects: Project[] = [
  { src: "/images/driveways/driveway_1_grey_garage.jpeg", label: "Broom-finish driveway", category: "driveways" },
  { src: "/images/driveways/driveway_2_grey_house.jpeg", label: "Grey house driveway replacement", category: "driveways" },
  { src: "/images/driveways/driveway_3_white_garage.jpeg", label: "White garage approach", category: "driveways" },
  { src: "/images/driveways/driveway_4_big_house.jpeg", label: "Large residential driveway", category: "driveways" },
  { src: "/images/driveways/driveway_5_modern_garage.jpeg", label: "Modern garage driveway", category: "driveways" },
  { src: "/images/driveways/driveway_6_long_walk.jpeg", label: "Long approach driveway", category: "driveways" },
  { src: "/images/driveways/wix_driveway_broom.jpeg", label: "Broom-finish close-up", category: "driveways" },
  { src: "/images/patios/patio_1_bw_chairs.jpeg", label: "Backyard patio slab", category: "patios" },
  { src: "/images/patios/patio_2_fence.jpeg", label: "Fenced patio pour", category: "patios" },
  { src: "/images/patios/patio_3_fountain.jpeg", label: "Patio with fountain surround", category: "patios" },
  { src: "/images/patios/patio_4_reddish.jpeg", label: "Decorative patio finish", category: "patios" },
  { src: "/images/patios/patio_5_grey_tiles.jpeg", label: "Large-format tile patio", category: "patios" },
  { src: "/images/patios/patio_6_big_tiles.jpeg", label: "Oversized slab patio", category: "patios" },
  { src: "/images/patios/patio_7_overhang.jpeg", label: "Covered patio extension", category: "patios" },
  { src: "/images/walkways-stairs/walkways_stairs_1_blue_house.jpeg", label: "Front walkway, blue house", category: "walkways-stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_3_black_tiles_rain.jpeg", label: "Wet-pour stairs", category: "walkways-stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_4_grey_siding.jpeg", label: "Entry stairs rebuild", category: "walkways-stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_5_wood_walk.jpeg", label: "Garden walkway", category: "walkways-stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_7_grass_winding.jpeg", label: "Winding garden path", category: "walkways-stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_10_green_stairs.jpeg", label: "Side-entry stairs", category: "walkways-stairs" },
  { src: "/images/walkways-stairs/walkways_stairs_15_down_stairs.jpeg", label: "Front-entry stairs", category: "walkways-stairs" },
  { src: "/images/walkways-stairs/wix_pretty_stairs.jpeg", label: "Finished stair set", category: "walkways-stairs" },
  { src: "/images/walls/walls_2_base.jpeg", label: "Retaining wall base pour", category: "walls" },
  { src: "/images/walls/walls_5_blue_slope.jpeg", label: "Hillside retaining wall", category: "walls" },
  { src: "/images/walls/walls_7_retaining_wall.jpeg", label: "Full retaining wall", category: "walls" },
  { src: "/images/walls/walls_9_white_balconies.jpeg", label: "Wall with balcony", category: "walls" },
  { src: "/images/walls/walls_10_step_down.jpeg", label: "Step-down retaining", category: "walls" },
  { src: "/images/walls/walls_11_grass_long.jpeg", label: "Long retaining wall", category: "walls" },
  { src: "/images/stamped/wix_stamped_patio_1.jpeg", label: "Stamped decorative patio", category: "other" },
  { src: "/images/stamped/wix_stamped_patio_2.jpeg", label: "Stamped pattern close-up", category: "other" },
  { src: "/images/other/other_1_half_pipe.jpeg", label: "Custom half-pipe pour", category: "other" },
  { src: "/images/before-after/after-stairs.jpeg", label: "Stair rebuild — after", category: "other" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 1.5rem 4rem", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <SwirlieSpiral size={32} color="#FF6B1A" />
            <span style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              Projects
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#FFFFFF", lineHeight: 0.95 }}>
            The work
          </h1>
          <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", maxWidth: "520px", marginTop: "1.75rem", lineHeight: 1.7 }}>
            Six-plus years of residential concrete across West Seattle. Every photo is a real project — no stock, no renderings.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ backgroundColor: "#0A0A0A", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2px" }}>
            {projects.map((p, i) => (
              <div
                key={i}
                className="img-zoom-wrap caption-wrap"
                style={{ position: "relative", aspectRatio: "4/3", backgroundColor: "#111" }}
              >
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover"
                  style={{ filter: "grayscale(15%)" }}
                />
                <div
                  className="caption-reveal"
                  style={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    padding: "0.75rem 1rem",
                    background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
                    {p.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FF6B1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0A0A0A", marginBottom: "1rem" }}>
            Want this for your home?
          </h2>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-anton, 'Anton', sans-serif)", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "1rem 2.5rem" }}>
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
