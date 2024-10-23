<script>
	/** @type {{text?: string}} */
	let { text = '' } = $props();
</script>

{#if text !== ''}
	<p class="section-description text-small">
		{text}
	</p>
{/if}

<style>
	.section-description {
		max-width: var(--text-width);
		text-align: left;
		color: var(--colorTextSecondary);
	}
</style>
