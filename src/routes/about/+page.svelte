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
				<li>~2 years as Web Developer. Trained by the best UX Designers at Mirr Design</li>
			</ul>
		</div>
	</div>

	<div class="about__info">
		<div class="about__title text-large">My mission</div>
		<div class="about__desc text-small">
			My mission is to create intuitive and user-centric designs that simplify complex concepts and
			make technology accessible to all.
		</div>
	</div>

	<div class="about__info">
		<div class="about__title text-large">My story</div>
		<div class="about__desc text-small">
			With a background in frontend development and design, I've honed my skills through hands-on
			experience and learning from challenges, failures, and successes.
		</div>
	</div>

	<div class="about__info">
		<div class="about__title text-large">Unique Value Proposition</div>
		<div class="about__desc text-small">
			I am a flexible and chill person known for seamlessly integrating the latest web design trends
			into my work.
		</div>
	</div>

	<div class="about__info">
		<div class="about__title text-large">My hobbies</div>
		<div class="about__desc text-small">
			<ul>
				<li>Video Games</li>
				<li>Mechanical Keyboard</li>
				<li>A.I</li>
				<li>Music</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.about {
		display: flex;
		flex-direction: column;

		padding: var(--spaceL) 0;
	}

	.about__info {
		display: flex;
		gap: var(--spaceS);
		flex-direction: column;

		padding-top: var(--spaceS);
		padding-bottom: var(--spaceXL);
	}

	.about__title {
		font-weight: var(--fontWeightLarge);
		color: var(--colorText);
		width: 100%;
		font-family: var(--fontFancy);
	}

	.about__desc {
		color: var(--colorTextSecondary);
		width: 100%;
		max-width: var(--text-width);
	}
</style>
