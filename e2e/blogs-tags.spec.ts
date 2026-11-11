import { expect, test } from '@playwright/test';
import { TagsPage } from './models/tags-page';

test.describe('Blog tags /blogs/tags', () => {
	test.describe('Initial Rendering', () => {
		test('lists every tag as a link', async ({ page }) => {
			const tags_page = new TagsPage(page);
			await tags_page.goto_tags();

			await tags_page.expect_tags_listed();
			// BlurText joins animated words with non-breaking spaces, so match loosely.
			await expect(page.locator('h1')).toHaveText(/blog\s+tags/i);
		});
	});

	test.describe('User Interactions', () => {
		test('opens the tag page and shows its posts', async ({ page }) => {
			const tags_page = new TagsPage(page);
			await tags_page.goto_tags();

			const href = await tags_page.open_first_tag();

			expect(href).toMatch(/^\/blogs\/tags\/.+/);
			await expect(page.locator('main a[href^="/blogs/"]').first()).toBeVisible();
		});
	});

	test.describe('Edge Cases', () => {
		test('an unknown tag renders an empty but valid page', async ({ page }) => {
			const tags_page = new TagsPage(page);
			const response = await page.goto('/blogs/tags/zzz-not-a-real-tag', {
				waitUntil: 'domcontentloaded'
			});

			expect(response?.status()).toBeLessThan(500);
			await expect(tags_page.main_content).toBeVisible();
		});
	});
});
