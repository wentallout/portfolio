<script>
	import Button from '$lib/components/Button/Button.svelte';
	import { page } from '$app/stores';
</script>

<h1 class="large-text status">{$page.status}</h1>
<h2 class="error-info mix-text">Oops! This is awkward...</h2>
<p>{$page.error.message}</p>

<a href="/">
	<Button label="Go back" labelColor="var(--neutral-900)" backgroundColor="var(--primary-500)" />
</a>

<style>
	.status {
		color: var(--error);
	}
</style>
