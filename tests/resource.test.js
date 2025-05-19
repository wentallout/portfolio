import { expect, test } from '@playwright/test';

import { checkBasicPageStructure, waitForAnimations } from './utils/test-utils';

test.describe('Resource Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/resource');
		await waitForAnimations(page);
	});

	test('should have the correct title', async ({ page }) => {
		await expect(page).toHaveTitle(/Resource/);
	});

	test('should have basic page structure', async ({ page }) => {
		await checkBasicPageStructure(page);
	});

	test('should display essential resources section', async ({ page }) => {
		// Check if essential section exists
		await expect(page.getByText('Essential', { exact: true })).toBeVisible();

		// Check if there are essential items
		const essentialItems = await page.locator('.essential-item').count();
		expect(essentialItems).toBeGreaterThan(0);
	});

	test('should display book section', async ({ page }) => {
		// Check if book section exists
		await expect(page.getByText('Book', { exact: true })).toBeVisible();

		// Check if there are book items
		const bookItems = await page.locator('.book-item').count();
		expect(bookItems).toBeGreaterThan(0);
	});

	test('should display other resources section', async ({ page }) => {
		// Check if other section exists
		await expect(page.getByText('Other', { exact: true })).toBeVisible();

		// Check if there are other items
		const otherItems = await page.locator('.other-card').count();
		expect(otherItems).toBeGreaterThan(0);
	});
});
