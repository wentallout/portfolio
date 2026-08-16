import type { Thing, WithContext } from 'schema-dts';

export function serializeSchema(thing: Thing | WithContext<Thing>) {
	return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}
