# Twenzer Media — Agency Website

Premium, animation-first marketing site for **Twenzer Media**, a content-distribution agency
("نساعدك على تهكير الخوارزميات" — Hack The Algorithm). Built to convert visitors into booked
Calendly calls.

## Stack
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (brand tokens in `tailwind.config.ts`)
- **Framer Motion** — scroll reveals, interactive system, counters
- **GSAP** — signature hero distribution timeline
- **Lenis** — smooth scroll
- Arabic-first (`<html lang="ar" dir="rtl">`), SEO + JSON-LD (Organization / Service / FAQ), sitemap, robots.

## Run
```bash
cd agency-site
npm install
npm run dev      # http://localhost:3000  (preview profile uses :3100)
npm run build    # production build
```

## Structure
- `app/layout.tsx` — fonts (Bebas Neue / Cairo / DM Sans / Playfair), global SEO metadata, JSON-LD, Lenis + sticky WhatsApp.
- `app/page.tsx` — homepage section composition.
- `components/sections/*` — Hero, Narrative, DistributionSystem, Numbers, WhyTwenzer, ContentWall, FinalCTA.
- `components/DistributionAnimation.tsx` — the signature hero animation (video → terminal → orange arrows distributing to 6 platforms).
- `components/marks.tsx` / `platformIcons.tsx` — brand logo marks + platform glyphs.
- `lib/constants.ts` — Calendly URL, WhatsApp number/message, platform list.

## TODO before launch
- Set the real **WhatsApp number** in `lib/constants.ts` (`WHATSAPP_NUMBER`, currently a placeholder).
- Add an Open Graph / Twitter share image and reference it in `app/layout.tsx`.
- Confirm the production domain (currently `https://twenzer.media`) in metadata, sitemap, robots.

## Brand palette
Olive `#2a3020`→`#c8d4a0`, burnt orange `#d97035` (primary accent), cream `#f5f2ea`, ink `#111209`.
Source of truth: the Claude Design brand-identity bundle (`brand.css`, `logo-parts.jsx`).
