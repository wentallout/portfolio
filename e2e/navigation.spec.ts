import { expect, test } from '@playwright/test';
import { NavigationPage } from './models/navigation-page';

const nav_links = ['/', '/about', '/projects', '/blogs', '/contact', '/design-system'] as const;

test.describe('Global navigation & layout', () => {
	test.describe('Initial Rendering', () => {
		test('header and footer present on all pages', async ({ page }) => {
			for (const path of nav_links) {
				const nav_page = new NavigationPage(page);
				await nav_page.goto(path);
				await nav_page.expect_header_and_footer();
				await expect(nav_page.main_content).toContainText(/.+/);
			}
		});

		test('footer visible with copyright', async ({ page }) => {
			const nav_page = new NavigationPage(page);
			await nav_page.goto('/');
			await expect(nav_page.footer).toBeVisible();
			await expect(nav_page.footer).toContainText(/Khoa|©|202/i);
		});
	});

	test.describe('User Interactions', () => {
		test('client-side navigation via header links', async ({ page }) => {
			const nav_page = new NavigationPage(page);
			await nav_page.goto('/');
			await nav_page.navigate_via_header(/Projects/i, /\/projects/);
		});
	});

	test.describe('Edge Cases', () => {
		test('no console errors on home', async ({ page }) => {
			const errors: string[] = [];
			page.on('pageerror', (e) => errors.push(e.message));
			const nav_page = new NavigationPage(page);
			await nav_page.goto('/');
			expect(errors).toEqual([]);
		});
	});
});
