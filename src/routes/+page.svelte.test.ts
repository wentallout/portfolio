import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('renders main content with heading', async () => {
		await render(Page);
		const heading = page.getByRole('heading').first();
		await expect.element(heading).toBeInTheDocument();
	});
});
