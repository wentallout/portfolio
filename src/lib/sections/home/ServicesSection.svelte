<script>
	import Button from '$components/button/Button.svelte';
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import AbTestingArt from '$lib/assets/arts/ABTestingArt.svelte';
	import ResponsiveWebArt from '$lib/assets/arts/ResponsiveWebArt.svelte';
	import { CalendarCheck, HandHeart } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/SectionTitle.svelte';
</script>

<section>
	<SectionTitle
		sectionDesc="Need a website? Let’s talk! If we’re a great fit, I’ll provide a time & cost estimate."
		sectionTitle="Services">
		{#snippet children({ sectionIcon })}
			<HandHeart {...sectionIcon} />
		{/snippet}
	</SectionTitle>
	<div class="service-container fancy-border">
		<MouseGlow />
		<div class="service">
			<div class="service__section">
				<div class="service__thumbnail">
					<div class="service__art">
						<ResponsiveWebArt />
					</div>
					<h3 class="service__title text-mid text-trim">Website Development</h3>
				</div>

				<ul class="service__desc text-small">
					<li class="service__point">
						Including: Landing Page, Portfolio/Resume, Marketing, Event, Non-profit
					</li>
					<li class="service__point">
						Written using
						<strong>HTML, CSS, JS </strong>
					</li>

					<li class="service__point">
						<strong>Responsive:</strong> Looks great on all screen sizes
					</li>

					<li class="service__point">
						<strong>Lightweight: </strong> no more heavy libraries that slow down loading speed
					</li>
				</ul>
			</div>

			<div class="service__section">
				<div class="service__thumbnail">
					<div class="service__art">
						<AbTestingArt />
					</div>
					<h3 class="service__title text-mid">Website Design/Redesign</h3>
				</div>

				<ul class="service__desc text-small">
					<li class="service__point">
						Consistent design system to improve <strong>brand recognition and marketing</strong>
					</li>
					<li class="service__point">
						Fantastic <strong>user experience and accessibility</strong>
					</li>
					<li class="service__point">Easier <strong>maintenance and scalability</strong></li>
				</ul>
			</div>
		</div>
		<a class="service__btn" href="https://cal.com/wentallout/web">
			<Button
				backgroundColor="var(--color-bg-layout)"
				borderColor="var(--color-text)"
				glowColor="var(--color-text)"
				label="Book a Call"
				labelColor="var(--color-text)"
				shadowColor="var(--color-text-secondary)">
				<CalendarCheck />
			</Button>
		</a>
	</div>
</section>

<style>
	.service-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-large);
		background: var(--color-bg-gradient-subtle);
		box-shadow: var(--boxShadow);
		padding: var(--space-card);

		position: relative;
		border-radius: var(--border-radius-light);
		border: 1px solid var(--color-border-secondary);
	}

	.service {
		--min: 30ch;
		--gap: var(--space-2xl);

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}

	.service__art {
		width: auto;
		height: 200px;
	}

	.service__thumbnail {
		display: flex;
		flex-direction: column;
		gap: var(--space-small);
		align-items: center;
		flex-grow: 0;
	}

	.service__section {
		border-radius: var(--border-radius-light);

		gap: var(--space-mid);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.service__title {
		margin-bottom: var(--space-small);
		font-family: var(--font-fancy);
	}

	.service__desc {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		color: var(--color-text-secondary);
	}

	.service__btn {
		margin-inline: auto;
	}
</style>
