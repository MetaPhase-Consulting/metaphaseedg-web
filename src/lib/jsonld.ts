import { SITE_URL, ORG } from './site';

const orgId = `${SITE_URL}/#organization`;

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-large.png`,
    description: ORG.description,
    email: ORG.email,
    telephone: ORG.phone,
    slogan: ORG.tagline,
    sameAs: ORG.sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.address.street,
      addressLocality: ORG.address.city,
      addressRegion: ORG.address.region,
      postalCode: ORG.address.postalCode,
      addressCountry: ORG.address.country,
    },
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: ORG.name,
    publisher: { '@id': orgId },
  };
}

export function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': orgId,
    name: ORG.name,
    image: `${SITE_URL}/images/logo-large.png`,
    url: SITE_URL,
    email: ORG.email,
    telephone: ORG.phone,
    priceRange: 'Government contracting',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.address.street,
      addressLocality: ORG.address.city,
      addressRegion: ORG.address.region,
      postalCode: ORG.address.postalCode,
      addressCountry: ORG.address.country,
    },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  };
}
