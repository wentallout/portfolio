<script>
	import SectionDesc from '$sections/SectionDesc.svelte';

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
		<h2 class="section__text text-large" data-title={sectionTitle}>{sectionTitle}</h2>
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
		position: relative;
	}

	.section__text::before {
		content: attr(data-title);
		height: 100%;
		left: -2px;
		top: 2px;
		-webkit-text-fill-color: var(--colorBgLayout);
		-webkit-text-stroke: 1px var(--colorTextQuaternary);
		color: var(--colorText);
		display: block;
		position: absolute;
		width: 100%;
		z-index: -1;
		opacity: 1;
	}
</style>
