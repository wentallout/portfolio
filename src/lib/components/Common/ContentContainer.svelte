<script>
	import End from '$lib/components/Common/End.svelte';
	import CustomToc from '$lib/components/Common/CustomToc.svelte';
</script>

<div class="content-container">
	<div class="content">
		<slot />
		<End />
	</div>

	<CustomToc />
</div>

<style>
	.content-container {
		display: flex;
		flex-direction: row;

		align-items: flex-start;
		margin-top: var(--space-3xl);
		justify-content: space-between;
		gap: var(--space-xl);
	}
	.content {
		display: flex;
		flex-direction: column;
	}
</style>
