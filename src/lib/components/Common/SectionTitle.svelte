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
		margin-bottom: var(--spaceXL);
		gap: var(--spaceSmall);
	}

	.title__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--spaceXS);
		background-color: var(--colorBgElevated);
		border-radius: 100%;
		box-shadow: var(--boxShadow);
	}

	.title__text {
		font-family: var(--fontFancy);
		color: var(--colorText);
	}
</style>
