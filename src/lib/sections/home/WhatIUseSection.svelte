<script>
	import SaosContainer from '$components/common/SaosContainer.svelte';
	import FrontendArt from '$lib/assets/arts/FrontendArt.svelte';
	import GraphicDesignArt from '$lib/assets/arts/GraphicDesignArt.svelte';
	import NavigationArt from '$lib/assets/arts/NavigationArt.svelte';
	import ProcessArt from '$lib/assets/arts/ProcessArt.svelte';
	import { Toolbox } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/SectionTitle.svelte';
</script>

<SaosContainer>
	<section>
		<div class="tool">
			<SectionTitle sectionTitle="What I Use">
				{#snippet children({ sectionIcon })}
					<Toolbox {...sectionIcon} />
				{/snippet}
			</SectionTitle>

			<div class="tool__block">
				<article class="block__section">
					<div class="section__svg">
						<ProcessArt height="120" width="120" />
					</div>
					<div class="section__text">
						<h3 class="block__title text-base">Frameworks</h3>
						<p class="block__text text-small">Design Thinking</p>
						<p class="block__text text-small">Double Diamond</p>
						<p class="block__text text-small">UX Honeycomb</p>
					</div>
				</article>

				<article class="block__section">
					<div class="section__svg">
						<NavigationArt height="120" width="120" />
					</div>
					<div class="section__text">
						<h3 class="block__title text-base">Prototyping</h3>
						<p class="block__text text-small">Figma</p>
						<p class="block__text text-small">Adobe XD</p>
						<p class="block__text text-small">Penpot</p>
					</div>
				</article>

				<article class="block__section">
					<div class="section__svg">
						<GraphicDesignArt height="120" width="120" />
					</div>
					<div class="section__text">
						<h3 class="block__title text-base">Design</h3>
						<p class="block__text text-small">Figma</p>
						<p class="block__text text-small">Canva</p>
						<p class="block__text text-small">Illustrator</p>
					</div>
				</article>

				<article class="block__section">
					<div class="section__svg">
						<FrontendArt height="120" width="120" />
					</div>
					<div class="section__text">
						<h3 class="block__title text-base">Frontend</h3>
						<p class="block__text text-small">HTML, CSS, JS</p>
						<p class="block__text text-small">GSAP, ScrollTrigger, Three.js</p>
						<p class="block__text text-small">TailwindCSS, Bootstrap</p>
						<p class="block__text text-small">React, SvelteKit</p>
					</div>
				</article>
			</div>
		</div>
	</section>
</SaosContainer>

<style>
	.section__svg {
		position: absolute;
		top: 0;
		right: 0;
		opacity: 0.05;
		scale: 1.5;
		transform: rotate(45deg);
		transition: var(--transition);
	}

	.section__text {
		width: 100%;
		text-align: left;
		flex-grow: 1;
	}

	.tool {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		overflow: visible;
	}
	.tool__block {
		width: 100%;
		--min: 240px;
		display: grid;
		grid-gap: var(--space-mid);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		justify-content: center;
		align-content: center;
		align-items: stretch;
	}

	.block__section {
		/* FLEX */
		display: flex;
		flex-direction: column;
		align-items: center;
		/* --- */

		position: relative;

		padding: var(--space-card);
		z-index: 1;
		/* min-height: 230px; */

		overflow: hidden;
		transition: var(--transition);
		background-color: var(--color-bg-layout);
		box-shadow: var(--boxShadow);
		background: var(--color-bg-gradient-subtle);
		border-radius: var(--border-radius-light);
	}

	.block__section:hover {
		/* background-color: var(--color-bg-elevated); */
		transform: scale(1.1);
		overflow: visible;
		border: 0;
		z-index: var(--z-index-max);
		outline: 0;
	}

	.block__section:hover .section__svg {
		transform: rotate(0deg);
	}

	@media (min-width: 992px) {
		.block__section {
			align-items: flex-start;
		}
	}

	.block__title {
		color: var(--color-text);
		font-weight: var(--fontWeightLarge);
		margin-top: var(--space-mid);
		margin-bottom: var(--space-2xs);
	}

	.block__text {
		color: var(--color-text-secondary);
		font-weight: var(--fontWeightSmall);
		margin: 0;
		border: 0;
	}
</style>
