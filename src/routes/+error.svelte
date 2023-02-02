<script>
	import Button from '$lib/components/Button/Button.svelte';
	import { page } from '$app/stores';
</script>

<div class="error">
	<h1 class="status">{$page.status} {$page.error.message}</h1>
	<div class="error__detail">
		<p class="message small-text">Oops! Something unexpected happened.</p>
	</div>
	<a class="back" href="/">
		<Button
			label="Back to Home"
			labelColor="var(--black-500)"
			backgroundColor="var(--primary-500)" />
	</a>

	<img class="error__image" width="auto" height="500px" src="/images/error.gif" alt="" />
</div>

<style>
	.error {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: var(--space-l);
	}
	.back {
		width: 100%;
	}

	.error__image {
		aspect-ratio: 1/1;
	}

	.status {
		color: var(--error);
		font-size: calc(var(--space-xl));
		font-weight: 600;
	}

	.message {
		display: inline-block;
		color: var(--text-color-low);
		font-weight: 300;
	}

	.error__detail {
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--space-s);
	}
</style>
