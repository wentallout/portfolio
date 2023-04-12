<script>
	import Button from '$lib/components/Button/Button.svelte';

	let introEle;
</script>

<section bind:this={introEle} class="intro-container full-width">
	<div class="intro">
		<div class="intro__model">
			<iframe
				src="https://my.spline.design/untitled-2cc9162d423383eefcb6068a8fab068b/"
				frameborder="0"
				height="100%" />
		</div>

		<div class="intro__block">
			<div class="name xxl-text">
				Khoa is a <span class="focus">UI/UX Designer</span>
			</div>
			<div class="mission small-text">
				I create practical and user-friendly products that bring real value and enhance people's
				lives.
			</div>

			<div class="intro__btn">
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
	.intro__model {
		overflow: hidden;
		position: absolute;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
	}

	iframe {
		width: 50vw;
		position: absolute;
		z-index: -1;
		top: 0;
		right: 0;
		overflow: visible;
		opacity: 0.5;
	}

	@media (min-width: 992px) {
		iframe {
			opacity: 1;
			z-index: 2;
		}
	}

	.intro-container {
		user-select: none;
	}

	.intro {
		display: flex;
		flex-direction: column;

		/* background-color: var(--bg-400); */
		position: relative;
		overflow: visible;
	}

	.intro__block {
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
		color: var(--primary-500);
	}

	.mission {
		color: var(--text-color-low);
		max-width: var(--text-width);
		margin-bottom: var(--space-s);
	}
	.intro__btn {
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
		.intro__btn {
			display: block;
		}
	}

	.btn {
		display: contents;
	}
</style>
