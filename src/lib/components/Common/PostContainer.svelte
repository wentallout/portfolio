<script>
	import End from '$lib/components/Common/ThankYou.svelte';
	import CustomToc from '$lib/components/Common/CustomToc.svelte';
</script>

<div class="post-container">
	<div class="post-content">
		<slot />
	</div>

	<CustomToc />
</div>
<End />

<style>
	.post-container {
		display: flex;
		flex-direction: row;

		align-items: flex-start;
		margin-top: var(--space-3xl);
		justify-content: space-between;
		gap: var(--space-m);
	}
	.post-content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
