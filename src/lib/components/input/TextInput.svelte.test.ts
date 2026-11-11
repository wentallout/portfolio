import { page } from 'vitest/browser';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import TextInput from './TextInput.svelte';

describe('TextInput', () => {
	describe('Initial Rendering', () => {
		it('associates the label with the input', async () => {
			await render(TextInput, { props: { label: 'Email', type: 'email' } });

			const input = page.getByRole('textbox', { name: 'Email' });
			await expect.element(input).toBeInTheDocument();
			await expect.element(input).toHaveAttribute('type', 'email');
		});

		it('shows the placeholder', async () => {
			await render(TextInput, { props: { placeholder: 'you@example.com' } });

			await expect.element(page.getByPlaceholder('you@example.com')).toBeInTheDocument();
		});

		it('renders the current value', async () => {
			await render(TextInput, { props: { inputValue: 'Khoa' } });

			await expect.element(page.getByRole('textbox')).toHaveValue('Khoa');
		});
	});

	describe('User Interactions', () => {
		it('calls the input handler as the user types', async () => {
			const handleOnInput = vi.fn();
			await render(TextInput, { props: { handleOnInput } });

			await page.getByRole('textbox').fill('hello');

			expect(handleOnInput).toHaveBeenCalled();
		});

		it('hides the clear button while the field is empty', async () => {
			await render(TextInput, { props: { handleClear: vi.fn() } });

			expect(page.getByRole('button', { name: 'Clear input' }).elements()).toHaveLength(0);
		});

		it('invokes the clear handler when the clear button is used', async () => {
			const handleClear = vi.fn();
			await render(TextInput, { props: { handleClear, inputValue: 'something' } });

			await page.getByRole('button', { name: 'Clear input' }).click();

			expect(handleClear).toHaveBeenCalledTimes(1);
		});
	});

	describe('Edge Cases', () => {
		it('renders no clear button when no handler is supplied', async () => {
			await render(TextInput, { props: { inputValue: 'something' } });

			expect(page.getByRole('button', { name: 'Clear input' }).elements()).toHaveLength(0);
		});
	});
});
