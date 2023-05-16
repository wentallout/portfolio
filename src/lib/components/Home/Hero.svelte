<script>
	import Button from '$components/Button/Button.svelte';
	import HeroScene from '$components/Scenes/HeroScene.svelte';

	import { Canvas } from '@threlte/core';

	import HeroSVG from '$lib/assets/images/home/hero.svg?component';
</script>

<section class="full-width">
	<div class="hero">
		<div class="hero__block">
			<div class="hero__name xxl-text">
				Khoa is a
				<span class="focus">UI/UX Designer</span>
				<span class="focus focus-low text-focus-in mid-text">+ Web Developer</span>
				<span class="focus focus-low text-focus-in mid-text">+ AI Art Enthusiast</span>
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
						label="See Full Portfolio"
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

		<div class="hero__visual">
			<!-- <Canvas>
				<HeroScene />
			</Canvas> -->

			<HeroSVG width="100%" height="100%" />
		</div>
	</div>
</section>

<style>
	section {
		overflow: visible;
	}

	.hero__visual {
		display: none;

		overflow: visible;
		z-index: -1;

		position: absolute;
		top: 0;
		right: var(--page-padding);
	}

	@media (min-width: 992px) {
		.hero__visual {
			display: block;
			width: 500px;
			height: 100%;
			aspect-ratio: 1.4;
			top: 50%;
			right: 0;
			transform: translate(-50%, -50%);
		}
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
	.focus-low {
		color: var(--colorTextTertiary);
	}

	.hero__text {
		color: var(--colorTextSecondary);
		max-width: var(--text-width);
		margin-bottom: var(--spaceSmall);
		text-wrap: balance;
	}
	.hero__btn {
		margin-top: var(--spaceL);
		width: 100%;

		display: flex;
		gap: var(--spaceSmall);
		flex-wrap: wrap;
	}

	.text-focus-in {
		animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
	}

	@keyframes text-focus-in {
		0% {
			filter: blur(12px);
			opacity: 0;
		}
		100% {
			filter: blur(0px);
			opacity: 1;
		}
	}
</style>
