import type { Metadata } from "next";
import ServiceTemplate, { type ServicePage } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Retaining Walls",
  description:
    "Concrete retaining walls in West Seattle. Engineered for slope, soil, and the long haul.",
};

const page: ServicePage = {
  slug: "retaining-walls",
  eyebrow: "04 · Retaining Walls",
  headlineA: "Holding back",
  headlineB: "the hillside.",
  lead:
    "West Seattle is hills. That means half the yards are retaining walls holding back dirt that desperately wants to move. We design and pour walls engineered for the soil, the slope, and 50 years of rain pressure.",
  heroImage: "/images/walls/walls_2_base.jpeg",
  manifestoHeadlineA: "Every wall fails.",
  manifestoHeadlineB: "Unless you build it right.",
  manifestoBody:
    "Concrete retaining walls aren't decorative. They're structural — holding back tons of saturated soil. We engineer footing depth, wall thickness, rebar schedule, and drainage to match the actual load. Then we pour. A proper wall outlives the house.",
  features: [
    {
      title: "Engineered poured walls",
      body: "Structural concrete walls with proper footings, rebar schedule, and weep drainage. Permit-compliant.",
    },
    {
      title: "Tiered retaining systems",
      body: "For steep lots, multiple terraced walls distribute load and create usable yard space between.",
    },
    {
      title: "Drainage integration",
      body: "Perforated drain tile behind every wall, routed to daylight. Hydrostatic pressure is why walls fail.",
    },
    {
      title: "Decorative faces",
      body: "Board-form, stamped, or smooth-finish facing options. Structural integrity with curb appeal.",
    },
  ],
  gallery: [
    { src: "/images/walls/walls_2_base.jpeg", label: "Retaining wall base" },
    { src: "/images/walls/walls_5_blue_slope.jpeg", label: "Hillside retaining wall" },
    { src: "/images/walls/walls_7_retaining_wall.jpeg", label: "Full retaining wall" },
    { src: "/images/walls/walls_9_white_balconies.jpeg", label: "Tiered wall system" },
    { src: "/images/walls/walls_10_step_down.jpeg", label: "Step-down retaining" },
    { src: "/images/walls/walls_11_grass_long.jpeg", label: "Long hillside wall" },
  ],
  standards: [
    "Footings sized for the soil and wall height — not the same depth on every job.",
    "Rebar schedule designed for actual load, not generic 12-inch spacing.",
    "Perforated drain tile behind every wall, routed to daylight or a stormdrain.",
    "Weep holes through the wall at proper spacing for any saturated soil behind it.",
    "Permits pulled for any wall over 4 feet. No permit = no wall, no exceptions.",
  ],
  relatedSlugs: ["foundation-work", "driveways", "walkways-stairs"],
};

export default function RetainingWallsPage() {
  return <ServiceTemplate page={page} />;
}
