<script>
	export let pageTitle = 'pageTitle';
</script>

<div class="title">
	<h1 class="title__text xxxl-text rainbow">{pageTitle}</h1>
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
		overflow: hidden;
		width: 100%;

		background: repeating-radial-gradient(circle at 0 0, transparent 0, #121212 40px),
			repeating-linear-gradient(#1e1e1e55, #1e1e1e);
	}

	.title:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background: linear-gradient(
			0deg,
			var(--page-bg) 0%,
			rgba(18, 18, 18, 0.5) 12%,
			rgba(18, 18, 18, 0.1) 30%,
			rgba(18, 18, 18, 0) 40%
		);
	}

	.title:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background: linear-gradient(
			180deg,
			var(--page-bg) 0%,
			rgba(18, 18, 18, 0.5) 12%,
			rgba(18, 18, 18, 0.1) 30%,
			rgba(18, 18, 18, 0) 40%
		);
	}

	.title__text {
		font-family: var(--fancy-font);
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
		color: var(--text-color);
	}
</style>
