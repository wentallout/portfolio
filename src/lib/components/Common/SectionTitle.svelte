<script>
	export let sectionTitle = '';

	let sectionIcon = {
		color: 'var(--black-500)',
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
		margin-bottom: var(--space-m);
		gap: var(--space-s);
	}

	.title__icon {
		display: flex;
		justify-content: left;
		align-items: center;
		background-color: var(--primary-500);
		padding: var(--space-s);
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}

	.title__text {
		font-family: var(--fancy-font);
		color: var(--primary-500);
	}
</style>
