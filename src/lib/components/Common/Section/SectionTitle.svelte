<script>
	import SectionDesc from '$components/Common/Section/SectionDesc.svelte';
	export let sectionTitle = '';
	export let sectionDesc = '';

	let sectionIcon = {
		color: 'var(--colorText)',
		height: 240,
		width: 240
	};
</script>

<div class="section">
	<div class="section__title">
		<div class="section__icon">
			<slot {sectionIcon} />
		</div>
		<h2 class="section__text xl-text">{sectionTitle}</h2>
	</div>

	{#if sectionDesc !== ''}
		<SectionDesc text={sectionDesc} />
	{/if}
</div>

<style>
	.section {
		margin-bottom: var(--spaceXL);
	}

	.section__title {
		display: flex;
		justify-content: left;

		align-items: center;
		gap: var(--space2XS);
		margin-bottom: var(--spaceS);

		position: relative;
	}

	.section__icon {
		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 50%;
		bottom: 50%;
		left: -120px;
		opacity: 0.03;
	}

	:global([color-scheme='light'] .section__icon) {
		opacity: 0.1;
	}

	.section__text {
		font-family: var(--fontFancy);
		color: var(--colorText);
	}
</style>
