# MetaPhase EDG Website — CLAUDE.md

Instructions for AI agents working in this repo. Product facts (contract vehicles, phone,
NAICS, certifications, copy) live in the code — `src/lib/site.ts`, `src/pages/*`, and
`public/llms.txt` are the source of truth. Don't duplicate them here.

## Context

Corporate website for **MetaPhase EDG**, a joint venture of MetaPhase, LLC and SharpEDG, LLC,
built with React 19 + TypeScript + Vite, deployed on Netlify.

> Always refer to the parent company as **MetaPhase** — never "MetaPhase Consulting".

## Tech & Architecture

- React 19 + TypeScript + Vite 7; Tailwind CSS 3; React Router v7.
- **Rendering**: client SPA that is **prerendered to static HTML per route** for SEO/GEO.
  `AppRoutes.tsx` is the router-agnostic route table shared by the client (`App.tsx` →
  `BrowserRouter`, hydrated in `main.tsx`) and the SSR entry (`entry-server.tsx`).
  `scripts/prerender.mjs` renders each route and relocates React 19's hoisted `<head>` tags.
- **SEO/GEO**: per-page metadata + JSON-LD via `src/components/Seo.tsx`; site-wide facts in
  `src/lib/site.ts`; structured-data builders in `src/lib/jsonld.ts`. Baseline
  `Organization`/`WebSite` JSON-LD is baked into `index.html`. Crawler files:
  `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`.
- **Adding a route**: add the page + route in `AppRoutes.tsx`, add the path to `ROUTES` in
  `src/lib/site.ts`, and add it to `public/sitemap.xml`. Give the page a `<Seo>` block.
- **Contact form**: Netlify Forms; delivery isolated in `src/lib/contactSubmit.ts`.

## Design tokens (Tailwind, `tailwind.config.js`)

- `mp-orange` `#fb641f` — primary accent / CTAs / active nav / "MetaPhase" in the wordmark
- `mp-edg-blue` `#4A6CD4` — secondary accent / "EDG" in the wordmark
- `mp-ink` `#16163F` — primary text
- The header icon is the MetaPhase EDG atom (`/images/logo.png`); prefer tokens over raw hex.

## Coding style

- TypeScript, 2-space indent, one default-exported component per page/component file.
- Tailwind for styling; keep it accessible (labels, alt text, focus states, landmarks).
- Lint clean before PRs; fix net-new issues you introduce.

## Testing

- Unit (Vitest) co-located as `*.test.tsx`; E2E (Playwright) in `tests/e2e/` (navigation,
  contact, accessibility via `@axe-core/playwright`, seo).
- Use accessible, behavior-focused locators; scope to `main` when nav/footer duplicate text.

## Commands

- `npm run dev` — dev server (http://localhost:5173)
- `npm run build` — tsc → client build → SSR build → prerender all routes to `dist/`
- `npm run check:seo` — verify robots/sitemap/llms + prerendered head/body
- `npm run lint` · `npm run test:run` · `npm run test:e2e`

## Branching & PRs

- Work on `feature/*` → **PR into `dev`** → promote `dev` → `main`.
- Conventional commits. Human-authored only — no AI attribution in commits/PRs.

## Run checklist

`npm run build` → `npm run check:seo` → `npm run lint` → `npm run test:run` →
`npm run test:e2e`, then commit and push.

## Owner notes

- Repo is public but NOT open source (no license file).
- Deploy target is Netlify; DNS + email routing on Cloudflare.
- Standard GitHub files (PR template) but no CONTRIBUTING.md needed.
