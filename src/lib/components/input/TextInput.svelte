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
		<label for={label} class="label text-small">{label}</label>
	{/if}
	<input
		list={list || null}
		{placeholder}
		class="input text-small"
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
		font-weight: var(--fontWeightMid);
		margin-bottom: var(--space3XS);
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
		padding: var(--spaceXS);
		margin-bottom: var(--spaceS);
		/* --- */

		width: 100%;
		height: 3.5rem;

		/* OTHER */
		transition: var(--transition);

		border-radius: var(--borderRadiusSM);
	}

	.input:focus-visible {
		outline: 1px solid var(--colorPrimary);
		box-shadow: 0px 0px 4px var(--colorPrimary);
	}
</style>
