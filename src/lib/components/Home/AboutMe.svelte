<section>
	<div class="about">
		<h2 class="about__title xl-text">About me</h2>
		<div class="about__block">
			<div class="block">
				<h3 class="block__title base-text">Education & Background</h3>
				<p class="block__text small-text">
					I spent about a year working as a full-stack developer, but eventually I found my true
					passion in UI/UX design. I'm currently focusing on UX design, which involves finding ways
					to make the user experience better through research, flow development, and wireframing.
					It's really rewarding to be able to use my skills to solve problems and improve people's
					experiences.
				</p>
			</div>
			<div class="block">
				<h3 class="block__title base-text">Thought Process</h3>
				<p class="block__text small-text">
					Every project is different and has its own set of challenges, but that's okay! Instead of
					starting from scratch, I follow industry guidelines and use proven UX frameworks to guide
					me. This usually starts with a discovery phase where I try to understand the problem, and
					then I move on to prototyping and testing my ideas with users. It's also important to work
					with stakeholders throughout the process. By following these steps, I've always been able
					to come up with innovative solutions and achieve successful outcomes.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;

		gap: var(--space-m);
	}

	.about__title {
		font-family: var(--fancy-font);
		font-weight: 600;
	}

	.about__block {
		display: flex;
		flex-direction: column;
		gap: var(--space-l);
		max-width: 60ch;

		border-radius: var(--border-radius-light);
	}

	.block__title {
		font-weight: 600;
		color: var(--text);
	}

	.block__text {
		font-weight: 400;
		color: var(--text-low);
	}
</style>
