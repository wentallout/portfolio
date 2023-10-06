<script>
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';
	import SaosContainer from '$components/Common/SaosContainer.svelte';
	import Smiley from '~icons/ph/smiley';

	import AboutMeImg from '$lib/assets/images/home/aboutMe.webp';
</script>

<SaosContainer>
	<section>
		<SectionTitle sectionTitle="About me" let:sectionIcon>
			<Smiley {...sectionIcon} />
		</SectionTitle>
		<div class="about__grid">
			<div class="about__desc">
				<div class="block">
					<h3 class="block__title text-base">Background</h3>
					<p class="block__text text-small">
						I spent about a year working as a full-stack developer, but eventually I found my true
						passion in UI/UX design. I'm currently focusing on UX design, which involves finding
						ways to make the user experience better through research, flow development, and
						wireframing. It's really rewarding to be able to use my skills to solve problems and
						improve people's experiences.
					</p>
				</div>
				<div class="block">
					<h3 class="block__title text-base">Thought Process</h3>
					<p class="block__text text-small">
						I use industry guidelines and proven UX frameworks to tackle unique project challenges.
						The process includes discovery, prototyping, and user testing while collaborating with
						stakeholders to achieve successful outcomes.
					</p>
				</div>
			</div>
			<img class="about__img" src={AboutMeImg} alt="about Khoa" />
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
			grid-template-columns: 1fr auto;
		}
	}

	.about__img {
		height: 100%;
		aspect-ratio: 1/1;
		max-width: 300px;
		flex-grow: 1;
		border-radius: var(--borderRadiusLight);
		filter: grayscale(1) brightness(0.7);
		transition: var(--transition);
	}

	section:hover .about__img {
		filter: grayscale(0);
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
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: var(--spaceXS);
	}
</style>
