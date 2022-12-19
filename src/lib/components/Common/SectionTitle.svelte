<script>
	export let sectionTitle = '';

	let sectionIcon = {
		color: 'var(--primary-500)',
		height: 32,
		width: 32
	};
</script>

<div class="section-title">
	<div class="title__icon">
		<slot {sectionIcon} />
	</div>
	<h2 class="title__text xl-text rainbow">{sectionTitle}</h2>
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
		background-color: var(--bg);
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}

	.title__text {
		font-family: var(--fancy-font);
		font-weight: 600;
		color: var(--text);
	}
</style>
