import { SITE_URL, ORG } from '../lib/site';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  /** Optional JSON-LD object(s) injected as application/ld+json. */
  jsonLd?: object | object[];
  /** Optional Open Graph image (absolute or root-relative path). */
  image?: string;
  /** Set on pages that should not be indexed (e.g. 404). */
  noindex?: boolean;
};

// Uses React 19 native document metadata: <title>/<meta>/<link> rendered here are
// hoisted to <head> on the client, and relocated into <head> at prerender time by
// scripts/prerender.mjs. JSON-LD <script> stays in <body>, which is valid for crawlers.
export default function Seo({ title, description, path, jsonLd, image, noindex }: SeoProps) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle = path === '/' ? title : `${title} | ${ORG.name}`;
  const ogImage = `${SITE_URL}${image ?? '/images/og-card.png'}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={ORG.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
