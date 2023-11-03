<script>
	import SectionDesc from '$components/sections/SectionDesc.svelte';

	export let sectionTitle = '';
	export let sectionDesc = '';

	let sectionIcon = {
		color: 'var(--colorTextTertiary)',
		height: 32,
		width: 32
	};
</script>

<div class="section">
	<div class="section__title">
		<div class="section__icon">
			<slot {sectionIcon} />
		</div>
		<h2 class="section__text text-xl">{sectionTitle}</h2>
	</div>

	{#if sectionDesc !== ''}
		<SectionDesc text={sectionDesc} />
	{/if}
</div>

<style>
	.section {
		margin-bottom: var(--spaceXL);
		width: 100%;
	}

	.section__title {
		display: flex;
		justify-content: left;

		align-items: center;
		gap: var(--spaceS);
		margin-bottom: var(--spaceS);

		position: relative;
	}

	.section__icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.section__text {
		font-family: var(--fontFancy);
		color: var(--colorText);
	}
</style>
