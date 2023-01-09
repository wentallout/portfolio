<script>
	export let sectionTitle = '';

	let sectionIcon = {
		color: 'var(--primary-500)',
		height: 40,
		width: 40
	};
</script>

<div class="section-title">
	<div class="title__icon">
		<slot {sectionIcon} />
	</div>
	<h2 class="title__text xl-text">{sectionTitle}</h2>
</div>

<style>
	.section-title {
		display: flex;
		justify-content: left;
		align-items: center;

		margin-bottom: var(--space-m);
	}

	.title__icon {
		display: flex;
		justify-content: left;
		align-items: center;
		padding: 1rem;
		margin-right: var(--space-xs);
	}

	.title__text {
		font-family: var(--fancy-font);
		color: var(--primary-500);
		font-weight: 600;
	}
</style>
