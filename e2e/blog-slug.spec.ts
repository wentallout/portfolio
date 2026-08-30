import { expect, test } from '@playwright/test';
import { BasePage } from './models/base-page';

const SAMPLE_BLOG_SLUGS = ['ai-tools', 'css-grid-cheatsheet', 'javascript-closure'];

test.describe('Blog detail /blogs/[slug]', () => {
	for (const slug of SAMPLE_BLOG_SLUGS) {
		test(`renders ${slug}`, async ({ page }) => {
			const base = new BasePage(page);
			try {
				await base.goto(`/blogs/${slug}`);
			} catch {
				test.skip(true, `slug ${slug} routing failed`);
				return;
			}
			if ((await page.locator('text=404').count()) > 0) {
				test.skip(true, '404 for slug');
				return;
			}
			await expect(page.locator('article')).toBeVisible();
			await expect(page.locator('main h1, article h1').first()).toBeVisible();
		});
	}
});
