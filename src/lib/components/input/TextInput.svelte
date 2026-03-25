<script>
	import { X } from '$lib/assets/icons/icons';

	let {
		autoSuggestList = [],
		handleOnInput,
		handleClear,
		icon,
		inputValue = '',
		label,
		list = '',
		name = '',
		onkeydown,
		placeholder = '',
		type = 'text',
		dropdown
	} = $props();
</script>

{#if label}
	<label class="label text-small" for={label}>{label}</label>
{/if}
<div class="input-wrapper">
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
			{onkeydown}
			{placeholder}
			required
			{type}
			value={inputValue} />

		{#if inputValue && handleClear}
			<button class="input__clear" onclick={handleClear} type="button" aria-label="Clear input">
				<X height="16" width="16" />
			</button>
		{/if}

		{#if list}
			<datalist id={list}>
				{#each autoSuggestList as item (item)}
					<option>{item}</option>
				{/each}
			</datalist>
		{/if}
	</div>

	{#if dropdown}
		<div class="input__dropdown">
			{@render dropdown()}
		</div>
	{/if}
</div>

<style>
	.input-wrapper {
		--ease-out-custom: cubic-bezier(0.23, 1, 0.32, 1);
		position: relative;
		width: 100%;
	}

	.input-container {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		border: 1px solid var(--color-border);
		margin-bottom: var(--space-s);
		border-radius: var(--border-radius-lighter);
		background-color: var(--color-bg-layout);
		transition:
			transform 200ms var(--ease-out-custom),
			border-color 200ms var(--ease-out-custom),
			box-shadow 200ms var(--ease-out-custom);
		transform-origin: center;
	}

	.label {
		font-weight: var(--fontWeightMid);
		margin-bottom: var(--space-3xs);
		display: block;
	}

	datalist option {
		cursor: pointer;
	}

	datalist {
		background-color: var(--color-text-quaternary) !important;
	}

	.input {
		font-family: inherit;
		color: var(--color-text) !important;
		padding: var(--space-xs);
		width: 100%;
		height: 3.5rem;
		outline: 0;
		background: transparent;
		border: none;
		font-size: var(--font-size-small);
	}

	.input-container:focus-within {
		border-color: var(--color-primary-active);
		box-shadow: 0px 0px 8px rgba(var(--color-primary-rgb), 0.2);
		transform: scale(1.01);
	}

	.input__icon {
		padding-left: var(--space-xs);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-secondary);
		transition: color 200ms var(--ease-out-custom);
	}

	.input-container:focus-within .input__icon {
		color: var(--color-primary-active);
	}

	.input__clear {
		padding-right: var(--space-xs);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-secondary);
		transition:
			color 160ms var(--ease-out-custom),
			transform 160ms var(--ease-out-custom),
			opacity 160ms var(--ease-out-custom);
		background: none;
		border: none;
		outline: none;
	}

	.input__clear:hover {
		color: var(--color-text);
		transform: scale(1.1);
	}

	.input__clear:active {
		transform: scale(0.9);
		opacity: 0.7;
	}

	.input__dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 100;
		margin-top: var(--space-3xs);
	}
</style>
