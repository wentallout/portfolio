<script>
	export let label = '';
	export let type = 'text';
	export let placeholder = '';
	export let value = '';

	export let name = '';

	export let autoSuggestList = [];

	export let list = '';

	$: autoSuggestList;
</script>

<div class="input-container">
	{#if label != ''}
		<label for={label} class="label small-text">{label}</label>
	{/if}
	<input
		list={list || null}
		{placeholder}
		class="input small-text"
		{type}
		{name}
		id={label}
		required
		on:input
		{value} />

	{#if list}
		<datalist id={list}>
			{#each autoSuggestList as item}
				<option>{item}</option>
			{/each}
		</datalist>
	{/if}
</div>

<style>
	.input-container {
		display: flex;
		width: 100%;
		flex-direction: column;
	}

	.label {
		font-weight: 500;
		margin-bottom: var(--space-3xs);
	}

	datalist option {
		cursor: pointer;
	}

	datalist {
		background-color: var(--colorTextQuaternary) !important;
	}

	.input {
		border: 1px solid var(--colorBorder);

		background-color: transparent;

		/* FONT */
		font-family: inherit;
		color: var(--colorText) !important;
		/* --- */

		/* SPACING */
		padding: var(--space-xs);
		margin-bottom: var(--space-s);
		/* --- */

		width: 100%;
		height: 3.5rem;

		/* OTHER */
		transition: var(--transition);
	}

	.input:focus-visible {
		outline: 1px solid var(--colorPrimary);
		box-shadow: 0px 0px 4px var(--colorPrimary);
	}
</style>
