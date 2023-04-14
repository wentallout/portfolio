<script>
	import Button from '$lib/components/Button/Button.svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
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
	});

	let customMessage = '';
</script>

<div class="error">
	<div class="error__box">
		<div class="error__info">
			<div class="status">
				{$page.status}
			</div>
			<h1 class="xxxl-text">{$page.error.message}</h1>
			<div class="detail small-text">
				{customMessage}
			</div>
			<a rel="external" href="/">
				<Button
					label="Take Me Home"
					labelColor="var(--bg-500)"
					backgroundColor="var(--primary-500)" />
			</a>
		</div>
		<img class="error__image" src="/images/error.gif" alt="" />
	</div>
</div>

<style>
	.error__box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-l);
	}

	.error__info {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: var(--text-color-low);
	}

	.status {
		font-size: calc(var(--font-size-3xl) * 2);
	}

	.error {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;

		gap: var(--space-m);
	}

	.error__image {
		width: 300px;
		height: 300px;
	}

	.status {
		color: var(--error);
		font-weight: 600;
	}

	.detail {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--space-s);
		margin-bottom: var(--space-m);
		display: inline-block;
		color: var(--text-color-low);
		font-weight: 300;
		max-width: var(--text-width);
	}
</style>
