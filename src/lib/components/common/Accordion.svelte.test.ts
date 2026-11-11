import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Accordion from './Accordion.svelte';

const props = {
	accordionSection: 'Why does UI/UX matter so much for my website?',
	accordionText: 'Design is how your visitors experience your brand and make decisions.'
};

const trigger = () => page.getByRole('button', { name: props.accordionSection });

describe('Accordion', () => {
	describe('Initial Rendering', () => {
		it('renders the section title as a button', async () => {
			await render(Accordion, { props });

			await expect.element(trigger()).toBeInTheDocument();
		});

		it('renders the answer copy into the DOM by default', async () => {
			await render(Accordion, { props });

			await expect.element(page.getByText(props.accordionText)).toBeInTheDocument();
		});

		it('starts collapsed', async () => {
			await render(Accordion, { props });

			await expect.element(trigger()).toHaveAttribute('aria-expanded', 'false');
		});

		it('starts open when isOpened is true', async () => {
			await render(Accordion, { props: { ...props, isOpened: true } });

			await expect.element(trigger()).toHaveAttribute('aria-expanded', 'true');
		});
	});

	describe('User Interactions', () => {
		it('marks itself expanded on click', async () => {
			await render(Accordion, { props });

			await trigger().click();

			await expect.element(trigger()).toHaveAttribute('aria-expanded', 'true');
		});

		it('collapses again on a second click', async () => {
			await render(Accordion, { props });

			await trigger().click();
			await trigger().click();

			await expect.element(trigger()).toHaveAttribute('aria-expanded', 'false');
		});
	});

	describe('Accessibility', () => {
		it('hides the collapsed panel from assistive tech', async () => {
			await render(Accordion, { props });

			const panel = page.getByText(props.accordionText).element().closest('[aria-hidden]');
			expect(panel).toBeTruthy();
			expect(panel?.getAttribute('aria-hidden')).toBe('true');
		});

		it('exposes the expanded panel to assistive tech', async () => {
			await render(Accordion, { props });

			await trigger().click();

			const panel = page.getByText(props.accordionText).element().closest('[aria-hidden]');
			expect(panel?.getAttribute('aria-hidden')).toBe('false');
		});
	});

	describe('Edge Cases', () => {
		it('renders without crashing when both texts are empty', async () => {
			await render(Accordion, { props: {} });

			await expect.element(page.getByRole('button')).toBeInTheDocument();
		});
	});
});
