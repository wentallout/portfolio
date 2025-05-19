import { test, expect } from '@playwright/test';
import { checkThemeSwitcher, waitForAnimations } from './utils/test-utils';

test.describe('Layout and Common Elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForAnimations(page);
  });

  test('should have working theme switcher', async ({ page }) => {
    const themeChanged = await checkThemeSwitcher(page);
    expect(themeChanged).toBeTruthy();
  });

  test('should have working navigation menu', async ({ page }) => {
    // Check if navigation is present
    await expect(page.locator('nav')).toBeVisible();
    
    // Check if navigation links are present
    const navLinks = await page.locator('nav a').count();
    expect(navLinks).toBeGreaterThan(0);
    
    // Click on a navigation link
    await page.click('nav a[href="/blog"]');
    
    // Check if we navigated to the correct page
    await expect(page).toHaveURL(/\/blog/);
  });

  test('should have working footer', async ({ page }) => {
    // Check if footer is present
    await expect(page.locator('footer')).toBeVisible();
    
    // Check if footer links are present
    const footerLinks = await page.locator('footer a').count();
    expect(footerLinks).toBeGreaterThan(0);
  });

  test('should have responsive design', async ({ page }) => {
    // Test on desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    await waitForAnimations(page);
    
    // Check if navigation is visible
    await expect(page.locator('nav')).toBeVisible();
    
    // Test on mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await waitForAnimations(page);
    
    // Check if hamburger menu is visible
    await expect(page.locator('.hamburger')).toBeVisible();
  });
});
