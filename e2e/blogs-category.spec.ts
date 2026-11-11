import { expect, test } from '@playwright/test';
import { BasePage } from './models/base-page';

test.describe('Blogs category /blogs/category', () => {
	test('renders category index', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/blogs/category');
		await expect(page.locator('main')).toBeVisible();
		// Should list categories or redirect; at least no 500
		await expect(page.locator('body')).not.toContainText('Internal Error');
	});

	test('legacy category detail redirects to the matching tag page', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/blogs/category/anything');

		await expect(page).toHaveURL(/\/blogs\/tags\/anything/);
		await expect(page.locator('main')).toBeVisible();
	});
});


test.describe('Blogs resource /blogs/resource/exp', () => {
	test('renders the experiments page with a heading', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/blogs/resource/exp');

		await expect(page.locator('h1')).toHaveText(/experiments/i);
	});
});
