import type { Metadata } from "next";
import ServiceTemplate, { type ServicePage } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Foundation Work",
  description:
    "Concrete foundation pours, crack repair, and slab replacement in West Seattle. The work nobody sees — done the way it deserves.",
};

const page: ServicePage = {
  slug: "foundation-work",
  eyebrow: "05 · Foundations",
  headlineA: "The part",
  headlineB: "nobody sees.",
  lead:
    "Footings, stem walls, slab-on-grade, garage slabs, ADU foundations. The structural concrete under your house is the most important concrete on your property. We pour it like our name is going on it — because it is.",
  heroImage: "/images/other/other_4_bolt.jpeg",
  manifestoHeadlineA: "A house is only as level",
  manifestoHeadlineB: "as the slab under it.",
  manifestoBody:
    "Foundation concrete doesn't get a second chance. We pour footings and stem walls to spec — the right depth, the right rebar, the right cure. For ADU slabs and garage conversions, we work directly with your framer and engineer to keep the schedule tight.",
  features: [
    {
      title: "New foundations",
      body: "Footings, stem walls, slab-on-grade for new construction, additions, and ADUs.",
    },
    {
      title: "Garage slabs",
      body: "Thick-pour garage slabs with fiber reinforcement. Built for cars, shop equipment, and heavy storage.",
    },
    {
      title: "Foundation repair",
      body: "Underpinning, wall crack repair, settled-footing lifts. We fix what's moving before it gets worse.",
    },
    {
      title: "ADU & addition slabs",
      body: "Working with your framer and GC to hit schedule. Tight sites, coordinated trades.",
    },
  ],
  gallery: [],
  standards: [
    "Footing depth to local frost line and soil bearing — not generic 12 inches.",
    "Rebar schedule per the engineer's spec, placed with proper chairs so it stays centered during the pour.",
    "Anchor bolts set during the pour at exact spec spacing. No drilled-in retrofits.",
    "Stem wall height coordinated with framing — so the first course of siding clears finish grade.",
    "Waterproofing membrane on any subgrade wall facing a living space.",
  ],
  relatedSlugs: ["retaining-walls", "driveways", "reconditioning"],
};

export default function FoundationWorkPage() {
  return <ServiceTemplate page={page} />;
}
