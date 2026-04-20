# Changelog

## v0.1.0 — 2026-04-20

### Initial build

Complete rebuild of buildwithportal.com for Portal LLC (Chris Hildebrand, West Seattle).

**Brand system**
- Palette: #0A0A0A / #FFFFFF / #F5F3EF / #FF6B1A (CTAs only)
- Typography: Anton (display) + Space Grotesk (body) + Archivo (pull quotes)
- Swirlie spiral mark used as favicon placeholder, section dividers, bullet marks, footer watermark
- Subtle grain texture overlay via SVG data URI
- Zero green, zero amber, zero Inter font — full rebrand from old site

**Pages built (13 routes)**
- `/` — Hero, stats bar, services grid, featured projects, review snippet, CTA band
- `/services` — All 6 services with alternating image/text layout
- `/services/driveways` — Hero, detail copy, FAQ, gallery, CTA
- `/services/patios` — Hero, detail copy, FAQ, gallery, CTA
- `/services/walkways-stairs` — Hero, detail copy, FAQ, gallery, CTA
- `/services/retaining-walls` — Hero, detail copy, FAQ, gallery, CTA
- `/services/foundation-work` — Hero, detail copy, FAQ, CTA
- `/services/reconditioning` — Hero, detail copy, FAQ, before/after gallery, CTA
- `/projects` — Full gallery (32 photos), CSS hover captions
- `/process` — 6-step craft story, photo break with quote, "Why Portal" grid
- `/reviews` — All 21 real reviews (scraped from live site JS bundle), rating summary
- `/about` — Chris bio, crew gallery, values grid
- `/contact` — Lead form + Cal.com embed + sidebar info

**Infrastructure**
- Contact form → `/api/lead` Route Handler → Supabase insert + Resend email with vCard attachment
- Supabase project `portal` created (ref: uxixpnxigogiqpnduqci)
- `leads` table with RLS + anon INSERT policy
- All Vercel env vars set for production
- RESEND_API_KEY stubbed (email skipped gracefully until key is added)
- Cal.com embed stubbed with placeholder slug `portal-concrete/consultation`

**Images**
- 70+ photos downloaded from live site (driveways, patios, walkways, stairs, walls, team, stamped, before/after, winter)
- Brand assets copied from portal-audit (swirlie-logo.png, portal-logo-new.jpeg)

**Tech**
- Next.js 16.2.4 + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config via @theme)
- @supabase/ssr (no localStorage)
- Resend SDK
- Vercel production deploy
