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

		test.skip('submits via real FormData to server (client-server alignment)', async () => {
			// TODO: use real FormData + Request like sveltest best practices, mock only external service
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
