<script>
	import Button from '$lib/components/Button/Button.svelte';
	import { page } from '$app/stores';
</script>

<div class="error">
	<div class="error__block">
		<h1 class="status">Oops! This is awkward...</h1>
		<h2 class="error__info base-text">{$page.status}</h2>
		<p class="error-message small-text">{$page.error.message}</p>
		<a class="back" href="/">
			<Button label="Go back" labelColor="var(--bg)" backgroundColor="var(--primary-500)" />
		</a>
	</div>
	<img class="error__image" width="50%" height="auto" src="/images/error.gif" alt="" />
</div>

<style>
	.error {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: var(--space-l);
		background-color: var(--bg);
	}
	.back {
		max-width: 50%;
	}

	.status {
		color: var(--error);
		font-size: calc(var(--space-xl));
		font-weight: 600;
	}

	.error-message {
		color: var(--neutral-600);
		font-weight: 300;
	}
</style>
