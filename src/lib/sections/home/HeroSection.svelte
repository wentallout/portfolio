<script>
	import GlassButton from '$components/button/GlassButton.svelte';
	import PrimaryButton from '$components/button/PrimaryButton.svelte';
	import { textRevealBottom } from '$lib/actions/gsapAnimation';
	import { tooltip } from '$lib/actions/tooltip';
	import HeroVisual from '$lib/assets/arts/HeroArt.svelte';
	import { CalendarCheck, ThumbsUp } from '$lib/assets/icons/icons';
	import { CAL_BOOKING_LINK } from '$lib/constants/personal';
	import { onMount } from 'svelte';

	let focusIndex = 0;
</script>

<section>
	<div class="full-width">
		<div class="hero g-container">
			<div class="hero__block">
				<div class="text-3xl hero__heading text-trim">
					<div use:textRevealBottom={{ delay: 0.1, stagger: 0.03, y: 200 }}>
						<div>Tailor-made</div>
						<div id="hero__focus" class="hero__focus focus">
							<span class="word">websites</span>
						</div>
						<div>with precision.</div>
					</div>
				</div>
				<div class="hero__text text-base">
					<p>
						Hi, I'm <strong>Khoa Nguyen</strong>. I craft stunning websites that help businesses
						stand out and succeed.
					</p>
					<p>
						Want a modern, powerful website that <strong>drives results</strong>?
					</p>
				</div>

				<div class="hero__btn">
					<a href={CAL_BOOKING_LINK}>
						<div use:tooltip={{ position: 'top', text: 'Check out our services' }}>
							<PrimaryButton label="Book a call">
								<ThumbsUp />
							</PrimaryButton>
						</div>
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
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.focus {
		color: var(--color-primary);
		display: block;
	}

	.hero__text {
		margin-bottom: var(--space-s);
		text-wrap: pretty;
		max-width: 65ch;

		display: flex;
		flex-direction: column;
		gap: var(--space-s);
	}

	.hero__btn {
		margin-top: var(--space-large);
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: var(--space-s);
		flex-wrap: wrap;
	}
</style>
