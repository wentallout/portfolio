import { expect, test } from '@playwright/test';
import { FaqSection } from './models/faq-section';

const QUESTIONS = [
	'Why does UI/UX matter so much for my website?',
	'What is your process for a new project?',
	'How do we measure the success of our project?',
	'How do you handle design feedback?'
];

test.describe('Home page FAQ accordion', () => {
	test.describe('Initial Rendering', () => {
		test('renders every question', async ({ page }) => {
			const faq = new FaqSection(page);
			await faq.goto_faq();

			for (const question of QUESTIONS) {
				await expect(faq.item(question)).toBeVisible();
			}
		});

		test('keeps every answer collapsed so the panel adds no height', async ({ page }) => {
			const faq = new FaqSection(page);
			await faq.goto_faq();

			for (const question of QUESTIONS) {
				await faq.expect_collapsed(question);
			}
		});
	});

	test.describe('User Interactions', () => {
		test('expands the answer that was clicked', async ({ page }) => {
			const faq = new FaqSection(page);
			await faq.goto_faq();

			await faq.expand(QUESTIONS[0]);

			await faq.expect_expanded(QUESTIONS[0]);
		});

		test('closes the answer again on a second click', async ({ page }) => {
			const faq = new FaqSection(page);
			await faq.goto_faq();

			await faq.expand(QUESTIONS[1]);
			await faq.collapse(QUESTIONS[1]);

			await faq.expect_collapsed(QUESTIONS[1]);
		});
	});

	test.describe('Edge Cases', () => {
		test('supports keyboard toggling', async ({ page }) => {
			const faq = new FaqSection(page);
			await faq.goto_faq();

			await faq.item(QUESTIONS[2]).focus();
			await page.keyboard.press('Enter');

			await expect(faq.item(QUESTIONS[2])).toHaveAttribute('aria-expanded', 'true');
		});
	});
});
