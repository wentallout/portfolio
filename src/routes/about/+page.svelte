<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import WorldMap from '$lib/assets/icons/WorldMap.svelte';

	const date = new Date();
	const year = date.getFullYear();
	const age = year - 1999;
</script>

<PageTitle pageTitle="About Me" />

<div class="about__map">
	<WorldMap />
</div>

<section class="about">
	<div class="about__info">
		<div class="about__title text-large">Who am I?</div>
		<div class="about__desc text-small">
			<ul>
				<li>Khoa. {age} y/o.</li>

				<li>Live and work in Ho Chi Minh City, Vietnam.</li>
				<li>1 year Web Developer</li>
				<li>6 months UX Designer</li>
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
		<div class="about__title text-large">My value</div>
		<div class="about__desc text-small">
			As a UI/UX designer with a frontend background, I bring a unique blend of creative design
			skills and technical expertise. I am passionate about crafting intuitive and delightful user
			experiences, rooted in research-driven insights and iterative design processes. With a keen
			eye for detail, I create polished and pixel-perfect user interfaces, bridging the gap between
			design and development. I am a strong communicator, team player, and skilled in
			industry-leading design tools. I am confident that my passion for UI/UX design and
			collaborative mindset make me a valuable asset to any team.
		</div>
	</div>

	<div class="about__info">
		<div class="about__title text-large">Unique Value Proposition</div>
		<div class="about__desc text-small">
			I am a flexible and chill developer/designer known for seamlessly integrating the latest web
			design trends into my work. My adaptability and laid-back approach foster a collaborative
			environment where I enjoy engaging with fellow designers, offering constructive feedback, and
			staying on the cutting edge of industry developments. Through my unique journey, I bring not
			only technical expertise but also a fresh perspective that results in visually appealing
			designs and user-centric solutions.
		</div>
	</div>

	<div class="about__info">
		<div class="about__title text-large">My hobbies</div>
		<div class="about__desc text-small">
			<ul>
				<li>Web Design</li>
				<li>Mechanical Keyboard</li>
				<li>Blockchain</li>
				<li>A.I</li>
				<li>Music</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.about__map {
		width: 100%;
		max-height: 560px;
	}

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
	}

	.about__desc {
		color: var(--colorTextSecondary);
		width: 100%;
		max-width: var(--text-width);
	}
</style>
