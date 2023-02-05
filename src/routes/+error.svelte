<script>
	import Button from '$lib/components/Button/Button.svelte';
	import { page } from '$app/stores';
</script>

<div class="error">
	<img class="error__image" width="240" height="240" src="/images/error.gif" alt="" />
	<h1 class="status xxxl-text">{$page.status} {$page.error.message}</h1>
	<div class="error__detail">
		<p class="message small-text">Oops! Something unexpected happened.</p>
	</div>

	<div>
		<Button
			label="Back to Home"
			labelColor="var(--black-500)"
			backgroundColor="var(--primary-500)" />
	</div>
</div>

<style>
	.error {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		padding: var(--space-l);
		background-color: var(--black-400);
		border-radius: var(--border-radius-light);
	}

	.error__image {
		width: 240px;
		height: 240px;
	}

	.status {
		color: var(--error);
		font-weight: 600;
		font-family: 'Fancy';
		text-align: center;
	}

	.message {
		display: inline-block;
		color: var(--text-color-low);
		font-weight: 300;
	}

	.error__detail {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--space-s);
	}
</style>
