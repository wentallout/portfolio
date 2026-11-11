import { beforeEach, describe, expect, it, vi } from 'vitest';

type BlogRow = {
	cover_image_url: string | null;
	excerpt: string;
	published_at: string;
	seo_description: string | null;
	slug: string;
	status: string;
	tags: string[];
	title: string;
	updated_at: string;
};

const rows: BlogRow[] = [
	{
		cover_image_url: null,
		excerpt: 'A pragmatic reset.',
		published_at: '2026-01-01T00:00:00.000Z',
		seo_description: null,
		slug: 'css-reset',
		status: 'published',
		tags: ['css', 'frontend'],
		title: 'A modern CSS reset',
		updated_at: '2026-01-02T00:00:00.000Z'
	}
];

const sql = vi.fn(async () => rows);

// Only the external service is mocked; the request/response objects stay real.
vi.mock('@neondatabase/serverless', () => ({ neon: () => sql }));
vi.mock('$app/env/private', () => ({ DATABASE_URL: 'postgres://localhost/test' }));

const { GET } = await import('./+server');

const get = (query = '') => GET({ url: new URL(`http://localhost/api/blogs${query}`) } as never);

describe('GET /api/blogs', () => {
	beforeEach(() => {
		sql.mockClear();
		sql.mockImplementation(async () => rows);
	});

	describe('Response contract', () => {
		it('returns a JSON array of published posts', async () => {
			const response = await get();

			expect(response.status).toBe(200);
			expect(response.headers.get('content-type')).toContain('application/json');

			const body = await response.json();
			expect(Array.isArray(body)).toBe(true);
			expect(body).toHaveLength(1);
		});

		it('maps database rows onto the shape the blog UI expects', async () => {
			const [post] = await (await get()).json();

			expect(post).toMatchObject({
				meta: {
					coverImage: null,
					date: rows[0].published_at,
					description: rows[0].excerpt,
					title: rows[0].title
				},
				path: '/blogs/css-reset'
			});
		});

		it('keeps categories in sync with tags for backwards compatibility', async () => {
			const [post] = await (await get()).json();

			expect(post.meta.categories).toEqual(post.meta.tags);
		});

		it('prefers the SEO description over the excerpt', async () => {
			sql.mockImplementationOnce(async () => [{ ...rows[0], seo_description: 'SEO copy' }]);

			const [post] = await (await get()).json();

			expect(post.meta.description).toBe('SEO copy');
		});
	});

	describe('Query parameters', () => {
		it('accepts a tag filter', async () => {
			const response = await get('?tag=css');

			expect(response.status).toBe(200);
			expect(sql).toHaveBeenCalledTimes(1);
		});

		it('accepts a legacy category filter', async () => {
			const response = await get('?category=css');

			expect(response.status).toBe(200);
			expect(sql).toHaveBeenCalledTimes(1);
		});
	});

	describe('Edge Cases', () => {
		it('returns an empty array when nothing is published', async () => {
			sql.mockImplementationOnce(async () => []);

			const body = await (await get()).json();

			expect(body).toEqual([]);
		});

		it('reports a 500 with the error message when the database fails', async () => {
			sql.mockImplementationOnce(async () => {
				throw new Error('connection refused');
			});

			const response = await get();

			expect(response.status).toBe(500);
			const body = await response.json();
			expect(body.error).toContain('connection refused');
		});
	});
});
