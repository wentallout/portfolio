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

<div class="accordion custom-border">
	<button class="accordion__btn" type="button" onclick={handleOpen} onkeydown={handleOpen}>
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
		border: 1px solid var(--colorBorder);
		box-shadow: var(--boxShadow);
		max-width: var(--text-width);

		background: var(--colorBgGradientSubtle);
	}
	.accordion__section {
		text-align: left;
		text-wrap: balance;
	}

	.accordion--active {
		color: var(--colorPrimaryActive);
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
		padding: var(--spaceXS) var(--spaceS);
		transition: var(--transition);

		align-items: center;
		flex-direction: row;
		/* border: 1px solid var(--colorBorder); */

		&:hover {
			background-color: var(--colorBgElevated);
		}
	}

	.accordion__text {
		color: var(--colorText);
		padding: var(--spaceXS) var(--spaceS);
	}
</style>
