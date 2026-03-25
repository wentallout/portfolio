<script>
	import { CaretDown } from '$lib/assets/icons/icons';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { haptic } from '$lib/actions/haptics';

	/** @type {{accordionSection?: string, accordionText?: string, isOpened?: boolean}} */
	let { accordionSection = '', accordionText = '', isOpened = $bindable(false) } = $props();

	function handleToggle() {
		isOpened = !isOpened;
	}
</script>

<div class="accordion">
	<button 
		class="accordion__btn" 
		onclick={handleToggle} 
		use:haptic={'selection'}
		type="button"
		aria-expanded={isOpened}
	>
		<p class="accordion__section text-small" class:accordion--active={isOpened}>
			{accordionSection}
		</p>
		<div class="caret" class:caret-active={isOpened}>
			<CaretDown height="16" width="16" />
		</div>
	</button>

	{#if isOpened}
		<div
			class="accordion__text text-small"
			transition:slide={{ duration: 300, easing: quintOut }}>
			{accordionText}
		</div>
	{/if}
</div>

<style lang="postcss">
	.accordion {
		--ease-out-custom: cubic-bezier(0.23, 1, 0.32, 1);
		box-shadow: var(--boxShadow);
		max-width: var(--text-width);
		background: var(--color-bg-gradient-subtle);
		position: relative;
		border-radius: var(--border-radius-light);
		overflow: hidden;
		transition: background-color 200ms var(--ease-out-custom);
	}

	.accordion__section {
		text-align: left;
		text-wrap: balance;
		transition: color 200ms var(--ease-out-custom), font-weight 200ms var(--ease-out-custom);
	}

	.accordion--active {
		color: var(--color-primary-active);
		font-weight: 600;
	}

	.caret {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 300ms var(--ease-out-custom);
		color: var(--color-text-secondary);
	}

	.caret-active {
		transform: rotate(180deg);
		color: var(--color-primary-active);
	}

	.accordion__btn {
		display: flex;
		justify-content: space-between;
		width: 100%;
		cursor: pointer;
		padding: var(--space-s);
		background: none;
		border: none;
		align-items: center;
		flex-direction: row;
		transition: 
			background-color 200ms var(--ease-out-custom),
			transform 160ms var(--ease-out-custom);
		
		&:hover {
			background-color: var(--color-bg-elevated);
		}

		&:active {
			transform: scale(0.99);
		}
	}

	.accordion__text {
		color: var(--color-text);
		padding: var(--space-s);
		line-height: 1.6;
		border-top: 1px solid rgba(var(--color-primary-rgb), 0.1);
	}
</style>
