<script>
	export let pageTitle = 'pageTitle';
</script>

<div class="title">
	<h1 class="xxxl-text title__text rainbow">{pageTitle}</h1>
</div>

<style>
	.title {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/*  */
		position: relative;
		margin-bottom: var(--space-2xl);
		overflow: hidden;

		background-color: transparent;
	}

	.title__text {
		font-family: var(--fancy-font);
		color: var(--text-color);
	}
</style>
