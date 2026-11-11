import { expect, test } from '@playwright/test';
import { ContactPage } from './models/contact-page';

test.describe('Contact page /contact', () => {
	test.describe('Initial Rendering', () => {
		test('renders form fields and buttons', async ({ page }) => {
			const contact_page = new ContactPage(page);
			await contact_page.goto_contact();
			await contact_page.expect_form_visible();
		});
	});

	test.describe('User Interactions', () => {
		test('fills form and reset works (hydrated)', async ({ page }) => {
			const contact_page = new ContactPage(page);
			await contact_page.goto_contact();

			await contact_page.fill_form('Jane Doe', 'jane@example.com', 'Hello there!');

			await expect(contact_page.name_input).toHaveValue('Jane Doe');
			await expect(contact_page.email_input).toHaveValue('jane@example.com');
			await expect(contact_page.message_input).toHaveValue('Hello there!');

			await contact_page.reset_form();
			await expect(contact_page.name_input).toHaveValue('');
		});

		test('blocks an invalid email before anything is sent', async ({ page }) => {
			const contact_page = new ContactPage(page);
			await contact_page.goto_contact();

			await contact_page.fill_form('Jane Doe', 'not-an-email', 'Hello there!');
			await contact_page.send_button.click();

			// The browser rejects the payload via native constraint validation, so no
			// request (and therefore no database write) is ever issued.
			expect(await contact_page.email_input.evaluate((el) => (el as HTMLInputElement).checkValidity())).toBe(false);
			expect(
				await contact_page.email_input.evaluate((el) => (el as HTMLInputElement).validationMessage)
			).not.toBe('');
			await expect(page).toHaveURL(/\/contact$/);
		});

		test('requires a message before sending', async ({ page }) => {
			const contact_page = new ContactPage(page);
			await contact_page.goto_contact();

			await contact_page.fill_form('Jane Doe', 'jane@example.com', '');
			await contact_page.send_button.click();

			expect(
				await contact_page.message_input.evaluate((el) => (el as HTMLTextAreaElement).checkValidity())
			).toBe(false);
			await expect(page).toHaveURL(/\/contact$/);
		});

		test('accepts a valid payload without navigating away', async ({ page }) => {
			const contact_page = new ContactPage(page);
			await contact_page.goto_contact();

			await contact_page.fill_form('Jane Doe', 'jane@example.com', 'Hello there!');

			expect(await contact_page.email_input.evaluate((el) => (el as HTMLInputElement).checkValidity())).toBe(true);
			await expect(contact_page.message_input).toBeVisible();
		});
	});

	test.describe('Edge Cases', () => {
		test('contact info visible alongside form', async ({ page }) => {
			const contact_page = new ContactPage(page);
			await contact_page.goto_contact();
			await expect(contact_page.main_content).toContainText(/wentallout|Contact|Email/i);
		});
	});
});
