// Post-build SEO/GEO gate: asserts the prerendered output actually contains the
// crawler-facing artifacts. Run after `npm run build` (see CI).
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const errors = [];

// 1. Static crawler files
for (const file of ['robots.txt', 'sitemap.xml', 'llms.txt']) {
  if (!existsSync(join(DIST, file))) errors.push(`missing ${file}`);
}

// 2. Each route prerendered with real head + body
const routes = {
  '': 'index.html',
  'about-us': 'about-us/index.html',
  'contract-vehicles': 'contract-vehicles/index.html',
  contact: 'contact/index.html',
  'book-online': 'book-online/index.html',
  'privacy-policy': 'privacy-policy/index.html',
};

for (const [route, file] of Object.entries(routes)) {
  const path = join(DIST, file);
  if (!existsSync(path)) {
    errors.push(`missing prerendered ${file}`);
    continue;
  }
  const html = readFileSync(path, 'utf8');
  const label = route || '/';
  const titles = (html.match(/<title>/g) || []).length;
  if (titles !== 1) errors.push(`${label}: expected 1 <title>, found ${titles}`);
  if (!/<meta name="description" content="[^"]{20,}"/.test(html))
    errors.push(`${label}: missing/short meta description`);
  if (!/<link rel="canonical"/.test(html)) errors.push(`${label}: missing canonical`);
  const root = html.match(/<div id="root">([\s\S]*?)<\/div>/);
  if (!root || root[1].length < 200) errors.push(`${label}: empty/short prerendered #root`);
  if (!html.includes('application/ld+json')) errors.push(`${label}: no JSON-LD`);
}

// 4. Prerendered 404 page (served by Netlify for misses) must be a real noindex 404
const p404 = join(DIST, '404.html');
if (!existsSync(p404)) {
  errors.push('missing prerendered 404.html');
} else {
  const html404 = readFileSync(p404, 'utf8');
  if (!/name="robots"\s+content="noindex/.test(html404)) errors.push('404.html missing noindex robots meta');
  const root404 = html404.match(/<div id="root">([\s\S]*)<\/div>/);
  if (!root404 || root404[1].length < 200) errors.push('404.html has empty/short prerendered #root');
  if (!/not found/i.test(html404)) errors.push('404.html missing NotFound content');
}

if (errors.length) {
  console.error('SEO check FAILED:');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('SEO check passed: robots/sitemap/llms present; all routes prerendered with head + body.');
