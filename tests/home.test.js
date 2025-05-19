import { test, expect } from '@playwright/test';
import { checkBasicPageStructure, checkNavigation, waitForAnimations } from './utils/test-utils';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForAnimations(page);
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Home/);
  });

  test('should have basic page structure', async ({ page }) => {
    await checkBasicPageStructure(page);
    await checkNavigation(page);
  });

  test('should display hero section', async ({ page }) => {
    const heroSection = await page.locator('section').filter({ hasText: /Khoa/ }).first();
    await expect(heroSection).toBeVisible();
  });

  test('should display featured projects section', async ({ page }) => {
    await expect(page.getByText('Featured Project', { exact: true })).toBeVisible();
    
    // Check if there are project cards
    const projectCards = await page.locator('.project-card').count();
    expect(projectCards).toBeGreaterThan(0);
  });

  test('should display services section', async ({ page }) => {
    await expect(page.getByText('Services', { exact: true })).toBeVisible();
    
    // Check if there are service cards
    const serviceItems = await page.locator('.service-item').count();
    expect(serviceItems).toBeGreaterThan(0);
  });

  test('should display what I use section', async ({ page }) => {
    await expect(page.getByText('What I Use', { exact: true })).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Click on the Blog link
    await page.click('nav a[href="/blog"]');
    
    // Check if we navigated to the blog page
    await expect(page).toHaveURL(/\/blog/);
    
    // Go back to home
    await page.goto('/');
    
    // Click on the Project link
    await page.click('nav a[href="/project"]');
    
    // Check if we navigated to the project page
    await expect(page).toHaveURL(/\/project/);
  });
});
