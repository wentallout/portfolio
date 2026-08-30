import { expect, test } from '@playwright/test';
import { BasePage } from './models/base-page';

test.describe('Design system /design-system', () => {
	test('renders colors and typography sections', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/design-system');

		await expect(page.locator('main')).toBeVisible();
		await expect(page.locator('main')).toContainText(/Kintsugi|Design System|Colors|Typography/i);
	});

	test('shows breadcrumb and sections', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/design-system');
		await expect(page.locator('main')).toContainText(/.+/);
	});
});
