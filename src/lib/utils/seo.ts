import type { Thing, WithContext } from 'schema-dts';

/**
 * Serialize structured data for embedding with `{@html}`.
 *
 * `<` is escaped as `\u003c` so a payload containing `</script>` cannot close
 * the surrounding script element early (JSON stays valid and equivalent).
 */
export function serializeSchema(thing: Thing | WithContext<Thing>) {
	const json = JSON.stringify(thing, null, 2).replace(/</g, '\\u003c');
	return `<script type="application/ld+json">${json}</script>`;
}
