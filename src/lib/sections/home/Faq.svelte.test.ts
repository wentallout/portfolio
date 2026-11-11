import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { FAQ_LIST } from '#lib/constants/faq.js';
import Faq from './Faq.svelte';

const [first, second] = FAQ_LIST;
const trigger = (question: string) => page.getByRole('button', { name: question });

describe('Faq section', () => {
	describe('Initial Rendering', () => {
		it('renders every question from the FAQ list', async () => {
			await render(Faq);

			for (const item of FAQ_LIST) {
				await expect.element(trigger(item.question)).toBeInTheDocument();
			}
		});

		it('keeps every answer in the DOM for crawlers', async () => {
			await render(Faq);

			for (const item of FAQ_LIST) {
				await expect.element(page.getByText(item.answer)).toBeInTheDocument();
			}
		});

		it('starts every panel collapsed', async () => {
			await render(Faq);

			for (const item of FAQ_LIST) {
				await expect.element(trigger(item.question)).toHaveAttribute('aria-expanded', 'false');
			}
		});

		it('renders a single section heading', async () => {
			await render(Faq);

			await expect.element(page.getByRole('heading', { level: 2, name: /FAQ/i })).toBeInTheDocument();
		});
	});

	describe('User Interactions', () => {
		it('expands only the answer that was clicked', async () => {
			await render(Faq);

			await trigger(first.question).click();

			await expect.element(trigger(first.question)).toHaveAttribute('aria-expanded', 'true');
			await expect.element(trigger(second.question)).toHaveAttribute('aria-expanded', 'false');
		});

		it('lets the reader close the answer again', async () => {
			await render(Faq);

			await trigger(first.question).click();
			await trigger(first.question).click();

			await expect.element(trigger(first.question)).toHaveAttribute('aria-expanded', 'false');
		});
	});
});
