<script>
	export let sectionTitle = '';

	let sectionIcon = {
		color: 'var(--text-color)',
		height: 24,
		width: 24
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
		margin-bottom: var(--space-xl);
		gap: var(--space-s);
	}

	.title__icon {
		display: flex;
		justify-content: left;
		align-items: center;
		padding: var(--space-s);
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
		background-color: var(--bg-400);
	}

	.title__text {
		font-family: var(--fancy-font);
		color: var(--text-color);
	}
</style>
