<script>
	import SaosContainer from '$lib/components/Common/SaosContainer.svelte';
	import ChainDivider from '$components/Layout/Other/ChainDivider.svelte';
	import FooterEnd from '$components/Layout/Footer/FooterEnd.svelte';
	import ExLink from '$components/Common/ExLink.svelte';
	import Marquee from '$lib/components/Layout/Footer/Marquee.svelte';
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
		<div class="bg" />
		<div class="global-container">
			<ChainDivider />
			<!-- <img class="footer__bg" src={FooterBg} alt="" /> -->
			<div class="footer__list">
				<div class="list">
					<div class="list__title">About me</div>
					<ul class="list__nav">
						<li class="nav-list__item footer__logo">
							<img alt="footer logo" width="24" height="24" src="/images/coolLogo.svg" />
							<span style="color:var(--colorPrimary);font-weight:600">entallout</span>
						</li>
						<li class="nav-list__item">
							Designer in Ho Chi Minh City, Vietnam that designs superb affordable websites and apps
							for small businesses and non-profits alike.
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
							<a href="/rss.xml">RSS</a>
						</li>
						<li class="nav-list__item">
							<a href="/sitemap.xml">Sitemap</a>
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
	.bg {
		height: 100% !important;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background: url('/images/bg_news.jpg') bottom center no-repeat;
		background-size: cover;
		z-index: -1;
	}

	:global([color-scheme='light'] .bg) {
		filter: invert();
	}

	.nav-list__link {
		display: flex;
		flex-direction: row;
		gap: var(--spaceXS);
	}

	.footer__deco {
		position: absolute;
		bottom: 0;
		left: 0;
		background-repeat: repeat-x;
		height: 52px;
		width: 100%;
		z-index: 2;
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

		background-color: linear-gradient(
			0deg,
			var(--colorBgContainer) 0%,
			var(--colorBgElevated) 100%
		);

		background-image: radial-gradient(var(--colorBgElevated) 1px, transparent 1px);
		background-size: 5px 5px;
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
		color: var(--colorText);
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
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
	}
</style>
