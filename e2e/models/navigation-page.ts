import { expect, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class NavigationPage extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	async expect_header_and_footer() {
		// header container always visible; desktop nav hidden on mobile is expected
		await expect(this.header).toBeVisible();
		await expect(this.footer).toBeVisible();
	}

	async navigate_via_header(link_name: RegExp | string, expected_url: RegExp | string) {
		const link = this.page.locator('header').getByRole('link', { name: link_name }).first();
		if ((await link.count()) === 0) return;
		await link.click();
		await this.hydrated();
		await expect(this.page).toHaveURL(expected_url);
	}
}
