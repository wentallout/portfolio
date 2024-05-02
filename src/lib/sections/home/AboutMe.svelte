<script>
	import SectionTitle from '$sections/SectionTitle.svelte';
	import SaosContainer from '$components/common/SaosContainer.svelte';
	import Smiley from '~icons/ph/smiley';

	import * as m from '$paraglide/messages';
	import AboutMeArt from '$lib/assets/arts/AboutMeArt.svelte';
</script>

<SaosContainer>
	<section>
		<SectionTitle sectionTitle="About me" let:sectionIcon>
			<Smiley {...sectionIcon} />
		</SectionTitle>
		<div class="about__grid">
			<div class="about__desc">
				<div class="block">
					<h3 class="block__title text-base">My goal</h3>
					<p class="block__text text-small">
						My only goal is to be an independent product maker. I'm tired of writing meaningless
						codes for big tech companies that don't serve anyone so I start learning UI/UX to plan,
						design and develop useful products for everyone.
					</p>
				</div>

				<div class="block">
					<h3 class="block__title text-base">Thought Process</h3>
					<p class="block__text text-small">
						{m.thoughtProcess()}
					</p>
				</div>
			</div>

			<div class="about__img">
				<AboutMeArt />
			</div>
		</div>
	</section>
</SaosContainer>

<style>
	.about__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spaceL);
		align-items: center;
	}

	@media (min-width: 768px) {
		.about__grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.about__img {
		width: 100%;
		height: auto;
	}

	.block__title {
		font-weight: var(--fontWeightLarge);
		color: var(--colorText);
	}

	.about__desc {
		display: flex;
		flex-direction: column;
		gap: var(--spaceL);
		max-width: var(--text-width);
	}

	.block__text {
		font-weight: var(--fontWeightSmall);
		color: var(--colorTextSecondary);
		text-wrap: balance;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: var(--spaceXS);
	}
</style>
