<script>
	import PageTitle from '$components/Common/PageTitle.svelte';

	//get this year in javascript

	let date = new Date();

	let year = date.getFullYear();

	let age = year - 1999;
</script>

<PageTitle pageTitle="About Me" />

<section class="about">
	<div class="about__info">
		<div class="info__title base-text">Who am I?</div>
		<div class="info__description small-text">
			<ul>
				<li>Khoa. {age} y/o.</li>
				<li>Live and work in Ho Chi Minh City, Vietnam.</li>
				<li>1 year Web Developer</li>
				<li>6 months UX Designer</li>
			</ul>
		</div>
	</div>

	<div class="about__info">
		<div class="info__title base-text">My mission</div>
		<div class="info__description small-text">
			My mission is to create intuitive and user-centric designs that simplify complex concepts and
			make technology accessible to all.
		</div>
	</div>

	<div class="about__info">
		<div class="info__title base-text">My story</div>
		<div class="info__description small-text">
			With a background in frontend development and design, I've honed my skills through hands-on
			experience and learning from challenges, failures, and successes.
		</div>
	</div>

	<div class="about__info">
		<div class="info__title base-text">My value</div>
		<div class="info__description small-text">
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
		<div class="info__title base-text">My hobbies</div>
		<div class="info__description small-text">
			<ul>
				<li>Web Design</li>
				<li>A.I</li>
				<li>Music</li>
				<li>Fashion</li>
			</ul>
		</div>
	</div>

	<div class="about__info">
		<div class="info__title base-text">Why I made this website?</div>
		<div class="info__description small-text">
			Mainly to showcase my projects and occasionally share my knowledge.
		</div>
	</div>
</section>

<style>
	.about {
		display: flex;
		flex-direction: column;

		padding: var(--space-l) 0;
	}

	.about__info {
		display: flex;
		gap: var(--space-s);
		flex-direction: column;
		border-bottom: 4px solid var(--colorBorderSecondary);

		padding-top: var(--space-s);
		padding-bottom: var(--space-3xl);
	}

	@media (min-width: 992px) {
		.about__info {
			flex-direction: row;
		}
	}

	.info__title {
		font-weight: 600;
		color: var(--colorText);
		width: 400px;
	}

	.info__description {
		color: var(--colorTextSecondary);
		width: 100%;
		max-width: var(--text-width);
	}
</style>
