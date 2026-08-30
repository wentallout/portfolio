import { expect, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class BlogsPage extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	async goto_blogs() {
		await this.goto('/blogs');
	}

	async expect_list_visible() {
		const cards = this.page.locator('article, a[href^="/blogs/"]');
		await expect(cards.first()).toBeVisible({ timeout: 10000 });
	}

	async open_blog(slug: string) {
		await this.goto(`/blogs/${slug}`);
		if ((await this.page.locator('text=404').count()) > 0) {
			throw new Error(`blog ${slug} returned 404`);
		}
		await expect(this.page.locator('article')).toBeVisible();
		await expect(this.page.locator('main h1, article h1').first()).toBeVisible();
	}
}
