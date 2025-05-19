import { expect, test } from '@playwright/test';

import { checkBasicPageStructure, waitForAnimations } from './utils/test-utils';

test.describe('Project Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/project');
		await waitForAnimations(page);
	});

	test('should have the correct title', async ({ page }) => {
		await expect(page).toHaveTitle(/Project/);
	});

	test('should have basic page structure', async ({ page }) => {
		await checkBasicPageStructure(page);
	});

	test('should display project list', async ({ page }) => {
		// Check if project section exists
		await expect(page.getByText('Projects', { exact: true })).toBeVisible();

		// Check if there are project cards
		const projectCards = await page.locator('.project-card').count();
		expect(projectCards).toBeGreaterThan(0);
	});

	test('should display code snippets section', async ({ page }) => {
		// Check if code snippets section exists
		await expect(page.getByText('Code Snippets', { exact: true })).toBeVisible();

		// Check if there are snippet cards
		const snippetCards = await page.locator('.snippet-card').count();
		expect(snippetCards).toBeGreaterThan(0);
	});

	test('should navigate to project detail when clicking on a project card', async ({ page }) => {
		// Find and click on the first project card
		const firstProjectCard = await page.locator('.project-card').first();
		const projectTitle = await firstProjectCard.locator('.project-card__title').textContent();

		await firstProjectCard.click();

		// Check if we navigated to the project detail
		await expect(page).toHaveURL(/\/project\//);

		// Check if the project title is displayed
		await expect(page.locator('h1')).toContainText(projectTitle);
	});
});
