import { expect, test } from '@playwright/test';

import { checkBasicPageStructure, waitForAnimations } from './utils/test-utils';

test.describe('About Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/about');
		await waitForAnimations(page);
	});

	test('should have the correct title', async ({ page }) => {
		await expect(page).toHaveTitle(/About/);
	});

	test('should have basic page structure', async ({ page }) => {
		await checkBasicPageStructure(page);
	});

	test('should display about me content', async ({ page }) => {
		// Check if about page title exists
		await expect(page.locator('h1')).toContainText('About Me');

		// Check if content exists
		const contentExists = (await page.locator('p').count()) > 0;
		expect(contentExists).toBeTruthy();
	});
});
