<script>
	import { textReveal } from '$lib/actions/gsapAnimation';

	/** @type {{text?: string, unsplitAfter?: number}} */
	let { text = '', unsplitAfter = 0 } = $props();
</script>

{#if text !== ''}
	<p class="section-description text-small" use:textReveal={{ unsplitAfter }}>
		{text}
	</p>
{/if}

<style>
	.section-description {
		max-width: var(--text-width);
		text-align: left;
		color: var(--color-text-secondary);
	}
</style>
