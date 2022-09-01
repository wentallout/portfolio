<script>
	export let sectionTitle = '';
</script>

<div class="section-title">
	<div class="section-icon">
		<slot />
	</div>
	<h2 class="large-text">{sectionTitle}</h2>
</div>

<style>
	.section-icon {
		display: flex;
		justify-content: left;
		align-items: center;
		border: 1px solid var(--black);
		border-radius: 100%;
		padding: 0.25rem;
		margin-right: var(--space-xs);
	}

	.section-title {
		display: flex;
		justify-content: left;
		align-items: center;
		margin-bottom: var(--space-l);
		font-weight: 600;
		color: var(--black);
	}
</style>
