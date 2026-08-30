<script lang="ts">
	import { page } from '$app/state';
	import PrimaryButton from '#lib/components/button/PrimaryButton.svelte';
	import { House } from '#lib/assets/icons/icons.js';

	let customMessage = $state('');

	switch (page.status) {
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

<div class="flex flex-col justify-center items-center flex-wrap gap-6 p-8 relative mt-8 h-dvh">
	<div class="flex flex-col justify-start text-muted-foreground">
		{#if page.error}
			<h1 class="mb-8 grid items-center grid-cols-[auto_1fr] gap-6 text-destructive font-fancy">
				<div class="text-2xl">{page.status} {page.error.message}</div>
			</h1>
		{/if}

		<div class="text-sm text-muted-foreground mb-6 max-w-xl">
			{customMessage}
		</div>
		<a class="text-center" href="/" rel="external">
			<PrimaryButton label="Take Me Home">
				<House height="16" width="16" />
			</PrimaryButton>
		</a>
	</div>
</div>
