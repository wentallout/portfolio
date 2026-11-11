import { expect, test } from '@playwright/test';
import { ResourcePage } from './models/resource-page';

test.describe('Resource listing /blogs/resource', () => {
	test.describe('Initial Rendering', () => {
		test('renders resource cards instead of a blank page', async ({ page }) => {
			const resource_page = new ResourcePage(page);
			await resource_page.goto_resource();

			await resource_page.expect_cards_visible();
			await expect(page.locator('main')).not.toBeEmpty();
		});

		test('shows the page heading', async ({ page }) => {
			const resource_page = new ResourcePage(page);
			await resource_page.goto_resource();

			await expect(page.locator('h1')).toHaveText(/resource/i);
		});

		test('renders the design system resources', async ({ page }) => {
			const resource_page = new ResourcePage(page);
			await resource_page.goto_resource();

			await expect(page.locator('main')).toContainText(/Apple|Microsoft|UX/i);
		});
	});

	test.describe('User Interactions', () => {
		test('resource links open in a new tab', async ({ page }) => {
			const resource_page = new ResourcePage(page);
			await resource_page.goto_resource();

			const first = resource_page.cards.first();
			await expect(first).toHaveAttribute('target', '_blank');
			await expect(first).toHaveAttribute('href', /^https?:\/\//);
		});
	});

	test.describe('Edge Cases', () => {
		test('the tool sub-page renders the unit converter', async ({ page }) => {
			const resource_page = new ResourcePage(page);
			await resource_page.goto('/blogs/resource/tool');

			await expect(page.getByLabel('PX', { exact: true })).toBeVisible();
			await expect(page.getByLabel('REM', { exact: true })).toBeVisible();
		});
	});
});
