# Portal — Brand Guide

> **The soul of the brand:** skate-zine + raw concrete. Hand-drawn typography, pool-coping aesthetics, Pacific Northwest grit. Made by a skater, for homeowners.

This doc is the source of truth. If code drifts from this, it's the code that's wrong.

---

## 1. Brand DNA

**Who Portal is:**
- Residential concrete contractor, West Seattle, owner-operated
- Founder Chris Hildebrand — 35+ years, skater, Pacific NW lifer
- Every job has the owner on site
- Pours year-round, rain or shine (this is the superpower)
- Humble, direct, doesn't disappear when something needs fixing

**The authenticity unlock:**
Chris is a skater. Concrete + skate is DNA-deep — empty pools, DIY skateparks, Dogtown, Powell Peralta, Thrasher. The logo is already hand-drawn in that grammar. The site should feel like it was designed by someone who's poured bowls, not briefed by a marketing agency.

**Broad-market positioning:**
This is still a homeowner-facing site. We don't need to shout "SKATE." We need the *grammar* of skate culture to inform every design choice — typography that looks hand-drawn, not corporate. Photos with grain, not stock. Copy that's plain-spoken, not salesy. A homeowner visiting the site should feel: "these guys care about their craft and don't take themselves too seriously — I trust them with my driveway."

---

## 2. The Logo

**The master mark:** `public/images/brand/portal-logo-new.jpeg`

Hand-drawn wordmark with a spiral-O at the heart. Looks like it could be on a skate deck, a zine cover, or a 1980s hardcore album. The spiral is the "portal" — it's the icon we reduce to favicon/meta.

**Usage rules:**
- Prominent on every page header. Not shy.
- On hero: give it real estate. 300-400px min on desktop.
- On service subpages: watermark treatment at 10% opacity, bottom-right, large.
- Never recolor, never outline, never modernize. It is what it is.
- For the favicon / spiral-only mark: `public/images/brand/favicon-source.jpg` (and derived 16/32/180/512 px exports in /public).

---

## 3. Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| **Ink** | `#0A0A0A` | Primary background, body text on light |
| **Bone** | `#F8F5ED` | Warm off-white for light sections |
| **Orange** | `#FF6B1A` | Accent, CTAs, links, stats, emphasis |
| **Concrete** | `#9B9893` | Mid-grey for dividers, secondary text |
| **White** | `#FFFFFF` | Text on ink |

**Rules:**
- 80% of the site should be `Ink` (near-black).
- Bone is ONE contrast section per page at most (the palate cleanser).
- Orange is spice — buttons, phone number, key numbers in stats. Use sparingly.
- Never pastels. Never gradients. Never drop shadows.

---

## 4. Typography

**Display:** `Anton` — condensed, all-caps, chiseled. This is the shout.
**Body:** `Space Grotesk` — modern, slightly quirky, readable.
**Alt/tag:** `Archivo` — micro-labels, eyebrow text, footer copy.

**Hand-drawn moments:**
The OG image and key marketing graphics use hand-drawn zine-style type. Don't try to recreate this in CSS — use as images where it matters (OG, hero accent words).

**Hierarchy:**
- H1 display: `clamp(3rem, 8vw, 7rem)`, Anton, uppercase, tight tracking (-0.02em)
- H2 section: `clamp(1.75rem, 4vw, 3rem)`, Anton, uppercase
- Body: `1rem`, Space Grotesk, `line-height: 1.7`
- Eyebrow/tag: `0.7rem`, Space Grotesk, uppercase, `letter-spacing: 0.12em`, color `rgba(255,255,255,0.4)`

---

## 5. Voice

**How Portal talks:**
- Direct. No fluff. No "we pride ourselves on..."
- Confident without being cocky
- Functional, not poetic — but the right word choice
- Sentences that could be stickers

**Pillar taglines:**
- `Concrete with conviction.` (hero)
- `Pour year-round. Rain or shine.` (all-season differentiator)
- `Built by a skater. For homeowners.` (bio line, used sparingly)
- `Seattle's concrete experts.` (alt hero)
- `Owner on every job.` (trust marker)

**Words to avoid:** `solutions`, `industry-leading`, `premier`, `proudly serving`, `family-owned and operated` (cliché), `experience` (use specifics instead: "35+ years, 150+ reviews").

**Copy do's:**
- "We pour concrete year-round."
- "Chris answers his phone."
- "35+ years of it."
- "150+ five-star reviews can't be wrong."

**Copy don't's:**
- "Portal Concrete is proud to offer residential concrete solutions to the greater Seattle area."

---

## 6. Visual Grammar

**Photography:**
- Grain. Contrast. Desaturated or B&W.
- Real work, real crew, real pours. No stock.
- Skate references are subtle — pool coping angles, concrete texture close-ups, shadows.

**Layouts:**
- Asymmetric where possible. Editorial, not templated.
- Lots of white (bone) OR black (ink) space. Content breathes.
- Grid gives way to composition.

**Motion:**
- Minimal. No parallax. No scroll-jacking. No animated emoji.
- OK: subtle scroll-fade-in on images. A spinning spiral-O mark.

**Textures:**
- Subtle grain overlay (body::after, 0.03 opacity) is baked in.
- No gradients. No glassmorphism. No soft drop shadows.

---

## 7. Stats (real numbers — from Chris's live site)

**Locked verified numbers:**
- **35+** years experience (Chris Hildebrand)
- **150+** five-star reviews
- **4.9** average Google rating
- **1** owner on every job

Use these everywhere. No rounding down to "safe" numbers ever again.

---

## 8. The "Skate" Easter Egg

**The one loud skate moment:** the `/about` page, where we can lean into Chris's personal story. A real skate-bowl photo of Chris in the hero. The phrase "built by a skater." A sentence about pouring concrete with the eye of someone who rides it. That's the earned moment.

Everywhere else, skate influence is purely grammatical — hand-drawn logo, Thrasher-style typography moments, gritty photography. The homeowner never has to know to get the trust.

---

## 9. Anti-patterns (what killed v1.1)

- Clean craftsman / Chris's live-site aesthetic: forest green, Inter, warm cream, polite humble voice → **not us**. That's HIS v1. Ours is HIS v5.
- Bland SaaS contractor templates (three icons in a row, blue CTA, "professional, reliable, quality") → **not us**.
- Trying to look like a bigger company → **not us**. Portal's edge is being one guy with 35 years of it.

---

## 10. This doc is law

Any PR that changes colors, fonts, voice, logo usage, or stats must update this doc in the same commit. Drift shows up in git. Keep it honest.
