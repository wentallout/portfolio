<script>
	import Button from '$lib/components/Button/Button.svelte';

	let heroEle;
</script>

<section bind:this={heroEle} class="hero-container full-width">
	<div class="hero">
		<div class="hero__model">
			<iframe
				title="spline"
				loading="lazy"
				src="https://my.spline.design/untitled-2cc9162d423383eefcb6068a8fab068b/"
				frameborder="0"
				height="100%" />
		</div>

		<div class="hero__block">
			<div class="name xxl-text">
				Khoa is a
				<span class="focus">UI/UX Designer</span>
				<span class="focus focus-low text-focus-in">+ Frontend Developer</span>
			</div>
			<div class="mission small-text">
				I create practical and user-friendly products that bring real value and enhance people's
				lives.
				<a class="link" href="/about">
					<span>Read more</span>
				</a>
			</div>

			<div class="hero__btn">
				<a class="btn" href="/project">
					<Button
						label="See Full Portfolio"
						labelColor="var(--bg-500)"
						backgroundColor="var(--primary-500)" />
				</a>

				<a class="btn" href="/contact">
					<Button
						label="Contact"
						labelColor="var(--text-color)"
						backgroundColor="var(--bg-400)"
						borderColor="var(--text-color)" />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.link {
		color: var(--accent-500);
	}

	.hero__model {
		overflow: hidden;
		position: absolute;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
	}

	iframe {
		width: 100vw;
		position: absolute;
		z-index: -1;
		top: 0;
		right: 0;
		overflow: visible;
		opacity: 0.2;
		display: none;
	}

	@media (min-width: 992px) {
		iframe {
			display: block;
			width: 50vw;
			opacity: 1;
			z-index: 2;
		}
	}

	.hero-container {
		user-select: none;
	}

	.hero {
		display: flex;
		flex-direction: column;

		/* background-color: var(--bg-400); */
		position: relative;
		overflow: visible;
	}

	.hero__block {
		display: flex;
		padding: var(--space-3xl) var(--page-padding);
		flex-direction: column;
		position: relative;
	}

	.name {
		font-family: 'Fancy';
		margin-bottom: var(--space-l);
	}

	.focus {
		display: block;
		color: var(--primary-500);
	}
	.focus-low {
		color: var(--text-color-disabled);
	}

	.mission {
		color: var(--text-color-low);
		max-width: var(--text-width);
		margin-bottom: var(--space-s);
	}
	.hero__btn {
		margin-top: var(--space-l);

		margin-top: var(--space-m);
		width: 100%;

		max-width: var(--max-width);

		--min: 30ch;
		--gap: var(--space-s);

		display: grid;
		grid-gap: var(--gap);

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}

	@media (min-width: 768px) {
		.hero__btn {
			display: flex;
			gap: var(--space-s);
		}
	}

	.btn {
		display: contents;
	}

	.text-focus-in {
		animation: text-focus-in 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
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
