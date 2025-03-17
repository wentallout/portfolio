<script>
	import Button from '$components/button/Button.svelte';
	import HeroVisual from '$lib/assets/arts/HeroArt.svelte';
	import { CalendarCheck, ThumbsUp } from '$lib/assets/icons/icons';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	let focusText = ['website', 'app', 'game'];
	let focusIndex = 0;
</script>

<section>
	<div class="full-width">
		<div class="hero g-container">
			<div class="hero__block">
				<div class="text-3xl hero__heading text-trim">
					<div>
						Tailor-made
						<span id="hero__focus" class="hero__focus focus">
							<span class="word">websites</span>
						</span>
						with precision.
					</div>
				</div>
				<div class="hero__text text-base">
					<p>
						Hi, I’m <strong>Khoa Nguyen</strong>. I craft stunning websites that help businesses
						stand out and succeed.
					</p>
					<p>
						Want a modern, powerful website that <strong>drives results</strong>?
					</p>
					<p>Let’s talk!</p>
				</div>

				<div class="hero__btn">
					<a href="#services">
						<Button
							backgroundColor="var(--color-primary)"
							glowColor="var(--color-primary)"
							label="Book a call"
							labelColor="var(--color-black)">
							<ThumbsUp />
						</Button>
					</a>

					<!-- <a href="/contact">
						<Button
							backgroundColor="var(--color-bg-layout)"
							borderColor="var(--color-text)"
							label="Contact"
							labelColor="var(--color-text)"
							shadowColor="var(--color-text-secondary)" />
					</a> -->
				</div>
			</div>
		</div>
		<HeroVisual />
	</div>
</section>

<style>
	.full-width {
		position: relative;
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
		align-items: center;
	}

	.hero__block {
		display: flex;

		padding-top: var(--space-large);
		padding-bottom: var(--space-large);

		flex-direction: column;
		position: relative;
		width: 100%;
	}

	@media (min-width: 768px) {
		.hero__block {
			padding-top: var(--space-xl);
			padding-bottom: var(--space-xl);
			max-width: 60%;
		}
	}

	.hero__heading {
		font-family: var(--font-fancy);
		margin-bottom: var(--space-2xl);
		letter-spacing: var(--tracking-tighter);
	}

	.focus {
		color: var(--color-primary);
		display: block;
	}

	.hero__text {
		margin-bottom: var(--space-small);
		text-wrap: pretty;
		max-width: 65ch;

		display: flex;
		flex-direction: column;
		gap: var(--space-small);
	}

	.hero__btn {
		margin-top: var(--space-large);
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: var(--space-small);
		flex-wrap: wrap;
	}
</style>
