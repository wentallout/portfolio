<script>
	import Button from '$lib/components/Button/Button.svelte';

	let heroEle;
</script>

<section bind:this={heroEle} class="full-width">
	<div class="hero">
		<div class="hero__block">
			<div class="hero__name xxl-text">
				Khoa is a
				<span class="focus">UI/UX Designer</span>
				<span class="focus focus-low text-focus-in">+ Frontend Developer</span>
			</div>
			<div class="hero__text small-text">
				I create practical and user-friendly products that bring real value and enhance people's
				lives.
				<a class="hero__link underline" href="/about">
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
	.hero__link {
		color: var(--accent-500);
	}

	.hero {
		display: flex;
		flex-direction: column;

		position: relative;
		overflow: visible;
	}

	.hero__block {
		display: flex;
		padding: var(--space-3xl) var(--page-padding);
		flex-direction: column;
		position: relative;
	}

	.hero__name {
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

	.hero__text {
		color: var(--text-color-low);
		max-width: var(--text-width);
		margin-bottom: var(--space-s);
	}
	.hero__btn {
		margin-top: var(--space-l);
		width: 100%;

		display: flex;
		gap: var(--space-s);
		flex-wrap: wrap;
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
