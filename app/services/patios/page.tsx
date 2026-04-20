import type { Metadata } from "next";
import ServiceTemplate, { type ServicePage } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Concrete Patios",
  description:
    "New concrete patios in West Seattle. Smooth, broom, stamped, or decorative. Proper drainage and a finish that lasts.",
};

const page: ServicePage = {
  slug: "patios",
  eyebrow: "02 · Patios",
  headlineA: "Outdoor living",
  headlineB: "that ages well.",
  lead:
    "Patios are where your house spills outside. We pour slabs with clean lines, honest drainage, and a finish that still looks sharp after a decade of Pacific Northwest weather.",
  heroImage: "/images/patios/patio_1_bw_chairs.jpeg",
  manifestoHeadlineA: "A patio isn&rsquo;t a slab.",
  manifestoHeadlineB: "It&rsquo;s a room.",
  manifestoBody:
    "We design patios to live with — proper sun, proper drainage, proper flow from the back door. Broom finish for barefoot weekends. Sawcut tile pattern for the clean modern look. Stamped for traditional. We'll walk the site with you and tell you what'll work.",
  features: [
    {
      title: "Broom & smooth finish",
      body: "The timeless backyard slab. Warm under bare feet. Simple, honest, permanent.",
    },
    {
      title: "Saw-cut tile look",
      body: "Grid of clean saw cuts create a large-format tile aesthetic without the grout-line failures.",
    },
    {
      title: "Stamped & decorative",
      body: "Slate, stone, wood-plank patterns. Integrally colored. Sealed for long-term UV and stain resistance.",
    },
    {
      title: "Patio + walkway combos",
      body: "We pour the patio, the walkway, and the connecting stairs as one integrated system. No mismatched seams.",
    },
  ],
  gallery: [
    { src: "/images/patios/patio_1_bw_chairs.jpeg", label: "Backyard patio slab" },
    { src: "/images/patios/patio_2_fence.jpeg", label: "Fenced yard patio" },
    { src: "/images/patios/patio_3_fountain.jpeg", label: "Patio with fountain" },
    { src: "/images/patios/patio_4_reddish.jpeg", label: "Decorative finish patio" },
    { src: "/images/patios/patio_5_grey_tiles.jpeg", label: "Large-format tile look" },
    { src: "/images/patios/patio_6_big_tiles.jpeg", label: "Oversized slab pour" },
    { src: "/images/patios/patio_7_overhang.jpeg", label: "Covered patio extension" },
    { src: "/images/stamped/wix_stamped_patio_1.jpeg", label: "Stamped patio pattern" },
  ],
  standards: [
    "Drainage first. We grade so water leaves the house — not pools next to it.",
    "2% minimum fall on every slab. No exceptions, no flat patios.",
    "Expansion joints where the patio meets the house — so foundation movement doesn't crack the slab.",
    "Proper sand bed or crushed rock base compacted in lifts. No shortcuts under the pour.",
    "Final surface sealed before we call it done. Prevents staining and spalling.",
  ],
  relatedSlugs: ["walkways-stairs", "driveways", "reconditioning"],
};

export default function PatiosPage() {
  return <ServiceTemplate page={page} />;
}
