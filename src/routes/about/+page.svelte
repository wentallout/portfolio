<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import { getKhoaAge } from '$lib/utils/time';
</script>

<PageTitle pageTitle="About Me" />

<section class="about">
	<div class="about__info">
		<div class="about__title text-large">Who am I?</div>
		<div class="about__desc text-small">
			<ul>
				<li>Khoa Nguyen. {getKhoaAge()} y/o.</li>
				<li>Live and work in Ho Chi Minh City, Vietnam.</li>
				<li>
					~2 years as a Freelance Web Developer/Designer. Trained by the best UX Designers at Mirr
					Design
				</li>
			</ul>
		</div>
	</div>

	<div class="about__info">
		<div class="about__title text-large">My mission</div>
		<div class="about__desc text-small">
			My mission is to create products that simplify complex concepts and make technology accessible
			to all.
		</div>
	</div>

	<div class="about__info">
		<div class="about__title text-large">Unique Value Proposition</div>
		<div class="about__desc text-small">
			I am a flexible and chill person known for seamlessly integrating the latest web design trends
			into my work.
		</div>
	</div>
</section>

<style>
	.about {
		display: flex;
		flex-direction: column;

		padding: var(--space-large) 0;
	}

	.about__info {
		display: flex;
		gap: var(--space-small);
		flex-direction: column;

		padding-top: var(--space-small);
		padding-bottom: var(--space-xl);
	}

	.about__title {
		font-weight: var(--fontWeightLarge);
		color: var(--color-text);
		width: 100%;
		font-family: var(--font-fancy);
	}

	.about__desc {
		color: var(--color-text-secondary);
		width: 100%;
		max-width: var(--text-width);
	}
</style>
