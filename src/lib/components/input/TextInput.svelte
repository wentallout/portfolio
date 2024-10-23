<script>
	
	/** @type {{label: any, type?: string, placeholder?: string, value?: string, name?: string, autoSuggestList?: any, list?: string, icon?: import('svelte').Snippet}} */
	let {
		label,
		type = 'text',
		placeholder = '',
		inputValue = '',
		name = '',
		autoSuggestList = [],
		list = '',
		icon,
		handleOnInput
	} = $props();
	

	// $effect(() => {
	// 	autoSuggestList;
	// });
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
		{placeholder}
		required
		{type}
		value={inputValue}
		oninput={handleOnInput} />

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
