<script>
	import HomeSectionTitle from '$lib/components/Home/HomeSectionTitle.svelte';
	import frontend from '$lib/assets/images/home/frontend.svg';
	import navigation from '$lib/assets/images/home/navigation.svg';
	import interactive from '$lib/assets/images/home/interactive.svg';
	import graphicDesign from '$lib/assets/images/home/graphicDesign.svg';
	import Image from '$lib/components/Common/Image.svelte';
</script>

<section>
	<div class="tool">
		<HomeSectionTitle title="My tools" />

		<div class="tool__block">
			<div class="block__section">
				<Image hasCaption={false} width="50" height="50" src={navigation} alt="navigation" />
				<h3 class="block__title base-text">Prototyping</h3>
				<p class="block__text small-text">Figma</p>
				<p class="block__text small-text">Adobe XD</p>
				<p class="block__text small-text">Sketch</p>
			</div>

			<div class="block__section">
				<Image hasCaption={false} width="50" height="50" src={graphicDesign} alt="graphic design" />
				<h3 class="block__title base-text">Design</h3>
				<p class="block__text small-text">Illustrator</p>
				<p class="block__text small-text">Photoshop</p>
			</div>

			<div class="block__section">
				<Image hasCaption={false} width="50" height="50" src={interactive} alt="interactive" />
				<h3 class="block__title base-text">Motion</h3>
				<p class="block__text small-text">Lottie</p>
				<!-- <p class="block__text small-text">After Effects</p> -->
				<p class="block__text small-text">CSS Animations</p>
			</div>

			<div class="block__section">
				<Image hasCaption={false} width="50" height="50" src={frontend} alt="frontend" />
				<h3 class="block__title base-text">Frontend</h3>
				<p class="block__text small-text">Semantic HTML, BEM CSS</p>
				<p class="block__text small-text">Bootstrap, Material</p>
				<p class="block__text small-text">JS, React, SvelteKit</p>
			</div>
		</div>
	</div>
</section>

<style>
	.block__section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		background-color: var(--black-400);
		padding: var(--space-l);
		border-radius: var(--border-radius-light);
		box-shadow: var(--box-shadow);
	}

	.tool {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		gap: var(--space-m);
	}

	.tool__block {
		width: 100%;
		--min: 24ch;
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
