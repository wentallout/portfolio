<script>
	// IMPORTS
	import CaretDown from '~icons/ph/caret-down';
	import { slide } from 'svelte/transition';

	// PROPS
	export let accordionSection = '';
	export let accordionText = '';
	export let isOpened = false;

	function handleOpenaccordion() {
		isOpened = !isOpened;
	}
</script>

<div class="accordion">
	<button
		class="accordion__section"
		type="button"
		on:click={handleOpenaccordion}
		on:keydown={handleOpenaccordion}>
		<div class="small-text">{accordionSection}</div>
		<div class="caret" class:caret-active={isOpened}>
			<CaretDown width="16" height="16" />
		</div>
	</button>
	{#if isOpened}
		<div
			in:slide={{ duration: 300 }}
			out:slide={{ duration: 100 }}
			class="accordion__text small-text">
			{accordionText}
		</div>
	{/if}
</div>

<style>
	.accordion__section {
		text-align: left;
		max-width: var(--text-width);
	}

	.caret {
		transition: var(--transition);
	}

	.caret-active {
		width: fit-content;
		height: fit-content;
		transform: rotate(180deg);
	}

	.accordion__section {
		width: 100%;
		max-width: var(--text-width);
		cursor: pointer;
		padding: var(--spaceXS);
		transition: var(--transition);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		border: 1px solid var(--colorBorder);
	}
	.accordion__section:hover {
		background-color: var(--colorBgElevated);
	}

	.accordion__text {
		color: var(--colorTextSecondary);
		max-width: var(--text-width);
		padding: var(--spaceXS) var(--spaceXS);
	}
</style>
