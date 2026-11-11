import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import BlogCard from './BlogCard.svelte';

const props = {
	blogLink: '/blogs/css-reset',
	blogTags: ['css', 'frontend'],
	blogTitle: 'A modern CSS reset'
};

describe('BlogCard', () => {
	describe('Initial Rendering', () => {
		it('renders the post title as a heading', async () => {
			await render(BlogCard, { props });

			await expect.element(page.getByRole('heading', { name: props.blogTitle })).toBeInTheDocument();
		});

		it('links to the post', async () => {
			await render(BlogCard, { props });

			const link = page.getByRole('link', { name: new RegExp(props.blogTitle) });
			await expect.element(link).toHaveAttribute('href', props.blogLink);
		});

		it('renders every tag', async () => {
			await render(BlogCard, { props });

			for (const tag of props.blogTags) {
				await expect.element(page.getByText(tag, { exact: true })).toBeInTheDocument();
			}
		});
	});

	describe('Options', () => {
		it('hides tags when hasTags is false', async () => {
			await render(BlogCard, { props: { ...props, hasTags: false } });

			expect(page.getByText('css', { exact: true }).elements()).toHaveLength(0);
		});

		it('renders with no tags at all', async () => {
			await render(BlogCard, { props: { blogLink: '/blogs/x', blogTitle: 'No tags here' } });

			await expect.element(page.getByRole('heading', { name: 'No tags here' })).toBeInTheDocument();
		});
	});

	describe('Edge Cases', () => {
		it('falls back to a placeholder title when none is given', async () => {
			await render(BlogCard, { props: {} });

			await expect.element(page.getByRole('heading', { name: 'blogTitle' })).toBeInTheDocument();
		});
	});
});
