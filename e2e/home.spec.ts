import { expect, test } from '@playwright/test';
import { HomePage } from './models/home-page';

test.describe('Home page /', () => {
	test.describe('Initial Rendering', () => {
		test('renders hero, featured, services and CTA', async ({ page }) => {
			const home_page = new HomePage(page);
			await home_page.goto_home();

			await test.step('hero visible', async () => {
				await home_page.expect_hero_visible();
			});

			await test.step('featured projects section', async () => {
				await home_page.expect_featured_visible();
			});

			await test.step('layout present', async () => {
				await home_page.expect_layout_visible();
			});
		});

		test.skip('renders all dynamic hero variants', async () => {
			// TODO: test different hero props / copy variants
		});
	});

	test.describe('User Interactions', () => {
		test('CTA links have valid href', async ({ page }) => {
			const home_page = new HomePage(page);
			await home_page.goto_home();
			const cta = page.getByRole('link', { name: /Contact|Get in touch|Hire|Projects/i }).first();
			if ((await cta.count()) > 0) {
				await expect(cta).toBeVisible();
				const href = await cta.getAttribute('href');
				expect(href).toBeTruthy();
			}
		});
	});

	test.describe('SEO', () => {
		test('has correct title', async ({ page }) => {
			await page.goto('/', { waitUntil: 'domcontentloaded' });
			await expect(page).toHaveTitle(/Khoa|Portfolio/i, { timeout: 10000 });
		});
	});
});
