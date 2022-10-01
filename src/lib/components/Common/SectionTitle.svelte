<script>
	export let sectionTitle = '';

	let sectionIcon = {
		color: 'var(--primary-600)',
		height: 32,
		width: 32
	};
</script>

<div class="section-title">
	<div class="section-icon">
		<slot {sectionIcon} />
	</div>
	<h2 class="large-text">{sectionTitle}</h2>
</div>

<style>
	.section-title {
		display: flex;
		justify-content: left;
		align-items: center;
		margin-bottom: var(--space-s);
		font-family: 'Yipes';
		
	}

	.section-title h2 {
		color: var(--neutral-900);
	}

	.section-icon {
		display: flex;
		justify-content: left;
		align-items: center;
		padding: 1rem;
		margin-right: var(--space-xs);
		background-color: var(--primary-200);
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}
</style>
