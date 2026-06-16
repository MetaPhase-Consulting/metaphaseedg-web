import { test, expect } from '@playwright/test';

const routes = [
  { path: '/', title: /MetaPhase EDG/ },
  { path: '/about-us', title: /About Us \| MetaPhase EDG/ },
  { path: '/contract-vehicles', title: /Contract Vehicles \| MetaPhase EDG/ },
  { path: '/contact', title: /Contact \| MetaPhase EDG/ },
];

test.describe('SEO / GEO', () => {
  for (const { path, title } of routes) {
    test(`${path} has title, description, and canonical`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(title);

      const description = page.locator('head meta[name="description"]');
      await expect(description).toHaveCount(1);
      expect((await description.getAttribute('content'))?.length ?? 0).toBeGreaterThan(20);

      const canonical = page.locator('head link[rel="canonical"]');
      await expect(canonical).toHaveCount(1);
      expect(await canonical.getAttribute('href')).toContain('metaphaseedg.com');
    });
  }

  test('exposes JSON-LD structured data', async ({ page }) => {
    await page.goto('/');
    const ldJson = page.locator('script[type="application/ld+json"]');
    expect(await ldJson.count()).toBeGreaterThan(0);
    const text = (await ldJson.first().textContent()) ?? '';
    expect(text).toContain('schema.org');
  });

  test('serves robots.txt, sitemap.xml, and llms.txt', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain('Sitemap:');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBeTruthy();
    expect(await sitemap.text()).toContain('/contract-vehicles');

    const llms = await request.get('/llms.txt');
    expect(llms.ok()).toBeTruthy();
    expect(await llms.text()).toContain('MetaPhase EDG');
  });
});
