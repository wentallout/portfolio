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

<div class="accordion custom-border">
	<button class="accordion__btn" type="button" on:click={handleOpen} on:keydown={handleOpen}>
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

		background: var(--colorGradientBg);
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
		border-radius: var(--borderRadius);
		&:hover {
			background-color: var(--colorBgElevated);
		}
	}

	.accordion__text {
		color: var(--colorText);
		padding: var(--spaceXS);
	}
</style>
