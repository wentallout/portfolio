import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ResourcePage extends BasePage {
	readonly cards: Locator;
	readonly card_headings: Locator;

	constructor(page: Page) {
		super(page);
		this.cards = page.locator('main a[target="_blank"]');
		this.card_headings = page.locator('main h3');
	}

	async goto_resource() {
		await this.goto('/blogs/resource');
	}

	async expect_cards_visible() {
		expect(await this.cards.count()).toBeGreaterThan(0);
		await expect(this.card_headings.first()).toBeVisible();

		// Every resource card must open safely in a new tab.
		const count = await this.cards.count();
		for (let i = 0; i < count; i++) {
			const rel = await this.cards.nth(i).getAttribute('rel');
			expect(rel).toContain('noopener');
		}
	}
}
