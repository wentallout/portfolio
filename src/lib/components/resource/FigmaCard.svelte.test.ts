import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import FigmaCard from './FigmaCard.svelte';

describe('FigmaCard', () => {
	describe('Initial Rendering', () => {
		it('renders the resource title and author', async () => {
			await render(FigmaCard, {
				props: {
					desc: 'Apple',
					href: 'https://www.figma.com/community/file/1',
					thumbnailUrl: '/thumb.png',
					title: 'Apple Design Resources'
				}
			});

			await expect.element(page.getByRole('img', { name: 'Apple Design Resources' })).toBeInTheDocument();
			await expect.element(page.getByText('Apple', { exact: true })).toBeInTheDocument();
		});

		it('links out safely in a new tab', async () => {
			await render(FigmaCard, {
				props: { href: 'https://example.com/resource', title: 'A resource' }
			});

			const link = page.getByRole('link', { name: /A resource/ });
			await expect.element(link).toHaveAttribute('target', '_blank');
			await expect.element(link).toHaveAttribute('rel', 'external nofollow noopener noreferrer');
		});
	});

	describe('Thumbnail resolution', () => {
		it('derives a screenshot thumbnail for CodePen links', async () => {
			await render(FigmaCard, {
				props: { href: 'https://codepen.io/x/pen/abc', thumbnailUrl: '/ignored.png' }
			});

			const img = page.getByRole('img').element() as HTMLImageElement;
			expect(img.getAttribute('src')).toBe('https://shots.codepen.io/x/pen/abc-800.jpg');
		});

		it('uses the provided thumbnail for other hosts', async () => {
			await render(FigmaCard, {
				props: { href: 'https://www.figma.com/community/file/1', thumbnailUrl: '/thumb.png' }
			});

			const img = page.getByRole('img').element() as HTMLImageElement;
			expect(img.getAttribute('src')).toBe('/thumb.png');
		});
	});

	describe('Edge Cases', () => {
		it('applies default copy when nothing is passed', async () => {
			await render(FigmaCard, { props: { href: 'https://example.com/resource' } });

			await expect.element(page.getByRole('heading', { name: 'insert title' })).toBeInTheDocument();
		});
	});
});
