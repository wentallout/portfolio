<script>
	export let sectionTitle = '';
</script>

<div class="section-title small-text">
	<div class="section-icon">
		<slot />
	</div>
	<h2>{sectionTitle}</h2>
</div>

<style>
	.section-icon {
		display: flex;
	}

	.section-title {
		display: flex;
		justify-content: left;
		align-items: center;
		margin-bottom: 2.5rem;
		font-weight: 600;
	}
</style>
