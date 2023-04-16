<script>
	export let pageTitle = 'pageTitle';
	export let decoImageUrl = '';
</script>

<div class="title full-width">
	{#if decoImageUrl != ''}
		<div class="title__deco" style="background-image: url({decoImageUrl})" />
	{/if}
	<h1 class="xxxl-text title__text">{pageTitle}</h1>
</div>

<style>
	.title__deco {
		z-index: 1;
		position: absolute;

		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
		opacity: 0.3;
		background-repeat: repeat;
		background-size: contain;
		overflow: visible;
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
