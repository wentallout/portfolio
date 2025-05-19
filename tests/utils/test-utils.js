/**
 * Utility functions for tests
 */

/**
 * Checks if the page has basic structure elements
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function checkBasicPageStructure(page) {
	// Check for header
	await page.waitForSelector('header');

	// Check for main content
	await page.waitForSelector('.main-content');

	// Check for footer
	await page.waitForSelector('footer');
}

/**
 * Checks if the navigation works correctly
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function checkNavigation(page) {
	// Check if navigation is present
	await page.waitForSelector('nav');

	// Check if navigation links are present
	await page.waitForSelector('nav .navlist');
}

/**
 * Checks if the theme switcher works
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function checkThemeSwitcher(page) {
	// Get the current theme
	const initialTheme = await page.evaluate(() => {
		return document.documentElement.getAttribute('color-scheme');
	});

	// Find and click the theme switcher
	await page.click('button[aria-label="Toggle theme"]');

	// Wait for theme to change
	await page.waitForTimeout(300);

	// Get the new theme
	const newTheme = await page.evaluate(() => {
		return document.documentElement.getAttribute('color-scheme');
	});

	// Check if theme has changed
	return initialTheme !== newTheme;
}

/**
 * Waits for all animations to complete
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function waitForAnimations(page) {
	// Wait a bit for animations to start and complete
	await page.waitForTimeout(500);
}
