<script>
	import SaosContainer from '$components/common/SaosContainer.svelte';
	import { textReveal } from '$lib/actions/gsapAnimation';
	import SectionDesc from '$sections/layout/SectionDesc.svelte';

	/** @type {{sectionTitle?: string, sectionDesc?: string, unsplitAfter?: number, children?: import('svelte').Snippet<[any]>}} */
	let { children, sectionDesc = '', sectionTitle = '', unsplitAfter = 0 } = $props();

	let sectionIcon = {
		color: 'var(--color-text-tertiary)'
	};
</script>

<div class="section">
	<div class="section__title text-trim text-xl">
		<div class="section__icon">
			{@render children?.({ sectionIcon })}
		</div>
		<h2
			id={sectionTitle.toLowerCase()}
			class="section__text"
			data-title={sectionTitle}
			use:textReveal={{ unsplitAfter }}>
			{sectionTitle}
		</h2>
	</div>

	{#if sectionDesc !== ''}
		<SectionDesc text={sectionDesc} {unsplitAfter} />
	{/if}
</div>

<style>
	.section {
		margin-bottom: var(--space-xl);
		width: 100%;
	}

	.section__title {
		/* FLEX */
		display: flex;
		justify-content: left;
		align-items: center;
		gap: var(--space-mid);
		/*  */

		margin-bottom: var(--space-small);
		position: relative;
	}

	.section__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		font-size: 0.8em;
	}
	.section__icon::before {
		content: '';
		background: url('/images/brush-circle.svg') no-repeat center / contain;
		width: 180%;
		height: 180%;
		opacity: 0.2;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	:global([color-scheme='dark'] .section__icon::before) {
		filter: invert(1);
	}

	.section__text {
		font-family: var(--font-fancy);

		position: relative;
		--before-left: 4px;

		letter-spacing: var(--tracking-tight);
	}
</style>
