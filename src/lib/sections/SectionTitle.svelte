<script>
	import SectionDesc from '$sections/SectionDesc.svelte';

	/** @type {{sectionTitle?: string, sectionDesc?: string, children?: import('svelte').Snippet<[any]>}} */
	let { sectionTitle = '', sectionDesc = '', children } = $props();

	let sectionIcon = {
		color: 'var(--colorTextTertiary)'
	};
</script>

<div class="section">
	<div class="section__title">
		<div class="section__icon text-large">
			{@render children?.({ sectionIcon })}
		</div>
		<h2 class="text-xl section__text" id={sectionTitle.toLowerCase()} data-title={sectionTitle}>
			{sectionTitle}
		</h2>
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

		margin-bottom: var(--spaceS);
		position: relative;
	}

	.section__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.section__icon::before {
		content: '';
		background: url('/images/crosshair.svg') no-repeat center / contain;
		width: 200%;
		height: 200%;
		opacity: 0.3;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.section__text {
		font-family: var(--fontFancy);
		color: var(--colorPrimary);
		position: relative;
		--before-left: 4px;

		letter-spacing: var(--tracking-tight);
	}

	.section__text::before {
		content: attr(data-title);
		height: 100%;
		width: 100vw;
		left: 4px;
		top: 3px;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 1px var(--colorPrimaryActive);
		color: var(--colorPrimaryHover);
		display: block;
		position: absolute;
		width: 100%;
		z-index: -1;
		opacity: 0.5;
		font-weight: 100;
	}
</style>
