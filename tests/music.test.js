import { test, expect } from '@playwright/test';
import { checkBasicPageStructure, waitForAnimations } from './utils/test-utils';

test.describe('Music Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/music');
    await waitForAnimations(page);
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Music/);
  });

  test('should have basic page structure', async ({ page }) => {
    await checkBasicPageStructure(page);
  });

  test('should display music player section', async ({ page }) => {
    // Check if music player section exists
    await expect(page.getByText('Music Player', { exact: true })).toBeVisible();
    
    // Check if music player exists
    await expect(page.locator('.music-player')).toBeVisible();
  });
});
