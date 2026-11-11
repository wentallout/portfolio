import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import SectionTitle from './SectionTitle.svelte';

describe('SectionTitle SSR', () => {
	it('renders without throwing', () => {
		expect(() => render(SectionTitle, { props: { sectionTitle: 'Services' } })).not.toThrow();
	});

	it('renders an h2 by default', () => {
		const { body } = render(SectionTitle, { props: { sectionTitle: 'Services' } });

		expect(body).toContain('<h2');
		expect(body).toContain('Services');
	});

	it('renders an h1 when the page promotes it', () => {
		const { body } = render(SectionTitle, { props: { as: 'h1', sectionTitle: 'Projects' } });

		expect(body).toContain('<h1');
		expect(body).not.toContain('<h2');
	});

	it('renders the description paragraph', () => {
		const { body } = render(SectionTitle, {
			props: { sectionDesc: 'Everything I can help with.', sectionTitle: 'Services' }
		});

		expect(body).toContain('Everything I can help with.');
	});

	it('omits the description when empty', () => {
		const { body } = render(SectionTitle, { props: { sectionTitle: 'Services' } });

		expect(body).not.toContain('<p');
	});
});
