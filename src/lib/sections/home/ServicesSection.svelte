<script>
	import PrimaryButton from '$components/button/PrimaryButton.svelte';
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import AbTestingArt from '$lib/assets/arts/ABTestingArt.svelte';
	import ResponsiveWebArt from '$lib/assets/arts/ResponsiveWebArt.svelte';
	import { CalendarCheck, HandHeart, ThumbsUp } from '$lib/assets/icons/icons';
	import { CAL_BOOKING_LINK } from '$lib/constants/personal';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
</script>

<section>
	<SectionTitle sectionTitle="Services">
		{#snippet children({ sectionIcon })}
			<HandHeart {...sectionIcon} />
		{/snippet}
	</SectionTitle>
	<div class="services-grid">
		<div class="services-col services-col--info">
			<MouseGlow />
			<h3 class="service__title text-large">Website Design / Development</h3>
			<ul>
				<li>✅ Landing page, resume, events, non-profits</li>
				<li>⚙️ Built with <strong>HTML, CSS, JS</strong></li>
				<li>📱 <strong>Responsive:</strong> Works on all screens</li>
				<li>🚀 <strong>Lightweight:</strong> No bloated libraries</li>
				<li>🎯 Boosts <strong>brand recognition</strong></li>
				<li>👌 Great <strong>UX & accessibility</strong></li>
				<li>🔧 Easy <strong>maintenance & scaling</strong></li>
			</ul>
			<a href={CAL_BOOKING_LINK}>
				<PrimaryButton label="Book a call">
					<ThumbsUp />
				</PrimaryButton>
			</a>
		</div>

		<div class="services-col">
			<div class="service-icon">
				<ResponsiveWebArt />
			</div>

			<div class="service-icon">
				<AbTestingArt />
			</div>
		</div>
	</div>
</section>

<style>
	.services-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-large);
		border-radius: var(--border-radius-light);
		position: relative;
	}

	.services-col {
		display: flex;
		flex-direction: column;
		gap: var(--space-mid);
		padding: var(--space-card);
		overflow: hidden;
	}

	.services-col--info {
		background: var(--color-bg-gradient-subtle);
		box-shadow: var(--boxShadow);
		justify-content: space-between;
		border-radius: var(--border-radius);
	}

	@media (min-width: 992px) {
		.services-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.service__title {
		font-weight: 600;
	}

	.service-icon {
		height: 200px;
		object-fit: cover;
	}
</style>
