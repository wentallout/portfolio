<script>
	import Button from '$lib/components/Button/Button.svelte';
	import { page } from '$app/stores';
</script>

<div class="error">
	<div>
		<h1 class="status xxxl-text">{$page.status} {$page.error.message}</h1>
		<div class="error__detail">
			<p class="message small-text">Oops! Something unexpected happened.</p>
		</div>

		<div>
			<a rel="external" href="/">
				<Button
					label="Take Me Home"
					labelColor="var(--bg-500)"
					backgroundColor="var(--primary-500)" />
			</a>
		</div>
	</div>
	<img class="error__image" src="/images/error.gif" alt="" />
</div>

<style>
	.error {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: var(--space-l);
		gap: var(--space-l);
	}

	.error__image {
		width: 500px;
		height: 500px;
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
		margin-bottom: var(--space-m);
	}
</style>
