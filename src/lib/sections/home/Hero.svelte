<script>
	import HeroVisual from '$lib/assets/arts/HeroArt.svelte';
	import Button from '$components/button/Button.svelte';
	import * as m from '$paraglide/messages';
	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	let focusText = ['website', 'app', 'game'];
	let focusIndex = 0;

	onMount(() => {
		let focusElement = document.querySelector('.hero__focus');
		function cycleWords() {
			gsap.to(focusElement, {
				opacity: 0,
				duration: 0.25,
				onComplete: () => {
					focusElement.textContent = focusText[focusIndex];
					// Use gsap.fromTo() to animate the glow
					gsap.fromTo(
						focusElement,
						{
							textShadow: '0 0 50px currentColor', // Start state of the glow
							opacity: 0
						},
						{
							textShadow: '0 0 10px currentColor', // End state of the glow
							opacity: 1,
							ease: 'power2.out',
							duration: 0.25,
							onComplete: () => {
								// Cycle the words after the animation is complete
								focusIndex = (focusIndex + 1) % focusText.length;
								setTimeout(cycleWords, 1000);
							}
						}
					);
				}
			});
		}
		cycleWords();
	});
</script>

<section>
	<div class="full-width">
		<div class="hero pad">
			<div class="hero__block">
				<div class="text-3xl hero__heading">
					<div>
						Tailor-made
						<span id="hero__focus" class="hero__focus focus">
							<span class="word">website</span>
							<span class="word">app</span>
							<span class="word">game</span>
						</span>
						for your business
					</div>
				</div>
				<div class="hero__text text-base">
					{m.heroText()}
				</div>

				<div class="hero__btn">
					<a href="#services">
						<Button
							backgroundColor="var(--colorPrimary)"
							glowColor="var(--colorPrimary)"
							label="Book a Meeting"
							labelColor="var(--colorBlack)" />
					</a>

					<a href="/contact">
						<Button
							backgroundColor="var(--colorBgLayout)"
							borderColor="var(--colorText)"
							label="Contact"
							labelColor="var(--colorText)"
							shadowColor="var(--colorTextSecondary)" />
					</a>
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

		padding-top: var(--space3XL);
		padding-bottom: var(--space3XL);

		flex-direction: column;
		position: relative;
		width: 100%;
	}

	@media (min-width: 768px) {
		.hero__block {
			max-width: 60%;
		}
	}

	.hero__heading {
		font-family: var(--fontFancy);
		margin-bottom: var(--spaceL);
		letter-spacing: var(--tracking-tighter);
	}

	.focus {
		color: var(--colorPrimary);
		display: block;
	}

	.hero__text {
		margin-bottom: var(--spaceS);
		text-wrap: balance;
		max-width: 40ch;
		color: var(--colorTextSecondary);
	}
	.hero__btn {
		margin-top: var(--spaceL);
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: var(--spaceS);
		flex-wrap: wrap;
	}
</style>
