<script>
	export let pageTitle = 'pageTitle';
</script>

<div class="title">
	<h1 class="xxxl-text title__text">{pageTitle}</h1>
	<div class="line" />
</div>

<style>
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
		overflow: hidden;
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
	}
</style>
