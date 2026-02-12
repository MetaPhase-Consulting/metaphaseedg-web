# MetaPhase EDG Website — CLAUDE.md

## Project Context

This is the corporate website for **MetaPhase EDG**, a Solutions Integrator joint venture between MetaPhase Consulting, LLC and SharpEDG, LLC. The site was migrated from Wix to a modern React + Vite stack deployed on Netlify. The goal is a faithful 1-for-1 reproduction of the original Wix-hosted site at https://www.metaphaseedg.com/.

## Company Overview

MetaPhase EDG is an SBA certified 8(a), EDWOSB, WOSB Small Business Joint Venture. They bring cutting-edge technology and strategic management consulting to provide holistic solutions for the Federal mission. The team includes former Federal Senior Executives, expert technologists, and industry-recognized management consultants.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 3 with custom brand theme
- **Routing**: React Router v7
- **Testing**: Vitest (unit) + Playwright (E2E + accessibility)
- **Deployment**: Netlify (with `public/_redirects` for SPA routing)
- **Fonts**: Work Sans (Google Fonts), Avenir (system fallback)

## Brand Design System (from original Wix site)

### Colors
- Primary text: `#16163F` (dark navy/indigo)
- Button/accent blue: `#36A6ED`
- Active link purple: `#9E3FFD`
- Background: white (`#FFFFFF`)
- Footer background: light gray

### Typography
- Headings: Work Sans SemiBold
- Body text: Avenir Light (fallback to system sans-serif)
- Logo text: Work Sans SemiBold, ~59px

### Logo
- MetaPhase EDG with blue/purple swirl icon
- Tagline below logo: "Problem Solvers for a Digital World"

## Pages
1. **Home** (`/`) — Hero with background image, company description, service highlights
2. **About Us** (`/about-us`) — JV description, MetaPhase + SharpEDG details, certifications
3. **Contact** (`/contact`) — Contact form (sends email to info@metaphaseedg.com), office address, phone
4. **Book Online** (`/book-online`) — Scheduling page
5. **Privacy Policy** (`/privacy-policy`) — Legal text

## Contact Information
- **Email**: info@metaphaseedg.com
- **Phone**: 301-537-3719
- **Address**: 11911 Freedom Dr. Suite 1010, Reston, VA 20190

## NAICS Codes
541611, 541519, 541512, 541511, 541880, 541330, 541990, 541618, 611430, 611420

## Key Commands
- `npm run dev` — Start dev server (http://localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview built app
- `npm run lint` — Run ESLint
- `npm run test` — Run Vitest in watch mode
- `npm run test:run` — Run Vitest once
- `npm run test:e2e` — Run Playwright E2E tests

## Owner Notes
- Repo is public but NOT open source (no license file)
- Deploy to Netlify
- Work on `dev` branch, PR into `main`
- Contact form should simply send email to the email listed — super simple functionality
- Regularly commit and push progress
- Standard GitHub files (PR template, etc.) but no CONTRIBUTING.md needed
