# Agent Guidelines for MetaPhase EDG Website

## Project Structure & Module Organization
- `src/` — React + TypeScript app code
  - `components/` — Reusable UI in PascalCase (e.g., `Header.tsx`, `Footer.tsx`)
  - `pages/` — Route views (e.g., `Home.tsx`, `About.tsx`, `Contact.tsx`)
  - `hooks/` — Custom hooks (e.g., `useScrollAnimation.ts`)
  - `lib/` — Utilities
  - `App.tsx` — Router + layout
  - `main.tsx` — Entry point
  - `index.css` — Tailwind directives + custom styles
- `public/` — Static assets served as-is
  - `images/` — Site images (logo, backgrounds, icons)
  - `_redirects` — Netlify SPA routing
- `tests/e2e/` — Playwright specs

## Build, Test, and Development Commands
- `npm run dev` — Start Vite dev server (http://localhost:5173)
- `npm run build` — TypeScript check + Vite production build to `dist/`
- `npm run preview` — Serve built app locally
- `npm run lint` — Run ESLint
- `npm run test` — Run Vitest in watch mode
- `npm run test:run` — Run Vitest once
- `npm run test:e2e` — Run Playwright E2E tests
- `npm run test:e2e:install` — Install Playwright browsers

## Coding Style & Naming Conventions
- TypeScript, 2-space indent, prefer named exports
- React components in PascalCase (`Header.tsx`); hooks start with `use*`
- Keep UI in `components/`, pages in `pages/`, helpers in `lib/`
- Tailwind CSS for styling; group classes by layout → color → state
- Lint locally with `npm run lint`; fix warnings before PRs

## Testing Guidelines
- **Unit**: Vitest tests co-located with components (e.g., `Header.test.tsx`)
- **E2E**: Playwright specs in `tests/e2e/*.spec.ts`
- **Accessibility**: @axe-core/playwright for WCAG compliance
- Install Playwright browsers once: `npm run test:e2e:install`
- Prefer behavior-focused assertions and accessible locators

## Commit & Pull Request Guidelines
- Conventional commits: `<type>(<scope>): <message>` (feat, fix, docs, test, refactor, ci, chore)
- Branching: `main` (stable), `dev` (integration), `feature/*`, `bugfix/*`
- PRs: clear summary, screenshots for UI changes, updated tests
- Regularly commit and push progress — don't let work pile up

## Design System Reference
- **Primary text color**: `#16163F` (dark navy/indigo)
- **Accent blue**: `#36A6ED` (buttons, links)
- **Accent purple**: `#9E3FFD` (active nav items)
- **Heading font**: Work Sans SemiBold
- **Body font**: Avenir Light → system sans-serif fallback
- **Logo**: MetaPhase EDG with blue/purple swirl icon + tagline "Problem Solvers for a Digital World"

## Deployment
- **Target**: Netlify
- **SPA routing**: `public/_redirects` (`/*  /index.html  200`)
- **Branch strategy**: Work on `dev`, PR into `main`

## Owner Notes
- This repo is public but NOT open source — no license file
- Contact form should simply send email to info@metaphaseedg.com — keep it super simple
- Standard GitHub files (PR template) but no CONTRIBUTING.md
- The site is a faithful 1-for-1 clone of the Wix site at https://www.metaphaseedg.com/
- When making changes, visually compare against the original site to ensure fidelity

## Agent Run Checklist
Before finishing a substantive change:
1. Run `npm run build` — ensure production build succeeds
2. Run `npm run lint` — ensure no lint errors
3. Run `npm run test:run` — ensure all unit tests pass
4. Run `npm run test:e2e` — ensure all E2E tests pass
5. Visually verify against original site at https://www.metaphaseedg.com/
6. Commit and push progress
