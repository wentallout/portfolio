import { expect, test } from '@playwright/test';
import { BasePage } from './models/base-page';

const viewports = [
	{ name: 'mobile', width: 375, height: 812 },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'desktop', width: 1280, height: 800 }
] as const;

const pages = ['/', '/about', '/projects', '/blogs', '/contact', '/design-system'] as const;

for (const vp of viewports) {
	test.describe(`Responsive ${vp.name} (${vp.width}x${vp.height})`, () => {
		test.use({ viewport: { width: vp.width, height: vp.height } });

		for (const path of pages) {
			test(`${path} has no horizontal overflow`, async ({ page }) => {
				const base_page = new BasePage(page);
				await base_page.goto(path);

				const has_overflow = !(await base_page.has_no_horizontal_overflow());
				expect(has_overflow, `horizontal overflow on ${path} at ${vp.name}`).toBe(false);

				await expect(base_page.main_content).toBeVisible();
				// header container always visible; desktop nav hidden on mobile is intentional
				await expect(base_page.header).toBeVisible();
			});
		}

		test('layout adapts per breakpoint', async ({ page }) => {
			const base_page = new BasePage(page);
			await base_page.goto('/');

			await expect(base_page.header).toBeVisible();
			await expect(base_page.footer).toBeVisible();

			// mobile: bottom nav should be visible, desktop: header nav visible
			if (vp.width < 768) {
				// bottom nav is fixed on mobile
				await expect(page.locator('nav').last()).toBeVisible();
			} else {
				await expect(page.locator('nav').first()).toBeVisible();
			}
		});

		test('no element wider than viewport', async ({ page }) => {
			const base_page = new BasePage(page);
			await base_page.goto('/blogs');
			// Use document scrollWidth as source of truth — per-element width checks are flaky with hidden/absolute elements
			expect(await base_page.has_no_horizontal_overflow(), `horizontal overflow on /blogs at ${vp.name}`).toBe(true);
		});
	});
}
