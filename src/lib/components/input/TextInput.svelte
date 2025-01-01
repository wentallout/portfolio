<script>
	let {
		autoSuggestList = [],
		handleOnInput,
		icon,
		inputValue = '',
		label,
		list = '',
		name = '',
		placeholder = '',
		type = 'text'
	} = $props();
</script>

{#if label}
	<label class="label text-small" for={label}>{label}</label>
{/if}
<div class="input-container text-small">
	{#if icon}
		<div class="input__icon">
			{@render icon?.()}
		</div>
	{/if}

	<input
		id={label}
		{name}
		class="input"
		list={list || null}
		oninput={handleOnInput}
		{placeholder}
		required
		{type}
		value={inputValue} />

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
		background-color: var(--colorBgLayout);
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
