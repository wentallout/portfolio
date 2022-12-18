<script>
	export let pageTitle = 'pageTitle';
</script>

<div class="title">
	<div class="overlay" />
	<h1 class="title__text xxl-text">{pageTitle}</h1>
</div>

<style>
	@keyframes bg-move {
		50% {
			background-position: center top;
		}
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: -1;
	}

	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		filter: grayscale(100%);
		background: url('/images/bg-title.jpg') rgba(0, 0, 0, 0.5);
		background-size: cover;
		background-position: bottom right;
		background-repeat: no-repeat;

		width: 100%;
		margin-inline-start: 50%;
		transform: translateX(-50%);
		margin-bottom: var(--space-l);
		border-radius: var(--border-radius-light);

		animation: bg-move 5s infinite;
	}

	.title__text {
		font-family: var(--fancy-font);
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
		color: var(--text);

		text-shadow: 0 0 6px rgb(0 0 0 / 70%);
		text-align: center;
	}
</style>
