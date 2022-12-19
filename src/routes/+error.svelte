<script>
	import Button from '$lib/components/Button/Button.svelte';
	import { page } from '$app/stores';
</script>

<div class="error">
	<div class="error__block">
		<h1 class="xxxl-text status">{$page.status}</h1>
		<h2 class="error__info base-text">Oops! This is awkward...</h2>
		<p class="error-message small-text">{$page.error.message}</p>
		<a href="/">
			<Button label="Go back" labelColor="var(--text)" backgroundColor="var(--primary-400)" />
		</a>
	</div>
	<img class="error__image" width="500" height="500" src="/images/error.gif" alt="" />
</div>

<style>
	.error {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: var(--space-m);
		background-color: var(--bg);
	}

	.status {
		color: var(--error);
		font-weight: 600;
	}

	.error-message {
		color: var(--neutral-600);
		font-weight: 300;
	}
</style>
