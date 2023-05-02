<script>
	import SaosContainer from '$lib/components/Common/SaosContainer.svelte';

	import HomeSectionTitle from '$lib/components/Home/HomeSectionTitle.svelte';

	import Frontend from '$lib/assets/images/home/frontend.svg?component';
	import Navigation from '$lib/assets/images/home/navigation.svg?component';
	import GraphicDesign from '$lib/assets/images/home/graphicDesign.svg?component';
	import Process from '$lib/assets/images/home/process.svg?component';
</script>

<SaosContainer>
	<section>
		<div class="tool">
			<HomeSectionTitle title="What I Use" />

			<div class="tool__block">
				<div class="block__section">
					<div class="section__svg">
						<Process width="120" height="120" fill="var(--colorText)" alt="process" />
					</div>
					<div class="section__text">
						<h3 class="block__title base-text">UX Frameworks</h3>
						<p class="block__text small-text">Design Thinking</p>
						<p class="block__text small-text">Double Diamond</p>
						<p class="block__text small-text">UX Honeycomb</p>
					</div>
				</div>

				<div class="block__section">
					<div class="section__svg">
						<Navigation width="120" height="120" fill="var(--colorText)" alt="navigation" />
					</div>
					<div class="section__text">
						<h3 class="block__title base-text">Prototyping</h3>
						<p class="block__text small-text">Figma</p>
						<p class="block__text small-text">Adobe XD</p>
						<p class="block__text small-text" />
					</div>
				</div>

				<div class="block__section">
					<div class="section__svg">
						<GraphicDesign width="120" height="120" fill="var(--colorText)" alt="graphic design" />
					</div>
					<div class="section__text">
						<h3 class="block__title base-text">Design</h3>
						<p class="block__text small-text">Canva</p>
						<p class="block__text small-text">Illustrator</p>
						<p class="block__text small-text">Photoshop</p>
					</div>
				</div>

				<div class="block__section">
					<div class="section__svg">
						<Frontend width="120" height="120" fill="var(--colorText)" alt="frontend" />
					</div>
					<div class="section__text">
						<h3 class="block__title base-text">Frontend</h3>
						<p class="block__text small-text">HTML, CSS, JS</p>
						<p class="block__text small-text">Bootstrap, Material</p>
						<p class="block__text small-text">React, SvelteKit</p>
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
		overflow: visible;
	}
	.tool__block {
		width: 100%;
		--min: 20ch;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		justify-content: center;
		align-content: center;
	}

	.block__section {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		padding: var(--space-l);
		z-index: 1;
		min-height: 230px;
		border: 1px solid var(--colorBorder);
		overflow: hidden;
		transition: var(--transition);
		background-color: var(--colorBgLayout);
		box-shadow: var(--boxShadow);
	}

	.block__section:hover {
		background-color: var(--colorBgElevated);
		transform: scale(1.1);
		overflow: visible;
		border: 0;
		z-index: 2;
	}

	@media (min-width: 992px) {
		.block__section {
			align-items: flex-start;
		}
	}

	.block__title {
		color: var(--colorText);
		font-weight: 600;
		margin-top: var(--space-m);
		margin-bottom: var(--space-2xs);
	}

	.block__text {
		color: var(--colorTextSecondary);
		font-weight: 400;
		margin: 0;
	}
</style>
