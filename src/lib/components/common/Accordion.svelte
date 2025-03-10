<script>
	import { CaretDown } from '$lib/assets/icons/icons';
	// IMPORTS
	import { slide } from 'svelte/transition';

	// PROPS
	/** @type {{accordionSection?: string, accordionText?: string, isOpened?: boolean}} */
	let { accordionSection = '', accordionText = '', isOpened = $bindable(false) } = $props();

	function handleOpen() {
		isOpened = !isOpened;
	}
</script>

<div class="accordion">
	<button class="accordion__btn" onclick={handleOpen} onkeydown={handleOpen} type="button">
		<p class="accordion__section text-small" class:accordion--active={isOpened}>
			{accordionSection}
		</p>
		<div class="icon caret" class:caret-active={isOpened}>
			<CaretDown height="16" width="16" />
		</div>
	</button>

	{#if isOpened}
		<div
			class="accordion__text text-small"
			in:slide={{ duration: 300 }}
			out:slide={{ duration: 300 }}>
			{accordionText}
		</div>
	{/if}
</div>

<style lang="postcss">
	.accordion {
		border: 1px solid var(--color-border);
		box-shadow: var(--boxShadow);
		max-width: var(--text-width);

		background: var(--color-bg-gradient-subtle);

		position: relative;
		border-radius: var(--border-radius-light);
		border: 1px solid var(--color-border);
	}
	.accordion__section {
		text-align: left;
		text-wrap: balance;
	}

	.accordion--active {
		color: var(--color-primary-active);
		font-weight: 600;
	}

	.caret {
		transition: var(--transition);
	}

	.caret-active {
		width: fit-content;
		height: fit-content;
		transform: rotate(180deg);
	}

	.accordion__btn {
		display: flex;
		justify-content: space-between;
		width: 100%;

		cursor: pointer;
		padding: var(--space-xs) var(--space-small);
		transition: var(--transition);

		align-items: center;
		flex-direction: row;
		/* border: 1px solid var(--color-border); */

		&:hover {
			background-color: var(--color-bg-elevated);
		}
	}

	.accordion__text {
		color: var(--color-text);
		padding: var(--space-xs) var(--space-small);
	}
</style>
