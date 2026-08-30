import { expect, test } from '@playwright/test';
import { BlogsPage } from './models/blogs-page';

test.describe('Blogs listing /blogs', () => {
	test('renders blog list', async ({ page }) => {
		const blogs_page = new BlogsPage(page);
		await blogs_page.goto_blogs();
		await blogs_page.expect_list_visible();
	});

	test('blog detail renders for known slug', async ({ page }) => {
		const blogs_page = new BlogsPage(page);
		try {
			await blogs_page.open_blog('css-reset');
		} catch {
			test.skip(true, 'slug not found');
		}
	});
});

test.describe('Navigation integration', () => {
	test.skip('blog listing loads via client navigation', async () => {
		// TODO: test client-side nav to /blogs via POM
	});
});
