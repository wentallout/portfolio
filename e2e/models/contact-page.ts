import { expect, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ContactPage extends BasePage {
	readonly name_input: ReturnType<Page['getByRole']>;
	readonly email_input: ReturnType<Page['getByRole']>;
	readonly message_input: ReturnType<Page['getByRole']>;
	readonly send_button: ReturnType<Page['getByRole']>;
	readonly reset_button: ReturnType<Page['getByRole']>;
	readonly hidden_form_input: ReturnType<Page['locator']>;

	constructor(page: Page) {
		super(page);
		this.name_input = page.getByRole('textbox', { name: 'Name' });
		this.email_input = page.getByRole('textbox', { name: 'Email' });
		this.message_input = page.getByRole('textbox', { name: 'Message' });
		this.send_button = page.getByRole('button', { name: 'Send message' });
		this.reset_button = page.getByRole('button', { name: 'Reset' });
		this.hidden_form_input = page.locator('input[name="form-name"][value="contact"]');
	}

	async goto_contact() {
		await this.goto('/contact');
	}

	async fill_form(name: string, email: string, message: string) {
		await this.name_input.fill(name);
		await this.email_input.fill(email);
		await this.message_input.fill(message);
	}

	async reset_form() {
		await this.reset_button.click();
	}

	async expect_form_visible() {
		await expect(this.name_input).toBeVisible();
		await expect(this.name_input).toHaveAttribute('placeholder', 'John Doe');
		await expect(this.email_input).toBeVisible();
		await expect(this.email_input).toHaveAttribute('type', 'email');
		await expect(this.message_input).toBeVisible();
		await expect(this.send_button).toBeVisible();
		await expect(this.reset_button).toBeVisible();
		await expect(this.hidden_form_input).toBeHidden();
	}
}
