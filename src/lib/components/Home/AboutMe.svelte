<script>
	import SectionTitle from '$components/Common/SectionTitle.svelte';
	import SaosContainer from '$components/Common/SaosContainer.svelte';
	import Smiley from '~icons/ph/smiley';
</script>

<SaosContainer>
	<section>
		<div class="about">
			<SectionTitle sectionTitle="About me" let:sectionIcon>
				<Smiley {...sectionIcon} />
			</SectionTitle>
			<div class="about__block">
				<div class="desc">
					<div class="block">
						<div class="block__title base-text">Background</div>
						<div class="block__text small-text">
							I spent about a year working as a full-stack developer, but eventually I found my true
							passion in UI/UX design. I'm currently focusing on UX design, which involves finding
							ways to make the user experience better through research, flow development, and
							wireframing. It's really rewarding to be able to use my skills to solve problems and
							improve people's experiences.
						</div>
					</div>
					<div class="block">
						<div class="block__title base-text">Thought Process</div>
						<div class="block__text small-text">
							I use industry guidelines and proven UX frameworks to tackle unique project
							challenges. The process includes discovery, prototyping, and user testing while
							collaborating with stakeholders to achieve successful outcomes. Removing unnecessary
							steps in user flows is also important.
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</SaosContainer>

<style>
	.about {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}

	.about__block {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
	}

	.block__title {
		font-weight: var(--fontWeightLarge);
		color: var(--colorText);
	}

	.desc {
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
