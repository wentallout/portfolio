<section class="about">
	<h2 class="about__title xl-text">About me</h2>
	<div class="about__block">
		<div class="block">
			<h3 class="block__title base-text">Education & Background</h3>
			<p class="block__text small-text">
				I've studied and worked as a full-stack developer for years but never found the satisfaction
				I needed until I discovered the art of UI/UX Design in 2022. My current focus is UX design -
				providing the best user experience through research, problem-solving, well thought out
				flows, and wireframes.
			</p>
		</div>
		<div class="block">
			<h3 class="block__title base-text">Thought Process</h3>
			<p class="block__text small-text">
				There isn't a miracle solution to solve everything. Every project is unique and always
				riddled with ambiguity and constraints. Fortunately, there's no need to reinvent the wheel,
				I can follow industry guidelines and proven UX frameworks — beginning with a discovery phase
				to understand the problem; followed by prototyping, validating my ideas with users, and
				collaborating with stakeholders throughout the process. Taking these simple steps has never
				failed me and always leads to innovative solutions and successful outcomes.
			</p>
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
		font-family: 'Recoleta Alt';
		font-weight: 600;
	}

	.about__block {
		display: flex;
		flex-direction: column;
		gap: var(--space-s);
		max-width: 60ch;
	}

	.block__title {
		font-weight: 500;
	}

	.block__text {
		color: var(--neutral-700);
	}
</style>
