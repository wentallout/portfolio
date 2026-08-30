import { expect, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ProjectsPage extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	async goto_projects() {
		await this.goto('/projects');
	}

	async expect_listing_visible() {
		await expect(this.page.getByText(/Featured/i).first()).toBeVisible();
		await expect(this.main_content).toContainText(/Project|Demo|Snippet/i);
	}

	async open_project(slug: string) {
		await this.goto(`/projects/${slug}`);
		await expect(this.page.locator('article')).toBeVisible();
		await expect(this.page.locator('main h1, article h1').first()).toBeVisible();
	}
}
