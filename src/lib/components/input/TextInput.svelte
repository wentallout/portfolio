<script>
	export let label;
	export let type = 'text';
	export let placeholder = '';
	export let value = '';

	export let name = '';

	export let autoSuggestList = [];

	export let list = '';

	$: autoSuggestList;
</script>

{#if label}
	<label for={label} class="label text-small">{label}</label>
{/if}
<div class="input-container text-small">
	{#if $$slots.icon}
		<div class="input__icon">
			<slot name="icon" />
		</div>
	{/if}

	<input
		list={list || null}
		{placeholder}
		class="input"
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
		flex-direction: row;
		align-items: center;
		border: 1px solid var(--colorBorder);
		margin-bottom: var(--spaceS);
		border-radius: var(--borderRadiusSM);
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
		background-color: transparent;
		/* FONT */
		font-family: inherit;
		color: var(--colorText) !important;
		/* --- */
		/* SPACING */
		padding: var(--spaceXS);
		/* --- */
		width: 100%;
		height: 3.5rem;
		/* OTHER */
		transition: var(--transition);
		outline: 0;
	}

	.input-container:has(.input:focus-visible) {
		outline: 1px solid var(--colorPrimaryActive);
		box-shadow: 0px 0px 4px var(--colorPrimaryActive);
		color: var(--colorPrimaryActive);
	}

	.input__icon {
		padding-left: var(--spaceXS);
	}
</style>
