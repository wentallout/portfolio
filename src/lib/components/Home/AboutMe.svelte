<script>
	import HomeSectionTitle from '$lib/components/Home/HomeSectionTitle.svelte';
	import SaosContainer from '$lib/components/Common/SaosContainer.svelte';
</script>

<SaosContainer>
	<section>
		<div class="about">
			<HomeSectionTitle title="About me" />

			<div class="about__block">
				<div class="desc">
					<div class="block">
						<div class="block__title base-text">Education & Background</div>
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
							Every project is different and has its own set of challenges, but that's okay! Instead
							of starting from scratch, I follow industry guidelines and use proven UX frameworks to
							guide me. This usually starts with a discovery phase where I try to understand the
							problem, and then I move on to prototyping and testing my ideas with users. It's also
							important to work with stakeholders throughout the process. By following these steps,
							I've always been able to come up with innovative solutions and achieve successful
							outcomes.
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
		border-radius: var(--border-radius-light);
	}

	.block__title {
		font-weight: 600;
		color: var(--text-color);
	}

	.desc {
		display: flex;
		flex-direction: column;
		gap: var(--space-l);
		max-width: var(--text-width);
	}

	.block__text {
		font-weight: 400;
		color: var(--text-color-low);
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
</style>
