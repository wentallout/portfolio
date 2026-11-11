import { expect, test } from '@playwright/test';
import { BlogsPage } from './models/blogs-page';

test.describe('Blogs listing /blogs', () => {
	test('renders blog list', async ({ page }) => {
		const blogs_page = new BlogsPage(page);
		await blogs_page.goto_blogs();
		await blogs_page.expect_list_visible();
	});

	test('opens the first listed post', async ({ page }) => {
		const blogs_page = new BlogsPage(page);
		await blogs_page.goto_blogs();

		const href = await page
			.locator('main a[href^="/blogs/"]')
			.filter({ hasNotText: /#/ })
			.evaluateAll((links) =>
				links
					.map((link) => link.getAttribute('href') ?? '')
					.find(
						(h) =>
							h &&
							!h.startsWith('/blogs/tags') &&
							!h.startsWith('/blogs/category') &&
							!h.startsWith('/blogs/resource')
					)
			);
		expect(href).toBeTruthy();

		await blogs_page.open_blog(href!.replace('/blogs/', ''));
	});

	test('filters the list by search term', async ({ page }) => {
		const blogs_page = new BlogsPage(page);
		await blogs_page.goto_blogs();

		const cards_before = await page.locator('main a[href^="/blogs/"]').count();
		await page.getByRole('textbox').first().fill('zzzz-no-such-post');
		await page.keyboard.press('Enter');

		await expect(page.getByText(/No matching articles found/i)).toBeVisible();
		expect(cards_before).toBeGreaterThan(0);
	});
});

test.describe('Navigation integration', () => {
	test('blog listing loads via client navigation from the header', async ({ page }) => {
		const blogs_page = new BlogsPage(page);
		await blogs_page.goto('/');

		await blogs_page.navigate_via_header(/Blogs/i, /\/blogs/);

		await blogs_page.expect_list_visible();
	});
});
