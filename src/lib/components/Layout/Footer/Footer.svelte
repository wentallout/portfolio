<script>
	import PhysicsCanvas from '$lib/components/Layout/Footer/PhysicsCanvas.svelte';
	import SaosContainer from '$lib/components/Common/SaosContainer.svelte';
	import ChainDivider from '$components/Layout/Other/ChainDivider.svelte';
	import FooterEnd from '$components/Layout/Footer/FooterEnd.svelte';
	import ExLink from '$components/Common/ExLink.svelte';
	import Marquee from '$lib/components/Layout/Other/Marquee.svelte';
	import { navItems } from '$lib/config.js';

	// ICONS
	import Envelope from '~icons/ph/envelope';
	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import InstagramLogo from '~icons/ph/instagram-logo';
	import GitHubLogo from '~icons/ph/github-logo';
	import Phone from '~icons/ph/phone';
	import MapPin from '~icons/ph/map-pin';
</script>

<SaosContainer>
	<footer class="footer text-small">
		<PhysicsCanvas />
		<ChainDivider />
		<img class="footer__logo" alt="footer logo" width="24" height="24" src="/images/coolLogo.svg" />

		<div class="global-container">
			<!-- <img class="footer__bg" src={FooterBg} alt="" /> -->
			<div class="footer__list">
				<div class="list">
					<div class="list__title">About me</div>
					<ul class="list__nav">
						<li class="nav-list__item">
							I creates superb affordable websites and apps for small businesses.
						</li>
					</ul>
				</div>

				<div class="list">
					<div class="list__title">Navigate</div>
					<ul class="list__nav">
						{#each navItems as navItem}
							<li class="nav-list__item">
								<a href={navItem.path}>{navItem.title}</a>
							</li>
						{/each}
					</ul>
				</div>

				<div class="list">
					<div class="list__title">Other</div>
					<ul class="list__nav">
						<li class="nav-list__item">
							<a href="/resource/music">Music</a>
						</li>
						<li class="nav-list__item">
							<a href="/resource/tool">REM Converter</a>
						</li>
						<li class="nav-list__item">
							<a href="/rss.xml">RSS</a>
						</li>
					</ul>
				</div>

				<div class="list">
					<div class="list__title">Contact</div>
					<ul class="list__nav">
						<li class="nav-list__item">
							<ExLink href="https://goo.gl/maps/GLt6uhYWwU91fXz49">
								<div class="nav-list__link">
									<MapPin width="24" height="24" />
									Ho Chi Minh City
								</div>
							</ExLink>
						</li>

						<li class="nav-list__item">
							<ExLink href="mailto:wentallout@gmail.com">
								<div class="nav-list__link">
									<Envelope width="24" height="24" />
									wentallout@gmail.com
								</div>
							</ExLink>
						</li>
						<li class="nav-list__item">
							<ExLink href="tel:+84929066331">
								<div class="nav-list__link">
									<Phone width="24" height="24" />
									+84 929066331
								</div>
							</ExLink>
						</li>
						<li class="nav-list__item">
							<ExLink href="https://www.linkedin.com/in/wentallout">
								<div class="nav-list__link">
									<LinkedinLogo width="24" height="24" />Linkedin
								</div>
							</ExLink>
						</li>
						<li class="nav-list__item">
							<ExLink href="https://www.instagram.com/wentallout/saved">
								<div class="nav-list__link">
									<InstagramLogo width="24" height="24" />
									Instagram
								</div>
							</ExLink>
						</li>
						<li class="nav-list__item">
							<ExLink href="https://github.com/wentallout">
								<div class="nav-list__link">
									<GitHubLogo width="24" height="24" />
									GitHub
								</div>
							</ExLink>
						</li>
					</ul>
				</div>
			</div>

			<FooterEnd />
			<img class="footer__deco" alt="footer decoration" src="/images/footer-skyline.webp" />
		</div>
	</footer>
</SaosContainer>
<Marquee />

<style>
	:global([color-scheme='light'] .bg) {
		display: none;
	}

	.nav-list__link {
		display: flex;
		flex-direction: row;
		gap: var(--spaceXS);
	}

	.footer__deco {
		background-repeat: repeat-x;
		height: 52px;
		width: 100%;
		z-index: 2;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.footer {
		display: flex;

		flex-direction: column;
		width: 100%;

		padding: var(--spaceXL) 0;
		/* Position */
		position: relative;
		/* Width */
		max-width: 100vw;
		position: relative;
		overflow: hidden;

		background-image: url('/images/grain.png');
		background-position: 0 0;
		background-size: 300px 300px;
		background-repeat: auto;
	}

	.footer__list {
		overflow: hidden;
		--min: 20ch;
		--gap: var(--spaceL);

		display: grid;
		grid-gap: var(--gap);

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

		border-bottom: 1px solid var(--colorBorder);
		margin-bottom: var(--spaceS);
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: var(--spaceM);
	}

	.list__title {
		font-family: var(--fontFancy);
		color: var(--colorTextSecondary);
		font-size: var(--fontSizeBase);
		padding-bottom: var(--space2XS);
		border-bottom: 2px solid transparent;
		border-image: linear-gradient(to right, var(--colorTextTertiary), transparent) 1 0%;
	}

	.list__nav {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: flex-start;
		margin: 0;
		margin-bottom: var(--spaceL);
		flex-wrap: wrap;
		gap: var(--space2XS);
	}

	.nav-list__item {
		display: flex;
		flex-direction: row;
		/* max-width: 30ch; */
		font-weight: var(--fontWeightSmall);
		transition: 0.3s;
		color: var(--colorText);
		gap: var(--space3XS);
	}

	.nav-list__item a:hover {
		color: var(--colorPrimary);
	}

	.footer__logo {
		position: absolute;
		left: 0;
		top: 0;
		width: auto;
		height: 100%;
		aspect-ratio: 1 / 1;
		opacity: 0.1;
		user-select: none;
	}
</style>
