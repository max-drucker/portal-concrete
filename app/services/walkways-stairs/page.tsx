import type { Metadata } from "next";
import ServiceTemplate, { type ServicePage } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Walkways & Stairs",
  description:
    "Concrete walkways and stairs in West Seattle. Front-entry rebuilds, garden paths, ADA-compliant slopes. Done right.",
};

const page: ServicePage = {
  slug: "walkways-stairs",
  eyebrow: "03 · Walkways & Stairs",
  headlineA: "The approach",
  headlineB: "to your house.",
  lead:
    "The path from the street to your door is the first thing a guest touches and the last thing you walk on at night. We build walkways and stairs that feel right underfoot — consistent rise, proper slope, grip in the rain.",
  heroImage: "/images/walkways-stairs/walkways_stairs_15_down_stairs.jpeg",
  manifestoHeadlineA: "Every stair.",
  manifestoHeadlineB: "Same height.",
  manifestoBody:
    "A stair set where one riser is an inch taller than the others is the most common front-entry failure in Seattle. It's also the most dangerous. We measure, we form, we check — then we pour. Even rise, consistent run, nosing that sheds water.",
  features: [
    {
      title: "Front-entry stairs",
      body: "Concrete replacements for rotting wood or crumbling masonry stairs. Built to code and built to last.",
    },
    {
      title: "Garden walkways",
      body: "Flowing paths with natural curves. Broom, exposed aggregate, or stamped finish.",
    },
    {
      title: "Side-yard & service paths",
      body: "The utility walkway that connects the front yard to the back. Built wide enough for a wheelbarrow.",
    },
    {
      title: "ADA & slope-compliant",
      body: "Ramps and gentle-slope walkways engineered for wheelchair, stroller, and aging-in-place access.",
    },
  ],
  gallery: [
    { src: "/images/walkways-stairs/walkways_stairs_1_blue_house.jpeg", label: "Front walkway" },
    { src: "/images/walkways-stairs/walkways_stairs_3_black_tiles_rain.jpeg", label: "Wet-pour stairs" },
    { src: "/images/walkways-stairs/walkways_stairs_4_grey_siding.jpeg", label: "Entry stairs" },
    { src: "/images/walkways-stairs/walkways_stairs_5_wood_walk.jpeg", label: "Garden walkway" },
    { src: "/images/walkways-stairs/walkways_stairs_7_grass_winding.jpeg", label: "Winding path" },
    { src: "/images/walkways-stairs/walkways_stairs_10_green_stairs.jpeg", label: "Side-entry stairs" },
    { src: "/images/walkways-stairs/walkways_stairs_15_down_stairs.jpeg", label: "Front-entry stairs" },
    { src: "/images/walkways-stairs/wix_pretty_stairs.jpeg", label: "Finished stair set" },
  ],
  standards: [
    "Consistent riser height throughout — measured, not eyeballed.",
    "Stair nosing sloped to shed water away from the step below.",
    "Non-slip broom finish on every outdoor stair — no polished, slick tops.",
    "Proper handrail attachment points set during the pour, not drilled after.",
    "Walkway slope always away from the house. Drainage is part of the design.",
  ],
  relatedSlugs: ["patios", "driveways", "retaining-walls"],
};

export default function WalkwaysStairsPage() {
  return <ServiceTemplate page={page} />;
}
