<script>
	import Button from '$lib/components/Button/Button.svelte';

	import Crack from '$lib/assets/images/other/crack.svg';

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
</script>

<div class="error">
	<img class="error__deco" src={Crack} alt="" />

	<div class="error__info">
		<h1 class="status">
			{$page.status}
			<div class="">{$page.error.message}</div>
		</h1>

		<div class="detail small-text">
			{customMessage}
		</div>
		<a class="back" rel="external" href="/">
			<Button
				label="Take Me Home"
				labelColor="var(--colorTextSecondary)"
				backgroundColor="var(--colorPrimary)" />
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
		right: 0;
		width: 600px;
		height: auto;
		z-index: -1;
		opacity: 0.5;
	}

	.status {
		font-size: calc(var(--font-size-2xl) * 2);
		margin-bottom: var(--space-xl);
	}
	.error {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: var(--space-m);
		padding: var(--space-l);
		position: relative;
	}
	.status {
		color: var(--colorError);
		font-family: var(--fancy-font);
	}
	.detail {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--space-s);
		margin-bottom: var(--space-m);
		display: inline-block;
		color: var(--colorTextSecondary);
		font-weight: 400;
		max-width: var(--text-width);
	}
</style>
