import { describe, expect, it } from 'vitest';
import { serializeSchema } from './seo.js';

describe('serializeSchema', () => {
	describe('Markup', () => {
		it('wraps the payload in an ld+json script tag', () => {
			const html = serializeSchema({ '@context': 'https://schema.org', '@type': 'Thing', name: 'Khoa' });

			expect(html.startsWith('<script type="application/ld+json">')).toBe(true);
			expect(html.endsWith('</script>')).toBe(true);
		});

		it('serializes the object as parseable JSON', () => {
			const thing = { '@context': 'https://schema.org', '@type': 'Thing', name: 'Khoa' } as const;

			const inner = serializeSchema(thing).replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');

			expect(JSON.parse(inner)).toEqual(thing);
		});
	});

	describe('Edge Cases', () => {
		it('escapes closing script tags inside strings', () => {
			const html = serializeSchema({ '@type': 'Thing', name: '</script><script>alert(1)</script>' });

			// The serializer must not emit a raw closing tag early, otherwise the
			// payload can break out of the script element.
			expect(html.slice(0, -'</script>'.length)).not.toContain('</script>');
		});
	});
});
