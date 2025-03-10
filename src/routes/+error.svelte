<script>
	import { page } from '$app/stores';
	import Button from '$components/button/Button.svelte';
	import { House } from '$lib/assets/icons/icons';

	let customMessage = $state('');

	switch ($page.status) {
		case 403:
			customMessage =
				"Sorry, you don't have permission to access this page. Please contact the website administrator for assistance.";
			break;
		case 404:
			customMessage =
				"Oops! The page you're looking for cannot be found. Please check the URL or try searching for what you need.";
			break;
		case 500:
			customMessage =
				"We're sorry, something went wrong. Our team has been notified and will work to fix the problem as soon as possible.";
			break;
		case 503:
			customMessage =
				'Our servers are currently down for maintenance. We apologize for any inconvenience and will be back up and running shortly.';
			break;
		default:
			customMessage = 'An unexpected error occurred. Please try again later.';
	}
</script>

<div class="error">
	<div class="error__info">
		<h1 class="status">
			<div class="status__code text-3xl">{$page.status}</div>
			<div class="">{$page.error.message}</div>
		</h1>

		<div class="detail text-small">
			{customMessage}
		</div>
		<a class="back" href="/" rel="external">
			<Button
				backgroundColor="var(--color-primary)"
				label="Take Me Home"
				labelColor="var(--color-black)">
				<House height="16" width="16" />
			</Button>
		</a>
	</div>
</div>

<style>
	.error {
		/* FLEX */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-mid);
		/* --- */

		padding: var(--space-large);
		position: relative;
		margin-top: var(--space-large);

		height: 100dvh;
	}
	.back {
		text-align: center;
	}

	.error__info {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: var(--color-text-secondary);
	}

	.status {
		margin-bottom: var(--space-xl);
		display: grid;
		grid-template-columns: 1fr 1fr;
		color: var(--color-error);
		font-family: var(--font-fancy);
	}

	.detail {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--space-small);
		margin-bottom: var(--space-mid);
		display: inline-block;
		color: var(--color-text-secondary);
		font-weight: var(--fontWeightSmall);
		max-width: var(--text-width);
	}
</style>
