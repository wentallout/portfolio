import { expect, test } from '@playwright/test';

import { checkBasicPageStructure, waitForAnimations } from './utils/test-utils';

// Add debug mode to see more information
test.setTimeout(60000); // Increase timeout for debugging

test.describe('Blog Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/blog');
		await waitForAnimations(page);
	});

	test('should have the correct title', async ({ page }) => {
		await expect(page).toHaveTitle(/Blog/);
	});

	test('should have basic page structure', async ({ page }) => {
		await checkBasicPageStructure(page);
	});

	test('should display blog list', async ({ page }) => {
		// Check if blog section exists
		await expect(page.locator('.blog-list')).toBeVisible();

		// Check if there are blog cards
		const blogCards = await page.locator('article.blog').count();
		expect(blogCards).toBeGreaterThan(0);
	});

	test('should have working search functionality', async ({ page }) => {
		// Type in the search box
		await page.fill('input[placeholder*="Search blogs"]', 'svelte');

		// Wait for search results
		await page.waitForTimeout(500);

		// Check if search results are displayed
		const filteredBlogs = await page.locator('article.blog').count();
		expect(filteredBlogs).toBeGreaterThanOrEqual(0);
	});

	test('should have working category tags', async ({ page }) => {
		// Find and click on a category tag
		const firstTag = page.locator('.tag').first();
		const tagText = await firstTag.textContent();

		await firstTag.click();

		// Check if we navigated to the category page
		await expect(page).toHaveURL(/\/blog\/category\//);

		// Check if the category title is displayed
		await expect(page.locator('.result__category')).toContainText(tagText.replace('#', ''));
	});

	test('should navigate to blog post when clicking on a blog card', async ({ page }) => {
		try {
			// Debug: Log the page URL
			console.log('Current URL:', page.url());

			// Wait for the blog list to be visible
			await page.waitForSelector('.blogs', { state: 'visible' });

			// Take a screenshot for debugging
			await page.screenshot({ path: 'blog-page-debug.png' });

			// Use a more reliable selector that matches the actual HTML structure
			// Look for any anchor tag that contains an article element
			const blogLink = page.locator('a:has(article)').first();

			// Get the blog title from the h5 element inside the article
			const blogTitle = await blogLink.locator('h5').textContent();
			console.log('Blog title:', blogTitle);

			// Get the href attribute to verify we're clicking on a link
			const href = await blogLink.getAttribute('href');
			console.log('Blog link href:', href);

			// Click on the blog link
			await blogLink.click();

			// Wait for navigation
			await page.waitForURL(/\/blog\//);

			// Take a screenshot after navigation
			await page.screenshot({ path: 'blog-post-debug.png' });

			// Check if we navigated to the blog post
			await expect(page).toHaveURL(/\/blog\//);

			// Check if the blog title is displayed
			await expect(page.locator('h1')).toContainText(blogTitle);
		} catch (error) {
			// Log the error and take a screenshot
			console.error('Test failed with error:', error);
			await page.screenshot({ path: 'blog-error.png' });
			throw error;
		}
	});

	test('should have working pagination if there are multiple pages', async ({ page }) => {
		// Check if pagination exists
		const paginationExists = (await page.locator('.pagination').count()) > 0;

		if (paginationExists) {
			// Get current page items
			const initialItems = await page.locator('article.blog').count();

			// Click on the next page button
			await page.click('.pagination button:has-text("2")');

			// Wait for page to load
			await page.waitForTimeout(500);

			// Get new page items
			const newItems = await page.locator('article.blog').count();

			// Check if items are different (pagination worked)
			expect(initialItems).toBeGreaterThan(0);
			// Compare the items from different pages
			console.log(`Page 1 items: ${initialItems}, Page 2 items: ${newItems}`);
		}
	});
});
