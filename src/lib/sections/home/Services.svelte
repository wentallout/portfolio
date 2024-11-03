<script>
	import SectionTitle from '$sections/SectionTitle.svelte';

	import ResponsiveWebArt from '$lib/assets/arts/ResponsiveWebArt.svelte';

	import HandHeart from '~icons/ph/hand-heart';
	import Button from '$components/button/Button.svelte';
	import AbTestingArt from '$lib/assets/arts/ABTestingArt.svelte';

	import { CalendarCheck } from '$lib/assets/icons/icons';
	import MouseGlow from '$components/common/MouseGlow.svelte';
</script>

<section>
	<SectionTitle
		sectionDesc="I offer cost-effective web services that deliver outstanding value"
		sectionTitle="Services">
		{#snippet children({ sectionIcon })}
			<HandHeart {...sectionIcon} />
		{/snippet}
	</SectionTitle>
	<div class="service-container custom-border">
		<MouseGlow />
		<div class="service">
			<div class="service__section">
				<div class="service__thumbnail">
					<div class="service__art">
						<ResponsiveWebArt />
					</div>
					<h3 class="service__title text-mid">Website Development</h3>
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
					<h3 class="service__title text-mid">Design/Redesign Website</h3>
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
				backgroundColor="var(--colorBgLayout)"
				borderColor="var(--colorText)"
				glowColor="var(--colorText)"
				label="Book a Call"
				labelColor="var(--colorText)"
				shadowColor="var(--colorTextSecondary)">
				<CalendarCheck />
			</Button>
		</a>
	</div>
</section>

<style>
	.service-container {
		display: flex;
		flex-direction: column;
		gap: var(--spaceL);
		background: var(--colorBgGradientSubtle);
		box-shadow: var(--boxShadow);
		padding: var(--spaceL) var(--spaceXL);
	}

	.service {
		--min: 30ch;
		--gap: var(--spaceXL);

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
		gap: var(--spaceS);
		align-items: center;
		flex-grow: 0;
	}

	.service__section {
		border-radius: var(--borderRadiusLight);

		gap: var(--spaceM);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.service__title {
		margin-bottom: var(--spaceM);
		font-family: var(--fontFancy);
	}

	.service__desc {
		display: flex;
		flex-direction: column;
		gap: var(--spaceXS);
		color: var(--colorTextSecondary);
	}

	.service__btn {
		margin-inline: auto;
	}
</style>
