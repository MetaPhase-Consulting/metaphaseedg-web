import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('home page loads correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/MetaPhase EDG/);
    await expect(page.getByText('MetaPhase EDG is a solution integrator')).toBeVisible();
  });

  test('can navigate to About Us page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about us/i }).click();
    await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
  });

  test('can navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
  });

  test('can navigate to Privacy Policy from footer', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /privacy policy/i }).click();
    await expect(page.getByRole('heading', { name: 'Privacy Policy' })).toBeVisible();
  });

  test('header is visible on all pages', async ({ page }) => {
    const pages = ['/', '/about-us', '/contact', '/book-online', '/privacy-policy'];

    for (const path of pages) {
      await page.goto(path);
      await expect(page.getByText('MetaPhase EDG').first()).toBeVisible();
    }
  });

  test('footer is visible on all pages', async ({ page }) => {
    const pages = ['/', '/about-us', '/contact', '/book-online', '/privacy-policy'];

    for (const path of pages) {
      await page.goto(path);
      await expect(page.getByText('Company Information')).toBeVisible();
    }
  });
});
