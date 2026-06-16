// Static-site generation: renders each route to HTML with route-specific
// <head> tags (title, description, canonical, OG) baked in, so search engines
// and AI crawlers get real content without executing JavaScript.
//
// React 19 hoists <title>/<meta>/<link> to the front of the rendered string;
// we relocate that run into <head>. JSON-LD <script> tags stay in <body>
// (valid for crawlers, and consistent with client hydration).
//
// Pipeline (see package.json "build"):
//   1. vite build                          -> dist/ (client bundle + index.html template)
//   2. vite build --ssr entry-server.tsx   -> dist-ssr/entry-server.js
//   3. node scripts/prerender.mjs          -> writes dist/<route>/index.html
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const template = readFileSync(join(DIST, 'index.html'), 'utf8');

const { render, ROUTES } = await import(
  pathToFileURL(join(process.cwd(), 'dist-ssr', 'entry-server.js')).href
);

// Pull the leading run of hoisted metadata tags off the front of the render.
function splitHead(html) {
  const m = html.match(/^((?:\s*(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>))+)/i);
  return { head: m ? m[1] : '', body: m ? html.slice(m[1].length) : html };
}

// Remove the template's default per-page head tags so the route-specific ones win.
function stripDefaults(head) {
  return head
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name="description"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/gi, '')
    .replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '');
}

function outPath(route) {
  const clean = route === '/' ? '' : route.replace(/^\//, '');
  return join(DIST, clean, 'index.html');
}

let ok = 0;
for (const route of ROUTES) {
  try {
    const { head, body } = splitHead(render(route));
    const [headPart, rest] = template.split('</head>');
    const page =
      `${stripDefaults(headPart)}    ${head.trim()}\n  </head>${rest}`.replace(
        '<div id="root"></div>',
        `<div id="root">${body}</div>`
      );

    const file = outPath(route);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page);
    ok++;
    console.log(`  prerendered ${route} -> ${file}`);
  } catch (err) {
    console.error(`  ! failed to prerender ${route}:`, err.message);
    process.exitCode = 1;
  }
}

// 404 page: render the catch-all NotFound and write a top-level dist/404.html.
// Netlify serves this (with a 404 status) for unmatched paths via _redirects,
// so crawlers/no-JS clients get a real noindex 404 and the client hydrates
// against matching markup instead of the Home page.
try {
  const { head, body } = splitHead(render('/404'));
  const [headPart, rest] = template.split('</head>');
  const page = `${stripDefaults(headPart)}    ${head.trim()}\n  </head>${rest}`.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div>`
  );
  writeFileSync(join(DIST, '404.html'), page);
  console.log('  prerendered (catch-all) -> dist/404.html');
} catch (err) {
  console.error('  ! failed to prerender 404.html:', err.message);
  process.exitCode = 1;
}

console.log(`Prerendered ${ok}/${ROUTES.length} routes + 404.`);
