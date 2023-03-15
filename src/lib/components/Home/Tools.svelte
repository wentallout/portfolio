<script>
	import SaosContainer from '$lib/components/Common/SaosContainer.svelte';
	import SVG from '$lib/components/Common/SVG.svelte';
	import HomeSectionTitle from '$lib/components/Home/HomeSectionTitle.svelte';
	import Atropos from 'atropos/svelte';

	import frontend from '$lib/assets/images/home/frontend.svg';
	import navigation from '$lib/assets/images/home/navigation.svg';
	import graphicDesign from '$lib/assets/images/home/graphicDesign.svg';
	import process from '$lib/assets/images/home/process.svg';
</script>

<SaosContainer>
	<section>
		<div class="tool">
			<HomeSectionTitle title="Tools" />

			<div class="tool__block">
				<Atropos rotateTouch="scroll-y">
					<div class="block__section">
						<div class="section__svg">
							<SVG width="120" height="120" src={process} alt="process" />
						</div>
						<div class="section__text">
							<h3 class="block__title base-text">UX Frameworks</h3>
							<p class="block__text small-text">Design Thinking</p>
							<p class="block__text small-text">Double Diamond</p>
							<p class="block__text small-text">UX Honeycomb</p>
						</div>
					</div>
				</Atropos>
				<Atropos rotateTouch="scroll-y">
					<div class="block__section">
						<div class="section__svg">
							<SVG width="120" height="120" src={navigation} alt="navigation" />
						</div>
						<div class="section__text">
							<h3 class="block__title base-text">Prototyping</h3>
							<p class="block__text small-text">Figma</p>
							<p class="block__text small-text">Adobe XD</p>
							<p class="block__text small-text">Sketch</p>
						</div>
					</div>
				</Atropos>

				<Atropos rotateTouch="scroll-y">
					<div class="block__section">
						<div class="section__svg">
							<SVG width="120" height="120" src={graphicDesign} alt="graphic design" />
						</div>
						<div class="section__text">
							<h3 class="block__title base-text">Design</h3>
							<p class="block__text small-text">Illustrator</p>
							<p class="block__text small-text">Photoshop</p>
							<p class="block__text small-text">Canva</p>
						</div>
					</div>
				</Atropos>

				<Atropos rotateTouch="scroll-y">
					<div class="block__section">
						<div class="section__svg">
							<SVG width="120" height="120" src={frontend} alt="frontend" />
						</div>
						<div class="section__text">
							<h3 class="block__title base-text">Frontend</h3>
							<p class="block__text small-text">HTML, CSS, JS</p>
							<p class="block__text small-text">Bootstrap, Material</p>
							<p class="block__text small-text">React, SvelteKit</p>
						</div>
					</div>
				</Atropos>
			</div>
		</div>
	</section>
</SaosContainer>

<style>
	.section__svg {
		position: absolute;
		top: 0;
		right: -10%;
		opacity: 0.1;
	}

	.section__text {
		width: 100%;
		text-align: left;
	}

	.tool {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.block__section {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		background-color: var(--bg-400);
		padding: var(--space-l);
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow-1);
	}

	@media (min-width: 992px) {
		.block__section {
			align-items: flex-start;
		}
	}

	.tool__block {
		width: 100%;
		--min: 20ch;
		display: grid;
		grid-gap: var(--space-s);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		justify-content: center;
		align-content: center;
	}

	.block__title {
		color: var(--text-color);
		font-weight: 600;
		margin-top: var(--space-m);
		margin-bottom: var(--space-2xs);
	}

	.block__text {
		color: var(--text-color-low);
		font-weight: 400;
		margin: 0;
	}
</style>
