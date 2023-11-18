<script>
	import SectionDesc from '$components/sections/SectionDesc.svelte';

	export let sectionTitle = '';
	export let sectionDesc = '';

	let sectionIcon = {
		color: 'var(--colorTextTertiary)'
	};
</script>

<div class="section">
	<div class="section__title">
		<div class="section__icon text-large">
			<slot {sectionIcon} />
		</div>
		<h2 class="section__text text-large">{sectionTitle}</h2>
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
		/* FLEX */
		display: flex;
		justify-content: left;
		align-items: center;
		gap: var(--spaceS);
		/*  */

		margin-bottom: var(--spaceM);
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
