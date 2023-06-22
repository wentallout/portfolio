<script>
	export let summary = '';

	export let answer = '';

	import CaretDown from '~icons/ph/caret-down';

	let isOpened = false;

	function handleOpenDetails() {
		isOpened = !isOpened;
	}
</script>

<div class="details">
	<div on:click={handleOpenDetails} on:keydown={handleOpenDetails} class="summary">
		<div class="small-text">{summary}</div>
		<div class="caret" class:caret-active={isOpened}>
			<CaretDown />
		</div>
	</div>
	{#if isOpened}
		<div class="answer small-text">
			{answer}
		</div>
	{/if}
</div>

<style>
	.caret {
		transition: var(--transition);
	}

	.caret-active {
		width: fit-content;
		height: fit-content;
		transform: rotate(180deg);
	}

	.summary {
		max-width: var(--text-width);
		cursor: pointer;
		padding: var(--spaceXS);
		transition: var(--transition);
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		border: 1px solid var(--colorBorder);
	}
	.summary:hover {
		background-color: var(--colorBgElevated);
	}

	.answer {
		color: var(--colorTextSecondary);
		max-width: var(--text-width);
		padding: var(--spaceXS) var(--spaceXS);
	}
</style>
