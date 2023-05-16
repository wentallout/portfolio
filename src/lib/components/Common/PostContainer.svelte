<script>
	import End from '$components/Common/ThankYou.svelte';
	import CustomToc from '$components/Common/CustomToc.svelte';
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
		margin-top: var(--space3XL);
		justify-content: space-between;
		gap: var(--spaceM);
	}
	.post-content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
