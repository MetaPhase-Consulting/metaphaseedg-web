import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/about-us', name: 'About Us' },
    { path: '/contact', name: 'Contact' },
    { path: '/book-online', name: 'Book Online' },
    { path: '/privacy-policy', name: 'Privacy Policy' },
  ];

  for (const { path, name } of pages) {
    test(`${name} page has no critical accessibility violations`, async ({ page }) => {
      await page.goto(path);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .disableRules(['color-contrast']) // May need fine-tuning
        .analyze();

      expect(results.violations.filter((v) => v.impact === 'critical')).toHaveLength(0);
    });
  }
});
