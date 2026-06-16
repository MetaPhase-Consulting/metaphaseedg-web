# Agent Guidelines for MetaPhase EDG Website

Keep this file small and current. It is the entry point for agent work on this repo.

## Product Context

- Corporate site for **MetaPhase EDG**, a joint venture of **MetaPhase, LLC** and **SharpEDG, LLC**.
- Always refer to the parent company as **MetaPhase** (never "MetaPhase Consulting").
- Audience includes federal contracting officers — keep certifications, contract vehicles,
  and contact details accurate and easy to find.

## Project Structure

- `src/`
  - `components/` — Reusable UI in PascalCase (`Header.tsx`, `Footer.tsx`, `Seo.tsx`, `Layout.tsx`)
  - `pages/` — Route views (`Home.tsx`, `About.tsx`, `ContractVehicles.tsx`, `Contact.tsx`, …)
  - `lib/` — `site.ts` (central metadata), `jsonld.ts` (structured data), `contactSubmit.ts` (form delivery)
  - `AppRoutes.tsx` — router-agnostic route table (shared by client + SSR)
  - `App.tsx` / `main.tsx` — client entry (hydrates prerendered HTML)
  - `entry-server.tsx` — SSR entry used by the prerender step
- `public/` — static assets: `images/`, `_redirects`, `robots.txt`, `sitemap.xml`, `llms.txt`
- `scripts/` — `prerender.mjs` (SSG), `check-seo.mjs` (post-build SEO gate)
- `tests/e2e/` — Playwright specs (navigation, contact, accessibility, seo)

## Commands

- `npm run dev` — Vite dev server (http://localhost:5173)
- `npm run build` — tsc → client build → SSR build → prerender every route to `dist/<route>/index.html`
- `npm run check:seo` — assert robots/sitemap/llms + prerendered head/body
- `npm run lint` / `npm run test:run` / `npm run test:e2e`

## Rendering / SEO architecture

- The app is a client-side SPA that is **prerendered to static HTML per route** so search and
  AI crawlers get real content without JS. React 19 native document metadata (`<title>`,
  `<meta>`, `<link>`) is hoisted to `<head>`; `scripts/prerender.mjs` relocates it into the
  static file. JSON-LD `<script>` stays in `<body>` (valid for crawlers).
- Per-page SEO lives in `src/components/Seo.tsx`; site facts in `src/lib/site.ts`. Update those,
  not scattered literals. Adding a route? Add it to `ROUTES` in `site.ts` and `sitemap.xml`.

## Design System

- **MetaPhase orange** `#fb641f` (`mp-orange`) — primary accent, CTAs, links/active nav
- **SharpEDG blue** `#4A6CD4` (`mp-edg-blue`) — secondary accent, "EDG" in the wordmark
- **Primary text** `#16163F` (`mp-ink`)
- Wordmark: orange swirl icon + "MetaPhase" (orange) + "EDG" (blue) + tagline
- Headings: Work Sans SemiBold; body: system sans-serif
- Tailwind tokens defined in `tailwind.config.js` — prefer tokens over raw hex.

## Coding Style

- TypeScript, 2-space indent, default-exported page/component per file
- Tailwind for styling; keep accessible (labels, alt text, focus states, landmarks)
- Lint clean before PRs; fix net-new issues you introduce

## Testing

- Unit (Vitest) co-located: `*.test.tsx`. E2E (Playwright) in `tests/e2e/`.
- Accessibility: `@axe-core/playwright` (no critical violations). SEO: `tests/e2e/seo.spec.ts`.
- Use accessible, behavior-focused locators; scope to `main` when footer/nav duplicate text.

## Branching & PRs

- Work on `feature/*` → **PR into `dev`** → promote `dev` → `main`.
- Conventional commits (`feat`, `fix`, `docs`, `test`, `ci`, `chore`).
- Human-authored commits/PRs only — no AI attribution.

## Owner Notes

- Repo is public but NOT open source (no license file).
- Contact form: Netlify Forms → `info@metaphaseedg.com` → Cloudflare Email Routing → Sophia.
- DNS + email routing are on Cloudflare; deploy target is Netlify.

## Agent Run Checklist

1. `npm run build` (includes prerender) succeeds
2. `npm run check:seo` passes
3. `npm run lint` clean
4. `npm run test:run` + `npm run test:e2e` pass
5. Commit and push progress
