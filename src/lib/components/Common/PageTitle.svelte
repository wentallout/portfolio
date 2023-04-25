<script>
	export let pageTitle = 'pageTitle';
	export let decoImageUrl = '';
</script>

<div class="title full-width">
	{#if decoImageUrl != ''}
		<img class="title__deco" src={decoImageUrl} alt="page title" />
	{/if}
	<h1 class="xxxl-text title__text">{pageTitle}</h1>
</div>

<style>
	.title__deco {
		z-index: 1;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);

		height: 170%;
		opacity: 0.5;
		user-select: none;
	}

	.title {
		position: relative;
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: var(--space-s);
		/*  */

		margin-bottom: var(--space-2xl);
		overflow: visible;
	}

	.title__text {
		font-family: var(--fancy-font);
		color: var(--text-color);
		z-index: 2;
	}
</style>
