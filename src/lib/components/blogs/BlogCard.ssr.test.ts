import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import BlogCard from './BlogCard.svelte';

const props = {
	blogLink: '/blogs/css-reset',
	blogTags: ['css', 'frontend'],
	blogTitle: 'A modern CSS reset'
};

describe('BlogCard SSR', () => {
	it('renders the title and link for crawlers', () => {
		const { body } = render(BlogCard, { props });

		expect(body).toContain('A modern CSS reset');
		expect(body).toContain('href="/blogs/css-reset"');
	});

	it('renders the tags when enabled', () => {
		const { body } = render(BlogCard, { props });

		expect(body).toContain('css');
		expect(body).toContain('frontend');
	});

	it('omits the tags when hasTags is false', () => {
		const { body } = render(BlogCard, { props: { ...props, hasTags: false } });

		expect(body).not.toContain('frontend');
	});

	it('renders without tags at all', () => {
		const { body } = render(BlogCard, { props: { blogLink: '/blogs/x', blogTitle: 'No tags' } });

		expect(body).toContain('No tags');
	});
});
