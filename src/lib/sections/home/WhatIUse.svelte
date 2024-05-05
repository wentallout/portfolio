<script>
	import SaosContainer from '$components/common/SaosContainer.svelte';
	import FrontendArt from '$lib/assets/arts/FrontendArt.svelte';
	import GraphicDesignArt from '$lib/assets/arts/GraphicDesignArt.svelte';
	import NavigationArt from '$lib/assets/arts/NavigationArt.svelte';
	import ProcessArt from '$lib/assets/arts/ProcessArt.svelte';

	import SectionTitle from '$sections/SectionTitle.svelte';
	import Toolbox from '~icons/ph/toolbox';
</script>

<SaosContainer>
	<section>
		<div class="tool">
			<SectionTitle sectionTitle="What I Use" let:sectionIcon>
				<Toolbox {...sectionIcon} />
			</SectionTitle>

			<div class="tool__block">
				<div class="block__section kagura-border">
					<div class="section__svg">
						<ProcessArt height="120" width="120" />
					</div>
					<div class="section__text">
						<h3 class="block__title text-base">Frameworks</h3>
						<p class="block__text text-small">Design Thinking</p>
						<p class="block__text text-small">Double Diamond</p>
						<p class="block__text text-small">UX Honeycomb</p>
					</div>
				</div>

				<div class="block__section kagura-border">
					<div class="section__svg">
						<NavigationArt height="120" width="120" />
					</div>
					<div class="section__text">
						<h3 class="block__title text-base">Prototyping</h3>
						<p class="block__text text-small">Figma</p>
						<p class="block__text text-small">Adobe XD</p>
					</div>
				</div>

				<div class="block__section kagura-border">
					<div class="section__svg">
						<GraphicDesignArt height="120" width="120" />
					</div>
					<div class="section__text">
						<h3 class="block__title text-base">Design</h3>
						<p class="block__text text-small">Figma</p>
						<p class="block__text text-small">Canva</p>
						<p class="block__text text-small">Illustrator</p>
					</div>
				</div>

				<div class="block__section kagura-border">
					<div class="section__svg">
						<FrontendArt height="120" width="120" />
					</div>
					<div class="section__text">
						<h3 class="block__title text-base">Frontend</h3>
						<p class="block__text text-small">HTML, CSS, JS</p>
						<p class="block__text text-small">TailwindCSS, Bootstrap</p>
						<p class="block__text text-small">React, SvelteKit</p>
					</div>
				</div>
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
		grid-gap: var(--spaceM);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		justify-content: center;
		align-content: center;
		align-items: stretch;
	}

	.block__section {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		padding: var(--spaceL);
		z-index: 1;
		/* min-height: 230px; */

		overflow: hidden;
		transition: var(--transition);
		background-color: var(--colorBgLayout);
		box-shadow: var(--boxShadow);

		border-radius: var(--borderRadiusLight);
	}

	.block__section:hover {
		/* background-color: var(--colorBgElevated); */
		transform: scale(1.1);
		overflow: visible;
		border: 0;
		z-index: var(--zIndexMax);
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
		color: var(--colorText);
		font-weight: var(--fontWeightLarge);
		margin-top: var(--spaceM);
		margin-bottom: var(--space2XS);
	}

	.block__text {
		color: var(--colorTextSecondary);
		font-weight: var(--fontWeightSmall);
		margin: 0;
	}
</style>
