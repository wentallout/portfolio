import { expect, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
	readonly hero_heading: ReturnType<Page['getByRole']>;
	readonly featured_section: ReturnType<Page['locator']>;

	constructor(page: Page) {
		super(page);
		this.hero_heading = page.getByRole('heading').first();
		this.featured_section = page.locator('main');
	}

	async goto_home() {
		await this.goto('/');
	}

	async expect_hero_visible() {
		await expect(this.main_content).toBeVisible();
		await expect(this.hero_heading).toBeVisible();
	}

	async expect_featured_visible() {
		await expect(this.featured_section).toContainText(/Featured|Projects|Khoa/i);
	}

	async expect_layout_visible() {
		// header nav hidden on mobile (md:flex) -> check header container instead of nav
		await expect(this.header).toBeVisible();
		await expect(this.footer).toBeVisible();
	}
}
