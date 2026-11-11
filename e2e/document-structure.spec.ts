import { expect, test } from '@playwright/test';
import { BasePage } from './models/base-page';

const public_pages = [
	'/',
	'/about',
	'/projects',
	'/blogs',
	'/blogs/tags',
	'/blogs/resource',
	'/blogs/resource/tool',
	'/contact',
	'/design-system'
] as const;

/** Elements that render text directly and use a font smaller than 14px. */
const find_tiny_text = (page: import('@playwright/test').Page) =>
	page.evaluate(() => {
		const offenders: string[] = [];
		for (const el of document.querySelectorAll('main *')) {
			const has_own_text = [...el.childNodes].some(
				(node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
			);
			if (!has_own_text) continue;

			const size = parseFloat(getComputedStyle(el).fontSize);
			if (size && size < 13.5) {
				offenders.push(`${el.tagName.toLowerCase()}.${el.className} (${size}px)`);
			}
		}
		return [...new Set(offenders)];
	});

test.describe('Document structure', () => {
	for (const path of public_pages) {
		test(`${path} exposes exactly one h1`, async ({ page }) => {
			const base = new BasePage(page);
			await base.goto(path);

			await expect(page.locator('h1')).toHaveCount(1);
		});

		test(`${path} keeps text at or above 14px`, async ({ page }) => {
			const base = new BasePage(page);
			await base.goto(path);

			expect(await find_tiny_text(page), `sub-14px text on ${path}`).toEqual([]);
		});
	}

	test('blog detail pages expose exactly one h1', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/blogs');

		const href = await page.locator('main a[href^="/blogs/"]').first().getAttribute('href');
		expect(href).toBeTruthy();

		await base.goto(href!);
		await expect(page.locator('h1')).toHaveCount(1);
	});

	test('project detail pages expose exactly one h1', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/projects/nvault');

		await expect(page.locator('h1')).toHaveCount(1);
	});

	test('the 404 page keeps the layout chrome', async ({ page }) => {
		const base = new BasePage(page);
		await page.goto('/this-route-does-not-exist-zzz', { waitUntil: 'domcontentloaded' });

		await expect(base.header).toBeVisible();
	});
});
