import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
	readonly page: Page;
	readonly main_content: Locator;
	readonly header: Locator;
	readonly footer: Locator;
	readonly bottom_nav: Locator;

	constructor(page: Page) {
		this.page = page;
		this.main_content = page.locator('main').first();
		this.header = page.locator('header').first();
		this.footer = page.locator('footer').first();
		this.bottom_nav = page.locator('nav').last();
	}

	async goto(path: string) {
		await this.page.goto(path, { waitUntil: 'domcontentloaded' });
		await this.hydrated();
	}

	async hydrated() {
		await expect(this.page.locator(':root')).toHaveAttribute('hydrated', { timeout: 10000 });
	}

	async has_no_horizontal_overflow() {
		const has_overflow = await this.page.evaluate(() => {
			const doc = document.documentElement;
			return doc.scrollWidth > doc.clientWidth + 1;
		});
		return !has_overflow;
	}
}
