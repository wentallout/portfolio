<script>
	import Line from '$lib/components/Common/Line.svelte';

	export let pageTitle = 'pageTitle';
	export let decoImageUrl = '';
</script>

<div class="title full-width">
	{#if decoImageUrl != ''}
		<img class="title__deco" alt="decoration for title" src={decoImageUrl} />
	{/if}
	<h1 class="xxxl-text title__text">{pageTitle}</h1>
	<Line />
</div>

<style>
	.title__deco {
		z-index: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 130%;
		height: 130%;
		opacity: 0.5;
		/* filter: invert(6%) sepia(25%) saturate(915%) hue-rotate(172deg) brightness(95%) contrast(92%); */
	}

	.title {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: var(--space-s);
		/*  */
		position: relative;
		margin-bottom: var(--space-2xl);
		overflow: visible;
	}

	.title__text {
		font-family: var(--fancy-font);
		color: var(--text-color);
		z-index: 2;
	}
</style>
