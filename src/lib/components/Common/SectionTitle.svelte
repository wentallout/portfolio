<script>
	export let sectionTitle = '';

	let sectionIcon = {
		color: 'var(--neutral-100)',
		height: 32,
		width: 32
	};
</script>

<div class="section-title">
	<div class="section-icon">
		<slot {sectionIcon} />
	</div>
	<h2 class="xl-text">{sectionTitle}</h2>
</div>

<style>
	.section-title {
		display: flex;
		justify-content: left;
		align-items: center;

		/* Spacing */
		margin-bottom: var(--space-s);
	}

	.section-icon {
		margin-right: var(--space-m);
	}

	.section-title h2 {
		font-family: var(--fancy-font);
		font-weight: 600;

		/* background: var(--gradient);
		background-clip: text; */
	}

	.section-icon {
		display: flex;
		justify-content: left;
		align-items: center;
		padding: 1rem;
		margin-right: var(--space-xs);
		background-color: var(--neutral-900);
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}
</style>
