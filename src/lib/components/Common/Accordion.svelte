<script>
	// IMPORTS
	import CaretDown from '~icons/ph/caret-down';
	import { slide } from 'svelte/transition';

	// PROPS
	export let accordionSection = '';
	export let accordionText = '';
	export let isOpened = false;

	function handleOpen() {
		isOpened = !isOpened;
	}
</script>

<div class="accordion">
	<button class="accordion__btn" type="button" on:click={handleOpen} on:keydown={handleOpen}>
		<div class="text-small accordion__section">{accordionSection}</div>
		<div class="icon caret" class:caret-active={isOpened}>
			<CaretDown width="16" height="16" />
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
	.accordion__section {
		text-align: left;
	}

	.accordion {
		border: 1px solid var(--colorBorder);
		border-radius: var(--borderRadius);
		box-shadow: var(--boxShadow);
	}

	/* .accordion__btn:has(> .caret-active) {
		font-weight: 600;
		border-bottom: 1px solid var(--colorBorder);
	} */

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
		border-radius: var(--borderRadius);
		&:hover {
			background-color: var(--colorBgElevated);
		}
	}

	.accordion__text {
		color: var(--colorText);
		max-width: var(--text-width);
		padding: var(--spaceXS) var(--spaceS);
	}
</style>
