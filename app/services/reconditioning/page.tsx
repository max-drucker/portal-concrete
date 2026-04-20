import type { Metadata } from "next";
import ServiceTemplate, { type ServicePage } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Repair & Reconditioning",
  description:
    "Old concrete brought back to life. Overlay systems, grinding, sealing, and resurfacing in West Seattle.",
};

const page: ServicePage = {
  slug: "reconditioning",
  eyebrow: "06 · Repair & Reconditioning",
  headlineA: "When tear-out",
  headlineB: "isn&rsquo;t the answer.",
  lead:
    "Not every cracked slab needs to be ripped out. Sometimes the right move is resurface, reseal, or fill. We'll walk your concrete, tell you honestly whether it's worth saving, and either repair it or recommend a replacement.",
  heroImage: "/images/before-after/after-stairs.jpeg",
  manifestoHeadlineA: "Repair what&rsquo;s repairable.",
  manifestoHeadlineB: "Replace what isn&rsquo;t.",
  manifestoBody:
    "A crack the width of a credit card is a sealant job. A crack you can see daylight through is a replace job. We don't sell you a resurface on a slab that's failing structurally — and we don't rip out concrete that just needs a good seal. Honest assessments.",
  features: [
    {
      title: "Overlay resurfacing",
      body: "Thin concrete overlay over existing slabs. Transforms a tired driveway or patio without the tear-out cost.",
    },
    {
      title: "Crack & joint repair",
      body: "Epoxy injection, polyurethane sealant, or full cut-and-patch for structural cracks.",
    },
    {
      title: "Grinding & leveling",
      body: "Raised expansion joints ground flush. Uneven slab edges brought to plane.",
    },
    {
      title: "Sealing & refinishing",
      body: "Penetrating sealers that protect without changing the look. Decorative sealers for color and sheen.",
    },
  ],
  gallery: [
    { src: "/images/stamped/stamped_decorative_1_speckled_curb.jpeg", label: "Decorative overlay" },
    { src: "/images/stamped/stamped_decorative_2_rainy.jpeg", label: "Stamped resurfacing" },
    { src: "/images/stamped/stamped_decorative_3_textured.jpeg", label: "Textured finish" },
    { src: "/images/stamped/wix_stamped_patio_2.jpeg", label: "Pattern overlay" },
    { src: "/images/before-after/before-stairs.jpeg", label: "Before: crumbling stairs" },
    { src: "/images/before-after/after-stairs.jpeg", label: "After: rebuilt stairs" },
  ],
  standards: [
    "Honest assessment first. If it can't be saved, we'll tell you.",
    "Proper surface prep before any overlay — no skipping the grind or the shot-blast.",
    "Matched materials. Overlays that bond and age at the same rate as the substrate.",
    "UV-stable sealers. No yellowing or chalking in two years.",
    "Warranty on every repair. If our fix fails, we fix it.",
  ],
  relatedSlugs: ["driveways", "patios", "walkways-stairs"],
};

export default function ReconditioningPage() {
  return <ServiceTemplate page={page} />;
}
