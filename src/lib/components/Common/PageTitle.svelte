<script>
	export let pageTitle = 'placeholder';
</script>

<div class="title">
	<h1 class="title__text xl-text">{pageTitle}</h1>
</div>

<style>
	.title {
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: var(--neutral-900);

		width: 100vw;
		margin-inline-start: 50%;
		transform: translateX(-50%);
	}

	.title__text {
		color: var(--neutral-100);
	}
</style>
