/* eslint-disable react-refresh/only-export-components */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export { ROUTES } from './lib/site';

// Rendered once per route by scripts/prerender.mjs to produce static HTML.
// React 19 hoists <title>/<meta>/<link> to the front of the returned string;
// the prerender script relocates those into <head>.
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
