import type { Metadata } from "next";
import ServiceTemplate, { type ServicePage } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Concrete Driveways",
  description:
    "New concrete driveways in West Seattle. Broom-finish, exposed aggregate, stamped. Proper prep, proper pour, owner on every job.",
};

const page: ServicePage = {
  slug: "driveways",
  eyebrow: "01 · Driveways",
  headlineA: "Driveways built",
  headlineB: "for Seattle winters.",
  lead:
    "Your driveway is the single biggest slab on your property and the hardest working one. We pour driveways that handle the rain, the freeze-thaw, the delivery trucks, and 30+ years of backing in.",
  heroImage: "/images/driveways/driveway_4_big_house.jpeg",
  manifestoHeadlineA: "A driveway is a 30-year slab.",
  manifestoHeadlineB: "Pour it like one.",
  manifestoBody:
    "Most cracked driveways aren't a concrete problem. They're a base problem. Proper subgrade compaction, gravel depth, reinforcement, and expansion joints — skip one and you'll see the crack a year in. We don't skip them.",
  features: [
    {
      title: "Broom finish",
      body: "The Seattle classic. Non-slip when wet, ages beautifully, blends with any house style.",
    },
    {
      title: "Exposed aggregate",
      body: "Pea-gravel exposed finish. Adds texture and grip. Premium look for front-of-house driveways.",
    },
    {
      title: "Stamped concrete",
      body: "Brick, stone, slate patterns. Colored integrally so chips don't show a different shade.",
    },
    {
      title: "Tear-out & replace",
      body: "Ripping out a failing slab is half the job. We remove, haul, regrade, and re-pour clean.",
    },
  ],
  gallery: [
    { src: "/images/driveways/driveway_1_grey_garage.jpeg", label: "Broom-finish driveway" },
    { src: "/images/driveways/driveway_2_grey_house.jpeg", label: "Residential approach" },
    { src: "/images/driveways/driveway_3_white_garage.jpeg", label: "White garage approach" },
    { src: "/images/driveways/driveway_4_big_house.jpeg", label: "Large-format driveway" },
    { src: "/images/driveways/driveway_5_modern_garage.jpeg", label: "Modern garage driveway" },
    { src: "/images/driveways/driveway_6_long_walk.jpeg", label: "Long approach" },
    { src: "/images/driveways/IMG_3538.jpeg", label: "Fresh pour" },
    { src: "/images/driveways/wix_driveway_broom.jpeg", label: "Broom finish close-up" },
  ],
  standards: [
    "Proper subgrade prep — 4+ inches of compacted crushed gravel, every time.",
    "Fiber mesh or #4 rebar on a grid — a driveway without reinforcement is a cracked driveway in waiting.",
    "Control joints cut within 24 hours of pour — the right depth, the right spacing.",
    "A slope that drains. We won't pour a slab that ponds water against your garage door.",
    "Curing compound or wet-cure — every slab we pour, regardless of temperature.",
  ],
  relatedSlugs: ["walkways-stairs", "retaining-walls", "reconditioning"],
};

export default function DrivewaysPage() {
  return <ServiceTemplate page={page} />;
}
