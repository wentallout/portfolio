<script>
	export let pageTitle = 'pageTitle';
</script>

<div class="title">
	<h1 class="title__text xxl-text">{pageTitle}</h1>
</div>

<style>
	.title {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/*  */
		position: relative;
		margin-bottom: var(--space-3xl);
		border-radius: var(--border-radius-light);

		width: 100%;
	}

	.title:before {
		opacity: 0.1;
		background: url(/images/page_title_pattern.webp) repeat top center/49px 72px;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.title__text {
		font-family: var(--fancy-font);
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
		color: var(--text-color);

		text-shadow: 0 0 6px rgb(0 0 0 / 70%);
		text-align: center;
	}
</style>
