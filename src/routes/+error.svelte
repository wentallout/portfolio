<script>
	import Button from '$components/Button/Button.svelte';

	import { page } from '$app/stores';

	let customMessage = '';

	switch ($page.status) {
		case 404:
			customMessage =
				"Oops! The page you're looking for cannot be found. Please check the URL or try searching for what you need.";
			break;
		case 403:
			customMessage =
				"Sorry, you don't have permission to access this page. Please contact the website administrator for assistance.";
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

	import House from '~icons/ph/house';
</script>

<div class="error">
	<img class="error__deco" src="/images/crack.svg" alt="" />

	<div class="error__info">
		<h1 class="status">
			{$page.status}
			<div class="">{$page.error.message}</div>
		</h1>

		<div class="detail text-small">
			{customMessage}
		</div>
		<a class="back" rel="external" href="/">
			<Button
				label="Take Me Home"
				labelColor="var(--colorBlack)"
				backgroundColor="var(--colorPrimary)">
				<House width="16" height="16" />
			</Button>
		</a>
	</div>
</div>

<style>
	.back {
		text-align: center;
	}

	.error__info {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: var(--colorTextSecondary);
	}

	.error__deco {
		position: absolute;
		top: 0;
		left: 0;
		width: 600px;
		height: auto;
		z-index: -1;
		opacity: 0;
	}

	.status {
		font-size: calc(var(--fontSizeXL) * 2);
		margin-bottom: var(--spaceXL);
	}
	.error {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: var(--spaceM);
		padding: var(--spaceL);
		position: relative;
		margin-top: var(--spaceL);
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
