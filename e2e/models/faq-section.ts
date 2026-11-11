import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class FaqSection extends BasePage {
	readonly section: Locator;

	constructor(page: Page) {
		super(page);
		this.section = page.locator('section', { has: page.getByRole('heading', { name: 'FAQ' }) });
	}

	async goto_faq() {
		await this.goto('/');
		await this.section.scrollIntoViewIfNeeded();
	}

	item(question: string): Locator {
		return this.section.getByRole('button', { name: question });
	}

	/** The accordion row wrapping the trigger and its collapsible panel. */
	row(question: string): Locator {
		return this.item(question).locator('xpath=..');
	}

	answer(question: string): Locator {
		return this.section.getByRole('button', { name: question }).locator('xpath=../../div[2]');
	}

	/** Extra height the collapsible panel adds to the accordion row. */
	private async panel_height(question: string): Promise<number> {
		const trigger_box = await this.item(question).boundingBox();
		const row_box = await this.row(question).boundingBox();
		if (!trigger_box || !row_box) return -1;
		return row_box.height - trigger_box.height;
	}

	async expect_collapsed(question: string) {
		await expect(this.item(question)).toHaveAttribute('aria-expanded', 'false');

		// The panel must not contribute any height while collapsed. This is the
		// regression guard for the invalid `grid-template-rows-[…]` utility that
		// used to leave every answer permanently expanded. Poll because the row
		// animates over ~300ms.
		await expect
			.poll(() => this.panel_height(question), {
				message: `panel for "${question}" should add no height while collapsed`
			})
			.toBeLessThan(2);
	}

	async expand(question: string) {
		await this.item(question).click();
		await expect(this.item(question)).toHaveAttribute('aria-expanded', 'true');
	}

	async collapse(question: string) {
		await this.item(question).click();
		await expect(this.item(question)).toHaveAttribute('aria-expanded', 'false');
	}

	async expect_expanded(question: string) {
		await expect
			.poll(() => this.panel_height(question), {
				message: `panel for "${question}" should reveal its answer`
			})
			.toBeGreaterThan(8);
	}
}
