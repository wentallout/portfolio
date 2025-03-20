<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import Blinkies from '$components/other/Blinkies.svelte';
	import { getKhoaAge } from '$lib/utils/time';
</script>

<PageTitle pageTitle="About Me" />

<section class="about">
	<div class="about__info">
		<h3 class="about__title text-large">Who am I?</h3>
		<div class="about__desc text-small">
			<ul>
				<li>Khoa Nguyen. {getKhoaAge()} y/o.</li>
				<li>Live and work in Ho Chi Minh City, Vietnam.</li>
				<li>~2 years as a Freelance Web Developer/Designer. Extended UX knowledge.</li>
			</ul>
		</div>
	</div>

	<div class="about__info">
		<h3 class="about__title text-large">My mission</h3>
		<div class="about__desc text-small">
			My mission is to create products that simplify complex concepts and make technology accessible
			to all.
		</div>
	</div>

	<div class="about__info">
		<h3 class="about__title text-large">Unique Value Proposition</h3>
		<div class="about__desc text-small">
			I am a flexible and chill person known for seamlessly integrating the latest web design trends
			into my work.
		</div>
	</div>

	<div class="about__info">
		<h3 class="about__title text-large">Hobbies</h3>
		<div class="about__desc text-small">
			Coding, listening to music, gaming, looking at cool UI on behance for inspirations.
		</div>
	</div>

	<div class="about__info">
		<h3 class="about__title text-large">Bookmarks</h3>
		<div class="about__desc text-small">
			<a class="link" href="https://www.are.na/khoa-nguyen-wwy5oc6w38/aesthetics-bbiz2b048_c">
				My Aesthetics</a>

			<a
				class="link"
				href="https://open.spotify.com/playlist/4rVu705DBrGDeNSec40ooy?si=6qAYnTnJT5OKiItwhOk37w">
				My Playlist</a>
		</div>
	</div>
</section>

<Blinkies />

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

	.about__desc a {
		color: var(--color-primary);
		display: block;
	}
</style>
