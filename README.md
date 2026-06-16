[![Built by MetaPhase](https://img.shields.io/badge/Built%20by-MetaPhase-fb641f)](https://metaphase.tech)
[![Node](https://img.shields.io/badge/Node-22-339933?logo=node.js&logoColor=white)](.nvmrc)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Accessibility](https://img.shields.io/badge/a11y-WCAG%202.1%20AA-4A6CD4)](tests/e2e/accessibility.spec.ts)
[![CI](https://github.com/MetaPhase-Consulting/metaphaseedg-web/actions/workflows/ci.yml/badge.svg)](.github/workflows/ci.yml)

# MetaPhase EDG Website

Corporate website for **MetaPhase EDG** — a Solutions Integrator joint venture between
**MetaPhase, LLC** and **SharpEDG, LLC**, bringing cutting-edge technology and strategic
management consulting to the Federal mission.

**Live:** [www.metaphaseedg.com](https://www.metaphaseedg.com)

## Tech Stack

- **React 19** + TypeScript + Vite 7
- **Tailwind CSS 3** for styling
- **React Router v7** for client-side routing
- **Static prerendering** (Vite SSR build → per-route HTML) for SEO/GEO
- **Vitest** (unit) + **Playwright** (E2E + accessibility) for testing
- **Netlify** for deployment; **Cloudflare** DNS + Email Routing

## Getting Started

### Prerequisites

- Node.js 22 (see [`.nvmrc`](.nvmrc))
- npm

```bash
npm install
npm run dev          # http://localhost:5173
```

### Build & preview

```bash
npm run build        # tsc → client build → SSR build → prerender all routes
npm run preview      # serve the built site from dist/
npm run check:seo    # assert robots/sitemap/llms + prerendered head/body
```

## Testing

```bash
npm run test:run         # Vitest unit tests
npm run test:e2e:install # one-time Playwright browser install
npm run test:e2e         # Playwright E2E + accessibility (axe) + SEO checks
npm run lint             # ESLint
```

## SEO & GEO (AI optimization)

Because crawlers — especially AI/answer engines — may not run JavaScript, every route is
**prerendered to static HTML** at build time with route-specific `<title>`, meta description,
canonical, Open Graph/Twitter tags, and JSON-LD baked into `<head>` (see
[`scripts/prerender.mjs`](scripts/prerender.mjs)). Additional crawler assets:

- [`public/robots.txt`](public/robots.txt) — welcomes search + AI crawlers, links the sitemap
- [`public/sitemap.xml`](public/sitemap.xml) — all routes
- [`public/llms.txt`](public/llms.txt) — structured company summary for LLMs
- `Organization` / `WebSite` JSON-LD baked into [`index.html`](index.html); `FAQPage` /
  `BreadcrumbList` per page via [`src/components/Seo.tsx`](src/components/Seo.tsx)

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, company overview, services |
| About Us | `/about-us` | Joint venture details, leadership, certifications |
| Contract Vehicles | `/contract-vehicles` | GSA Schedule, SINs, SBIR, TS FCL, set-asides |
| Contact | `/contact` | Contact form (Netlify Forms), address, phone |
| Book Online | `/book-online` | Scheduling |
| Privacy Policy | `/privacy-policy` | Legal text |

## Deployment

Deploys to **Netlify** (`npm run build` → publish `dist/`, see [`netlify.toml`](netlify.toml)).
SPA fallback via [`public/_redirects`](public/_redirects). The contact form uses **Netlify Forms**,
notifying `info@metaphaseedg.com`, which **Cloudflare Email Routing** forwards onward.

Branching: work on `feature/*` → PR into **`dev`** → promote `dev` → `main`.
