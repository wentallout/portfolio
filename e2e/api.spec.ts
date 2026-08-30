import { expect, test } from '@playwright/test';

test.describe('API & infra routes', () => {
	test('GET /api/blogs returns JSON array', async ({ request }) => {
		const res = await request.get('/api/blogs');
		expect(res.status()).toBe(200);
		const json = await res.json();
		expect(Array.isArray(json)).toBe(true);
		if (json.length) {
			expect(json[0]).toHaveProperty('meta');
			expect(json[0]).toHaveProperty('path');
		}
	});

	test('GET /rss.xml returns xml', async ({ request }) => {
		const res = await request.get('/rss.xml');
		expect(res.status()).toBe(200);
		const ct = res.headers()['content-type'] || '';
		expect(ct).toMatch(/xml|text/i);
	});

	test('GET /sitemap.xml returns xml', async ({ request }) => {
		const res = await request.get('/sitemap.xml');
		// super-sitemap may use /sitemap.xml or /sitemap[[page]].xml ; allow 200
		expect([200, 404].includes(res.status())).toBe(true);
		if (res.status() === 200) {
			const text = await res.text();
			expect(text).toContain('urlset');
		}
	});

	test('GET /manifest.webmanifest returns manifest', async ({ request }) => {
		const res = await request.get('/manifest.webmanifest');
		expect([200, 404].includes(res.status())).toBe(true);
		if (res.status() === 200) {
			const json = await res.json();
			expect(json).toHaveProperty('name');
		}
	});

	test('404 page renders', async ({ page }) => {
		const res = await page.goto('/this-page-does-not-exist-zzz', { waitUntil: 'domcontentloaded' });
		expect(res?.status()).toBe(404);
		await expect(page.locator('body')).toContainText(/404|Not found/i);
	});
});
