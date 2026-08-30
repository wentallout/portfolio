import { expect, test } from '@playwright/test';
import { ProjectsPage } from './models/projects-page';

const project_slugs = ['nvault', 'reza', 'stock-grabber', 'super-tab-manager', 'dev-portfolio'] as const;

test.describe('Projects listing /projects', () => {
	test('renders sections and project cards', async ({ page }) => {
		const projects_page = new ProjectsPage(page);
		await projects_page.goto_projects();
		await projects_page.expect_listing_visible();
	});
});

test.describe('Project detail /projects/[slug]', () => {
	for (const slug of project_slugs) {
		test(`renders ${slug} with post content`, async ({ page }) => {
			const projects_page = new ProjectsPage(page);
			await projects_page.open_project(slug);
		});
	}

	test('404 for unknown project', async ({ page }) => {
		const res = await page.goto('/projects/does-not-exist-zzz', { waitUntil: 'domcontentloaded' });
		expect(res?.status()).toBe(404);
		await expect(page.locator('body')).toContainText(/404|Not found/i);
	});
});
