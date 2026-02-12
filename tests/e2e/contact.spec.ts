import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('displays contact information', async ({ page }) => {
    await expect(page.getByText('11911 Freedom Dr. Suite 1010').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'info@metaphaseedg.com', exact: true })).toBeVisible();
    await expect(page.getByText('301-537-3719')).toBeVisible();
  });

  test('contact form has all required fields', async ({ page }) => {
    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await expect(page.getByPlaceholder('Message')).toBeVisible();
    await expect(page.getByRole('button', { name: /send/i })).toBeVisible();
  });

  test('form fields accept input', async ({ page }) => {
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Email').fill('john@example.com');
    await page.getByPlaceholder('Message').fill('Test message');

    await expect(page.getByPlaceholder('First Name')).toHaveValue('John');
    await expect(page.getByPlaceholder('Last Name')).toHaveValue('Doe');
    await expect(page.getByPlaceholder('Email')).toHaveValue('john@example.com');
    await expect(page.getByPlaceholder('Message')).toHaveValue('Test message');
  });
});
