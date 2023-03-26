<script>
	export let pageTitle = 'pageTitle';

	export let decoImageUrl = '';
</script>

<div class="title">
	{#if decoImageUrl != ''}
		<img class="title__deco" alt="decoration for title" src={decoImageUrl} />
	{/if}
	<h1 class="xxxl-text title__text">{pageTitle}</h1>
	<div class="line" />
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

	.line {
		height: 6px;
		width: 100%;
		background: url('/images/bg_line.png') repeat-x left top;
		filter: invert(1);
	}

	.title__text {
		font-family: var(--fancy-font);
		color: var(--text-color);
		z-index: 2;
	}
</style>
