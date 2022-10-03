<script>
	import frontend from '$lib/assets/images/home/frontend.svg';
	import navigation from '$lib/assets/images/home/navigation.svg';
	import interactive from '$lib/assets/images/home/interactive.svg';
	import graphicDesign from '$lib/assets/images/home/graphicDesign.svg';
</script>

<section class="tool">
	<h2 class="tool__title large-text">Tools & Frameworks I use</h2>

	<div class="tool__block">
		<div class="block__section">
			<img width="50" height="50" class="block__image" src={navigation} alt="navigation" />
			<h3 class="block__title base-text">Prototyping</h3>
			<p class="block__text small-text">Figma</p>
			<p class="block__text small-text">Adobe XD</p>
			<p class="block__text small-text">Sketch</p>
		</div>

		<div class="block__section">
			<img width="50" height="50" class="block__image" src={graphicDesign} alt="graphic design" />
			<h3 class="block__title base-text">Design</h3>
			<p class="block__text small-text">Illustrator</p>
			<p class="block__text small-text">Photoshop</p>
		</div>

		<div class="block__section">
			<img width="50" height="50" class="block__image" src={interactive} alt="interactive" />
			<h3 class="block__title base-text">Motion</h3>
			<p class="block__text small-text">Lottie</p>
			<!-- <p class="block__text small-text">After Effects</p> -->
			<p class="block__text small-text">CSS Animations</p>
		</div>

		<div class="block__section">
			<img width="50" height="50" class="block__image" src={frontend} alt="frontend" />
			<h3 class="block__title base-text">Frontend</h3>
			<p class="block__text small-text">Semantic HTML + BEM CSS</p>
			<p class="block__text small-text">Bootstrap + Material</p>
			<p class="block__text small-text">JS, React, Svelte</p>
		</div>
	</div>
</section>

<style>
	.tool {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		/* Spacing */
		margin-bottom: var(--space-2xl);
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

	.tool__title {
		font-family: 'Blacker';
	}

	.block__section {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: flex-start;
		border-radius: var(--border-radius);
		background-color: var(--neutral-900);
		padding: var(--space-m);
	}

	.block__title {
		color: var(--primary-500);
		font-weight: 500;
		margin-bottom: var(--space-s);
	}

	.block__text {
		color: var(--neutral-100);
		font-weight: 300;
		margin: 0;
	}
</style>
