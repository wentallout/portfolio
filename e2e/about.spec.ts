import { expect, test } from '@playwright/test';
import { BasePage } from './models/base-page';

test.describe('About page /about', () => {
	test('renders bio, purpose and external links', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/about');

		await expect(page.getByText(/Khoa Nguyen/i).first()).toBeVisible();
		await expect(page.getByText(/Mission|Purpose/i).first()).toBeVisible();

		const arena = page.getByRole('link', { name: /Are\.na/i });
		await expect(arena).toBeVisible();
		await expect(arena).toHaveAttribute('target', '_blank');

		const spotify = page.getByRole('link', { name: /Spotify/i });
		await expect(spotify).toBeVisible();
		await expect(spotify).toHaveAttribute('target', '_blank');
	});

	test('shows breadcrumb', async ({ page }) => {
		const base = new BasePage(page);
		await base.goto('/about');
		// Breadcrumb component rendered
		await expect(page.locator('nav, [aria-label="breadcrumb"] , [data-testid="breadcrumb"]').first()).toBeVisible();
	});
});
