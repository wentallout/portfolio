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

}
