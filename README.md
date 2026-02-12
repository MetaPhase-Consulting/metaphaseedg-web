# MetaPhase EDG Website

Corporate website for **MetaPhase EDG** — a Solutions Integrator joint venture bringing cutting-edge technology and strategic management consulting to provide holistic solutions for the Federal mission.

## Tech Stack

- **React 19** + TypeScript + Vite
- **Tailwind CSS 3** for styling
- **React Router v7** for client-side routing
- **Vitest** + **Playwright** for testing
- **Netlify** for deployment

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Testing

```bash
# Unit tests
npm run test:run

# E2E tests (install browsers first)
npm run test:e2e:install
npm run test:e2e

# Lint
npm run lint
```

## Deployment

This site deploys automatically to Netlify from the `main` branch. SPA routing is handled via `public/_redirects`.

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, company overview, services |
| About Us | `/about-us` | Joint venture details, certifications |
| Contact | `/contact` | Contact form, office address, phone |
| Book Online | `/book-online` | Scheduling |
| Privacy Policy | `/privacy-policy` | Legal text |
