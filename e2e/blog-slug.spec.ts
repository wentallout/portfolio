import { expect, test } from '@playwright/test';
import { BasePage } from './models/base-page';

/** Pull real post urls out of the listing so the suite never drifts from the CMS. */
async function first_blog_hrefs(page: import('@playwright/test').Page, count: number) {
	await page.goto('/blogs', { waitUntil: 'domcontentloaded' });
	await expect(page.locator(':root')).toHaveAttribute('hydrated', { timeout: 10000 });

	const hrefs = await page.locator('main a[href^="/blogs/"]').evaluateAll((links) =>
		Array.from(new Set(links.map((link) => link.getAttribute('href') ?? ''))).filter(
			(href) => href && !href.startsWith('/blogs/tags') && !href.startsWith('/blogs/category') && !href.startsWith('/blogs/resource')
		)
	);
	expect(hrefs.length).toBeGreaterThan(0);
	return hrefs.slice(0, count);
}

test.describe('Blog detail /blogs/[slug]', () => {
	test('renders an article with a title, breadcrumb and table of contents', async ({ page }) => {
		const base = new BasePage(page);
		const [href] = await first_blog_hrefs(page, 1);

		await base.goto(href);

		await expect(page.locator('article')).toBeVisible();
		await expect(page.locator('article h1')).toHaveCount(1);
		await expect(page.getByRole('navigation', { name: 'breadcrumb' })).toBeVisible();
		await expect(page.locator('main')).toContainText(/TABLE OF CONTENTS/i);
	});

	test('keeps long URLs inside the mobile viewport', async ({ page }) => {
		const base = new BasePage(page);
		const [href] = await first_blog_hrefs(page, 1);

		await page.setViewportSize({ width: 375, height: 812 });
		await base.goto(href);

		expect(
			await base.has_no_horizontal_overflow(),
			`horizontal overflow on ${href} at mobile width`
		).toBe(true);
	});

	test('unknown slugs render the 404 page', async ({ page }) => {
		const response = await page.goto('/blogs/definitely-not-a-real-post-zzz', {
			waitUntil: 'domcontentloaded'
		});

		expect(response?.status()).toBe(404);
	});
});
