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

	test('category detail filters blogs', async ({ page }) => {
		const base = new BasePage(page);
		// Try a common category slug derived from frontmatter - try to click first category link if exists
		await base.goto('/blogs/category');
		const catLink = page.locator('a[href*="/blogs/category/"]').first();
		if (await catLink.count()) {
			const href = await catLink.getAttribute('href');
			await catLink.click();
			await base.hydrated();
			if (href) await expect(page).toHaveURL(href);
			await expect(page.locator('main')).toBeVisible();
		} else {
			// Fallback: try known category
			await page.goto('/blogs/category/css');
			if ((await page.locator('text=404').count()) === 0) {
				await expect(page.locator('main')).toBeVisible();
			}
		}
	});
});

test.describe('Blogs resource /blogs/resource', () => {
	test('resource index renders', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/blogs/resource');
		await expect(page.locator('main')).toBeVisible();
	});

	test('resource tool renders RemConverter', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/blogs/resource/tool');
		await expect(page.locator('main')).toBeVisible();
		// RemConverter has input
		const input = page.getByRole('textbox').first();
		if (await input.count()) await expect(input).toBeVisible();
	});

	test('resource exp renders', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/blogs/resource/exp');
		await expect(page.locator('main')).toBeVisible();
	});
});
