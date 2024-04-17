<script>
	import SectionDesc from '$sections/SectionDesc.svelte';
	import { onMount } from 'svelte';

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
		<h2 class="section__text text-large" data-title={sectionTitle}>
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
		--before-left: 4px;
	}

	.section__text::before {
		content: attr(data-title);
		height: 100%;
		width: 100vw;
		left: 0px;
		top: 80%;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 1px var(--colorText);
		color: var(--colorText);
		display: block;
		position: absolute;
		width: 100%;
		z-index: -1;
		opacity: 0.1;
		font-weight: 100;
		/* transform: rotateX(180deg); */

		animation: textAni 5s linear infinite;
	}

	@keyframes textAni {
		0% {
			top: 80%;
		}

		50% {
			top: -80%;
		}

		100% {
			top: 80%;
		}
	}
</style>
