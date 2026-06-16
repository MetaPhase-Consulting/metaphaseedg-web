// Central site metadata used for SEO/GEO (meta tags, JSON-LD, sitemap, llms.txt).
export const SITE_URL = 'https://www.metaphaseedg.com';

export const ORG = {
  name: 'MetaPhase EDG',
  legalName: 'MetaPhase EDG, LLC',
  tagline: 'Problem Solvers for a Digital World',
  description:
    'MetaPhase EDG is an SBA-certified 8(a), EDWOSB, and WOSB Small Business Joint Venture bringing cutting-edge technology and strategic management consulting to the Federal mission.',
  email: 'info@metaphaseedg.com',
  phone: '+1-703-399-4069',
  phoneDisplay: '703-399-4069',
  address: {
    street: '11911 Freedom Dr, Ste 1010',
    city: 'Reston',
    region: 'VA',
    postalCode: '20190',
    country: 'US',
  },
  sameAs: ['https://metaphase.tech', 'https://www.sharpedg.com'],
  founders: ['MetaPhase Consulting, LLC', 'SharpEDG, LLC'],
  certifications: ['SBA 8(a)', 'EDWOSB', 'WOSB', 'Small Business Joint Venture'],
};

// Routes that get prerendered and listed in the sitemap.
export const ROUTES = [
  '/',
  '/about-us',
  '/contract-vehicles',
  '/contact',
  '/book-online',
  '/privacy-policy',
];
