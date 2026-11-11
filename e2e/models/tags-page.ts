import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class TagsPage extends BasePage {
	readonly tag_links: Locator;

	constructor(page: Page) {
		super(page);
		this.tag_links = page.locator('main a[href^="/blogs/tags/"]');
	}

	async goto_tags() {
		await this.goto('/blogs/tags');
	}

	async expect_tags_listed() {
		expect(await this.tag_links.count()).toBeGreaterThan(0);
		await expect(this.tag_links.first()).toBeVisible();
	}

	/**
	 * Walks the first listed tag. Blog tags are data-driven, so the destination
	 * is discovered rather than hard-coded.
	 */
	async open_first_tag(): Promise<string> {
		const href = await this.tag_links.first().getAttribute('href');
		expect(href).toBeTruthy();
		await this.goto(href!);
		await expect(this.page).toHaveURL(new RegExp(href!.replace(/\//g, '\\/')));
		await expect(this.page.locator('h1')).toBeVisible();
		return href!;
	}
}
