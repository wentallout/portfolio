<script>
	export let pageTitle = 'pageTitle';
</script>

<div class="title">
	<h1 class="title__text xxl-text">{pageTitle}</h1>
</div>

<style>
	@keyframes bg-move {
		50% {
			background-position: center top;
		}
	}

	.title {
		display: flex;
		justify-content: center;
		align-items: center;

		background: url('/images/bg-title.jpg');
		background-size: cover;
		background-position: bottom right;
		background-repeat: no-repeat;

		width: 100%;
		margin-inline-start: 50%;
		transform: translateX(-50%);
		margin-bottom: var(--space-l);
		border-radius: var(--border-radius);

		animation: bg-move 5s infinite;
	}

	.title__text {
		font-family: var(--fancy-font);
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
		color: var(--neutral-100);

		text-shadow: 0 0 6px rgb(0 0 0 / 70%);
		text-align: center;
	}
</style>
