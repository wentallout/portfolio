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
			{$page.status}
			<div class="">{$page.error.message}</div>
		</h1>

		<div class="detail text-small">
			{customMessage}
		</div>
		<a class="back" href="/" rel="external">
			<Button
				backgroundColor="var(--colorPrimary)"
				label="Take Me Home"
				labelColor="var(--colorBlack)">
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
		gap: var(--spaceM);
		/* --- */

		padding: var(--spaceL);
		position: relative;
		margin-top: var(--spaceL);

		height: 100dvh;
	}
	.back {
		text-align: center;
	}

	.error__info {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: var(--colorTextSecondary);
	}

	.status {
		font-size: calc(var(--fontSizeXL) * 2);
		margin-bottom: var(--spaceXL);
	}

	.status {
		color: var(--colorError);
		font-family: var(--fontFancy);
	}
	.detail {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--spaceS);
		margin-bottom: var(--spaceM);
		display: inline-block;
		color: var(--colorTextSecondary);
		font-weight: var(--fontWeightSmall);
		max-width: var(--text-width);
	}
</style>
