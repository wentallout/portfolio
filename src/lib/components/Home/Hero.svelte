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
						backgroundColor="var(--colorTextQuaternary)"
						borderColor="var(--colorText)" />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero__link {
		display: block;
		color: var(--colorPrimary);
	}

	.hero__btn a {
		display: contents;
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
		font-family: var(--fancy-font);
		margin-bottom: var(--space-l);
	}

	.focus {
		display: block;
		color: var(--colorPrimary);
	}
	.focus-low {
		color: var(--colorTextQuaternary);
	}

	.hero__text {
		color: var(--colorTextSecondary);
		max-width: var(--text-width);
		margin-bottom: var(--space-s);
		text-wrap: balance;
	}
	.hero__btn {
		margin-top: var(--space-l);
		width: 100%;

		display: flex;
		gap: var(--space-s);
		flex-wrap: wrap;
	}

	.text-focus-in {
		animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
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
