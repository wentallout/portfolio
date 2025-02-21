import { expect, test } from '@playwright/test';

test('test browser', async ({ page }) => {
	// point this to wherever you want
	await page.goto('http://localhost:3000/');

	// keep browser open
	await page.pause();
});

test('should fetch and display blogs correctly', async ({ page }) => {
	// Go to the blog page
	await page.goto('http://localhost:3000/blog');

	// Check if there are any blog cards in the blog list container
	const blogCards = await page.$$('.blog');
	expect(blogCards.length).toBeGreaterThan(0);
});
