<script>
	import NotAI from '$lib/components/Layout/NotAI.svelte';
	import FooterEnd from '$lib/components/Layout/FooterEnd.svelte';
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import Marquee from '$lib/components/Common/Marquee.svelte';
	import { navItems } from '$lib/config.js';

	// ICONS
	import Envelope from '~icons/ph/envelope';
	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import InstagramLogo from '~icons/ph/instagram-logo';
	import GitHubLogo from '~icons/ph/github-logo';
	import Phone from '~icons/ph/phone';
	import MapPin from '~icons/ph/map-pin';
</script>

<footer class="footer small-text">
	<div class="list-container">
		<div class="list">
			<div class="list__title">About me</div>
			<ul class="nav-list">
				<li class="nav-list__item">
					Designer in Ho Chi Minh City, Vietnam that designs superb affordable websites and apps for
					small businesses and non-profits alike.
				</li>
			</ul>
		</div>

		<div class="list">
			<div class="list__title">Navigate</div>
			<ul class="nav-list">
				{#each navItems as navItem}
					<li class="nav-list__item">
						<a href={navItem.path}>{navItem.title}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="list">
			<div class="list__title">Social</div>
			<ul class="nav-list">
				<li class="nav-list__item">
					<ExLink href="https://www.linkedin.com/in/wentallout">
						<LinkedinLogo width="24" height="24" />Linkedin</ExLink>
				</li>
				<li class="nav-list__item">
					<ExLink href="https://www.instagram.com/wentallout/saved">
						<InstagramLogo width="24" height="24" />
						Instagram
					</ExLink>
				</li>
				<li class="nav-list__item">
					<ExLink href="https://github.com/wentallout">
						<GitHubLogo width="24" height="24" />
						GitHub
					</ExLink>
				</li>
			</ul>
		</div>

		<div class="list">
			<div class="list__title">Contact</div>
			<ul class="nav-list">
				<li class="nav-list__item">
					<ExLink href="https://goo.gl/maps/GLt6uhYWwU91fXz49">
						<MapPin width="24" height="24" />
						Ho Chi Minh City</ExLink>
				</li>

				<li class="nav-list__item">
					<ExLink href="mailto:wentallout@gmail.com">
						<Envelope width="24" height="24" />
						wentallout@gmail.com</ExLink>
				</li>
				<li class="nav-list__item">
					<ExLink href="tel:+84929066331">
						<Phone width="24" height="24" />
						+84 929066331</ExLink>
				</li>
			</ul>
		</div>
	</div>

	<NotAI />
	<FooterEnd />
</footer>
<Marquee />

<style>
	.footer {
		display: flex;
		flex-direction: column;
		width: 100%;

		padding: var(--space-xl) var(--page-padding);
		/* Position */
		position: relative;
		/* Width */
		max-width: 100vw;

		background: linear-gradient(0deg, var(--bg-300) 0%, var(--bg-500) 100%);

		border-top: 1px solid var(--bg-400);
	}
	.list-container {
		overflow: hidden;
		--min: 20ch;
		--gap: var(--space-l);

		display: grid;
		grid-gap: var(--gap);

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}

	.list__title {
		font-family: 'Fancy';
		color: var(--text-color);
		font-size: var(--font-size-base);

		border-bottom: 4px solid transparent;
		border-image: linear-gradient(to right, var(--text-color-disabled), transparent) 1 0%;
	}

	.nav-list {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: flex-start;
		margin: 0;
		margin-bottom: var(--space-l);
		flex-wrap: wrap;
		gap: var(--space-2xs);
	}

	.nav-list__item {
		display: flex;
		padding-left: 0;
		padding-right: var(--space-xs);
		max-width: 30ch;
		font-weight: 400;
		transition: 0.3s;
		color: var(--text-color-low);
		gap: var(--space-3xs);
	}

	.nav-list__item:hover {
		color: var(--primary-500);
	}
</style>
