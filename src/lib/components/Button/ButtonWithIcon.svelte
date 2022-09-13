<script>
	export let label = 'exampleLabel';
	export let labelColor = '';
	export let backgroundColor = 'transparent';

	export let border = '';
</script>

<button
	style="background-color: {backgroundColor}; border: {border}; color: {labelColor}"
	class="btn"
	type="submit">
	<slot />
	{label}
</button>

<style>
	.btn {
		border: 1px solid transparent;
		margin-right: var(--space-xs);
	}

	.btn:hover {
		filter: brightness(70%);
	}
</style>
