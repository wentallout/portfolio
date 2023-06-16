<script>
	import HeroVisual from './HeroVisual.svelte';
	import Button from '$components/Button/Button.svelte';
	// import HeroScene from '$components/Scenes/HeroScene.svelte';
	// import { Canvas } from '@threlte/core';
</script>

<section class="full-width">
	<div class="hero">
		<div class="hero__block">
			<div class="hero__name xxl-text">
				Khoa is a
				<span class="focus">UI/UX Designer</span>
			</div>
			<div class="hero__text small-text">
				I create practical and user-friendly products that bring real value and enhance people's
				lives.
				<a class="hero__link underline" href="/about">
					<span>More about Khoa</span>
				</a>
			</div>

			<div class="hero__btn">
				<a href="/project">
					<Button
						label="See All Projects"
						labelColor="#000"
						backgroundColor="var(--colorPrimary)"
						glowColor="var(--colorPrimary)" />
				</a>

				<a href="/contact">
					<Button
						label="Contact"
						labelColor="var(--colorText)"
						backgroundColor="transparent"
						borderColor="var(--colorText)" />
				</a>
			</div>
		</div>

		<HeroVisual />
	</div>
</section>

<style>
	section {
		overflow: visible;
	}

	.hero__link {
		display: block;
		color: var(--colorPrimary);
	}

	.hero__btn a {
		display: contents;
	}

	.hero {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		position: relative;
		overflow: visible;
		/* justify-content: center; */
		align-items: center;
	}

	.hero__block {
		display: flex;
		padding: var(--space3XL) var(--page-padding);
		flex-direction: column;
		position: relative;
	}

	.hero__name {
		font-family: var(--fontFancy);
		margin-bottom: var(--spaceL);
	}

	.focus {
		display: block;
		color: var(--colorPrimary);
	}

	.hero__text {
		color: var(--colorTextSecondary);
		max-width: 40ch;
		margin-bottom: var(--spaceS);
		text-wrap: balance;
	}
	.hero__btn {
		margin-top: var(--spaceL);
		width: 100%;

		display: flex;
		gap: var(--spaceS);
		flex-wrap: wrap;
	}
</style>
