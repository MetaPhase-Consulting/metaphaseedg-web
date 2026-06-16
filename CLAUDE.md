# MetaPhase EDG Website — CLAUDE.md

## Project Context

This is the corporate website for **MetaPhase EDG**, a Solutions Integrator joint venture between **MetaPhase, LLC** and **SharpEDG, LLC**. The site was migrated from Wix to a modern React + Vite stack deployed on Netlify. It originated as a faithful reproduction of the Wix-hosted site at https://www.metaphaseedg.com/ and is now iterating beyond it (rebrand, contract-vehicles page, SEO/GEO).

> Always refer to the parent company as **MetaPhase** — never "MetaPhase Consulting".

## Company Overview

MetaPhase EDG is an SBA-certified 8(a), EDWOSB, WOSB Small Business Joint Venture with a Top Secret Facility Clearance. They bring cutting-edge technology and strategic management consulting to provide holistic solutions for the Federal mission. The team includes former Federal Senior Executives, expert technologists, and industry-recognized management consultants.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite 7
- **Styling**: Tailwind CSS 3 with custom brand theme
- **Routing**: React Router v7 (router-agnostic `AppRoutes` shared by client + SSR)
- **Rendering**: Static prerender per route (Vite SSR build + `scripts/prerender.mjs`) for SEO/GEO
- **Testing**: Vitest (unit) + Playwright (E2E + accessibility + SEO)
- **Deployment**: Netlify (`public/_redirects` SPA fallback); Cloudflare DNS + Email Routing
- **Fonts**: Work Sans (Google Fonts), system sans-serif fallback

## Brand Design System

### Colors (Tailwind tokens in `tailwind.config.js`)
- `mp-orange` `#fb641f` — MetaPhase orange; primary accent, CTAs, links/active nav
- `mp-edg-blue` `#4A6CD4` — SharpEDG royal blue; secondary accent, "EDG" in wordmark
- `mp-ink` `#16163F` — primary text (dark navy)
- Background: white (`#FFFFFF`); section bands: light gray `#F5F5F5`

### Wordmark / Logo
- Orange swirl icon (`/images/metaphase-icon.png`) + "MetaPhase" (orange) + "EDG" (blue)
- Tagline: "Problem Solvers for a Digital World"

### Typography
- Headings: Work Sans SemiBold; body: system sans-serif

## Pages
1. **Home** (`/`)
2. **About Us** (`/about-us`) — JV description, leadership (Sophia Edwards, Fred Costa), certifications
3. **Contract Vehicles** (`/contract-vehicles`) — GSA Schedule, SINs, SBIR, TS FCL, set-asides, NAICS
4. **Contact** (`/contact`) — Netlify Forms contact form, address, phone
5. **Book Online** (`/book-online`)
6. **Privacy Policy** (`/privacy-policy`)

## Contact Information
- **Email**: info@metaphaseedg.com (Cloudflare Email Routing forwards to Sophia)
- **Phone**: 703-399-4069
- **Address**: 11911 Freedom Dr. Suite 1010, Reston, VA 20190

## Contract Vehicles
- **GSA MAS**: 47QTCA26D002G, effective 12/18/2025 – 12/17/2030 *(end date inferred — confirm)*, SINs 541611 & 54151S
- **MetaPhase SBIR**: Phase III Direct Award authority (U.S. Air Force)
- **TS Facility Clearance**

## NAICS Codes
541611, 541519, 541512, 541511, 541880, 541330, 541990, 541618, 611430, 611420

## SEO / GEO
- Per-route metadata + JSON-LD via `src/components/Seo.tsx`; central facts in `src/lib/site.ts`.
- `Organization`/`WebSite` JSON-LD baked into `index.html`; `FAQPage`/`Breadcrumb` per page.
- `public/robots.txt` (welcomes AI crawlers), `public/sitemap.xml`, `public/llms.txt`.
- New route? Add it to `ROUTES` in `src/lib/site.ts` and to `public/sitemap.xml`.

## Key Commands
- `npm run dev` — dev server (http://localhost:5173)
- `npm run build` — tsc → client build → SSR build → prerender all routes to `dist/`
- `npm run check:seo` — verify robots/sitemap/llms + prerendered head/body
- `npm run lint` — ESLint
- `npm run test:run` — Vitest once
- `npm run test:e2e` — Playwright E2E + a11y + SEO

## Owner Notes
- Repo is public but NOT open source (no license file)
- Deploy to Netlify; DNS + email routing on Cloudflare
- Work on `feature/*`, PR into `dev`; promote `dev` → `main`
- Contact form: keep it simple — Netlify Forms notifying info@metaphaseedg.com
- Regularly commit and push progress
- Standard GitHub files (PR template, etc.) but no CONTRIBUTING.md needed
- No AI attribution in commits/PRs (human-authored only)
