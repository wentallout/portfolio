<script>
	export let sectionTitle = '';

	let sectionIcon = {
		color: 'var(--colorText)',
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
		justify-content: center;
		align-items: center;

		padding: var(--space-xs);

		background-color: var(--colorTextQuaternary);

		border-radius: 100%;
	}

	.title__text {
		font-family: var(--fancy-font);
		color: var(--colorText);
	}
</style>
