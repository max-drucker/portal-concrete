# Portal Concrete — Website

West Seattle residential concrete studio. Built for Chris Hildebrand / Portal LLC.

**Live:** https://portal-concrete.vercel.app  
**GitHub:** https://github.com/max-drucker/portal-concrete  
**Supabase project:** `uxixpnxigogiqpnduqci`

---

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- Supabase (leads table + RLS)
- Resend (lead notification email with vCard attachment)
- Cal.com embed (consultation scheduling)
- Vercel (deploy)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Env vars in `.env.local` (already populated with Supabase keys). Add `RESEND_API_KEY` to send emails locally.

---

## What's live

| Page | Route |
|---|---|
| Home | `/` |
| Services overview | `/services` |
| Driveways | `/services/driveways` |
| Patios | `/services/patios` |
| Walkways & Stairs | `/services/walkways-stairs` |
| Retaining Walls | `/services/retaining-walls` |
| Foundation Work | `/services/foundation-work` |
| Reconditioning | `/services/reconditioning` |
| Projects gallery | `/projects` |
| Process | `/process` |
| Reviews | `/reviews` |
| About | `/about` |
| Contact + Cal.com | `/contact` |
| Lead API | `/api/lead` |

---

## Stubs needing human input

### 1. Resend API key (email)

The contact form POSTs to `/api/lead` → Supabase insert → Resend email to Chris.

**Email is currently stubbed** (silently skipped if `RESEND_API_KEY` is not set — the Supabase insert still works).

To activate email:
1. Create account at [resend.com](https://resend.com)
2. Verify the domain `buildwithportal.com` (add DNS TXT record)
3. Create an API key
4. Add to Vercel: `vercel env add RESEND_API_KEY production`

The from address in `app/api/lead/route.ts` is `leads@buildwithportal.com` — adjust if needed.

### 2. Cal.com scheduling widget

The `/contact` page embeds a Cal.com scheduling widget. Currently using placeholder slug `portal-concrete/consultation`.

To activate:
1. Chris creates account at [cal.com](https://cal.com)
2. Connect Apple Calendar via CalDAV:
   - In Cal.com → Settings → Calendars → Add CalDAV
   - Apple ID: Settings → [Name] → iCloud → generate an App-Specific Password
   - CalDAV URL: `https://caldav.icloud.com`
3. Create an event type called "Consultation" (or whatever you want)
4. Copy the booking URL slug (e.g. `chrishildebrand/consultation`)
5. Update Vercel env: `vercel env add NEXT_PUBLIC_CAL_LINK production`
   - Value: just the slug part after `cal.com/` (e.g. `chrishildebrand/consultation`)

### 3. Custom domain

DNS for `buildwithportal.com` points to the old site. **Do not touch DNS** until the rebuild is ready to go live.

When ready:
```bash
vercel domains add buildwithportal.com
```

Then update DNS at the registrar to point to Vercel.

### 4. Resend domain verification

Once Resend account is created, add these DNS records at the registrar:
- SPF, DKIM, DMARC records (Resend provides these in their dashboard)

---

## Content TODOs for Chris

- [ ] Replace placeholder reviews with any additional ones not captured from the old site
- [ ] Add any newer project photos to `public/images/`
- [ ] Update phone number if it changes from (206) 829-6396
- [ ] Confirm lead recipient email (`chris@buildwithportal.com`)

---

## Supabase leads table

Project ref: `uxixpnxigogiqpnduqci`  
Dashboard: https://supabase.com/dashboard/project/uxixpnxigogiqpnduqci

Table: `leads`

| Column | Type |
|---|---|
| id | bigserial (PK) |
| created_at | timestamptz |
| name | text |
| email | text |
| phone | text |
| project_type | text |
| address | text |
| notes | text |
| photo_urls | text[] |

RLS enabled. Anonymous INSERT allowed. All reads require service role.

---

## Updating content

**Copy/text:** Edit directly in the page files under `app/`.  
**Images:** Drop new photos into `public/images/[category]/` and reference in the relevant page.  
**Reviews:** Edit `lib/reviews.ts` — add new objects to the array.  
**Services:** Service pages are in `app/services/[slug]/page.tsx`.

## Redeploy

```bash
git add -A && git commit -m "update: ..." && git push
```

Vercel auto-deploys on push to `main`.
