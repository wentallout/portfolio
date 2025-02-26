<script>
	import Button from '$components/button/Button.svelte';
	import HeroVisual from '$lib/assets/arts/HeroArt.svelte';
	import { CalendarCheck, ThumbsUp } from '$lib/assets/icons/icons';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	let focusText = ['website', 'app', 'game'];
	let focusIndex = 0;

	onMount(() => {
		let focusElement = document.querySelector('.hero__focus');
		function cycleWords() {
			gsap.to(focusElement, {
				duration: 0.25,
				onComplete: () => {
					focusElement.textContent = focusText[focusIndex];
					// Use gsap.fromTo() to animate the glow
					gsap.fromTo(
						focusElement,
						{
							opacity: 0,
							textShadow: '0 0 50px currentColor' // Start state of the glow
						},
						{
							duration: 0.25,
							ease: 'power2.out',
							onComplete: () => {
								// Cycle the words after the animation is complete
								focusIndex = (focusIndex + 1) % focusText.length;
								setTimeout(cycleWords, 1000);
							},
							opacity: 1,
							textShadow: '0 0 10px currentColor' // End state of the glow
						}
					);
				},
				opacity: 0
			});
		}
		cycleWords();
	});
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
							<span class="word">apps</span>
						</span>
						with precision.
					</div>
				</div>
				<div class="hero__text text-base">
					Hi, I'm <strong>Khoa Nguyen</strong>. I help people create amazing digital products.
				</div>

				<div class="hero__btn">
					<a href="#services">
						<Button
							backgroundColor="var(--color-primary)"
							glowColor="var(--color-primary)"
							label="Make it happen!"
							labelColor="var(--colorBlack)">
							<ThumbsUp />
						</Button>
					</a>

					<a href="/contact">
						<Button
							backgroundColor="var(--color-bg-layout)"
							borderColor="var(--color-text)"
							label="Contact"
							labelColor="var(--color-text)"
							shadowColor="var(--color-text-secondary)" />
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

		padding-top: var(--spaceL);
		padding-bottom: var(--spaceL);

		flex-direction: column;
		position: relative;
		width: 100%;
	}

	@media (min-width: 768px) {
		.hero__block {
			padding-top: var(--spaceXL);
			padding-bottom: var(--spaceXL);
			max-width: 60%;
		}
	}

	.hero__heading {
		font-family: var(--fontFancy);
		margin-bottom: var(--spaceL);
		letter-spacing: var(--tracking-tighter);
	}

	.focus {
		color: var(--color-primary);
		display: block;
	}

	.hero__text {
		margin-bottom: var(--spaceS);
		text-wrap: balance;
		max-width: 40ch;
		color: var(--color-text-secondary);

		& strong {
			color: var(--color-primary);
		}
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
