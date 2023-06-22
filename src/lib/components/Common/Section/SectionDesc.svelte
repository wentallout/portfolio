<script>
	export let text = '';
</script>

{#if text !== ''}
	<p class="section-description small-text">
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
