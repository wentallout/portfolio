<script>
	export let pageTitle = 'pageTitle';
</script>

<div class="title">
	<h1 class="title__text xxl-text rainbow">{pageTitle}</h1>
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
	}
	@keyframes bg-move {
		50% {
			background-position: bottom center;
		}
	}

	.title:before {
		opacity: 0.9;
		background: url(/images/diamonds.svg) repeat top center;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		/* height: 100%; */
		height: 500px;
		z-index: -1;
		animation: bg-move 8s linear infinite;
	}

	.title__text {
		font-family: var(--fancy-font);
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
		color: var(--text-color);
	}
</style>
