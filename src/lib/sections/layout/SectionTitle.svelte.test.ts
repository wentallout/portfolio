import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import SectionTitle from './SectionTitle.svelte';

describe('SectionTitle', () => {
	describe('Initial Rendering', () => {
		it('renders the title text', async () => {
			await render(SectionTitle, { props: { sectionTitle: 'Services' } });

			await expect.element(page.getByRole('heading', { name: /Services/i })).toBeInTheDocument();
		});

		it('renders an h2 by default so section titles stay below the page h1', async () => {
			await render(SectionTitle, { props: { sectionTitle: 'Thoughts' } });

			const heading = page.getByRole('heading', { name: /Thoughts/i }).element();
			expect(heading.tagName).toBe('H2');
		});
	});

	describe('Heading levels', () => {
		it('promotes the title to an h1 when asked', async () => {
			await render(SectionTitle, { props: { as: 'h1', sectionTitle: 'Projects' } });

			const heading = page.getByRole('heading', { level: 1, name: /Projects/i }).element();
			expect(heading.tagName).toBe('H1');
		});

		it('does not render an h1 role when left at the default level', async () => {
			await render(SectionTitle, { props: { sectionTitle: 'FAQ' } });

			expect(page.getByRole('heading', { level: 1 }).elements()).toHaveLength(0);
		});
	});

	describe('Optional description', () => {
		it('renders the description when provided', async () => {
			await render(SectionTitle, {
				props: { sectionDesc: 'Everything I can help with.', sectionTitle: 'Services' }
			});

			await expect
				.element(page.getByText('Everything I can help with.'))
				.toBeInTheDocument();
		});

		it('omits the description when empty', async () => {
			await render(SectionTitle, { props: { sectionTitle: 'Services' } });

			expect(page.getByRole('paragraph').elements()).toHaveLength(0);
		});
	});

	describe('Edge Cases', () => {
		it('renders without a title', async () => {
			await render(SectionTitle, { props: {} });

			await expect.element(page.getByRole('heading', { level: 2 })).toBeInTheDocument();
		});
	});
});
