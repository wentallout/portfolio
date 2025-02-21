<script>
	import ExLink from '$components/common/ExLink.svelte';
	import StarBg from '$components/common/StarBg.svelte';
	import FooterCopyright from '$components/layout/footer/FooterCopyright.svelte';
	import Marquee from '$components/layout/other/Marquee.svelte';
	import {
		EnvelopeSimple,
		GitHubLogo,
		InstagramLogo,
		LinkedinLogo,
		MapPin,
		Phone
	} from '$lib/assets/icons/icons';
	import { navItems } from '$lib/config.js';
</script>

<footer class="footer text-small">
	<StarBg />

	<img class="footer__koi" alt="koi" src="/images/koi.svg" />

	<div class="g-container">
		<div class="footer__list">
			<div class="list">
				<div class="list__title">About</div>
				<ul class="list__nav">
					<li class="nav-list__link">Affordable websites for your business.</li>
					<li class="nav-list__link">
						<a class="link" href="/about">More about me </a>
					</li>
				</ul>
			</div>

			<div class="list">
				<div class="list__title">Navigate</div>
				<ul class="list__nav">
					{#each navItems as navItem}
						<li class="nav-list__link">
							<a href={navItem.path}>{navItem.title}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="list">
				<div class="list__title">Other</div>
				<ul class="list__nav">
					<li class="nav-list__link">
						<a href="/music">Music</a>
					</li>
					<li class="nav-list__link">
						<a href="/resource/tool">REM Converter</a>
					</li>
					<li class="nav-list__link">
						<a href="/rss.xml">RSS</a>
					</li>
					<li class="nav-list__link">
						<a href="https://dnsrecords.io/wentallout.io.vn">DNS</a>
					</li>
					<li class="nav-list__link">
						<a href="/privacy">Privacy Policy</a>
					</li>
				</ul>
			</div>

			<div class="list">
				<div class="list__title">Contact</div>
				<ul class="list__nav">
					<li>
						<ExLink href="https://goo.gl/maps/GLt6uhYWwU91fXz49">
							<div class="nav-list__link">
								<MapPin />
								Ho Chi Minh City
							</div>
						</ExLink>
					</li>

					<li>
						<ExLink href="mailto:wentallout@gmail.com">
							<div class="nav-list__link">
								<EnvelopeSimple />
								<div class="">
									<span>wentallout@</span>
									<b class="obf">j</b>
									<span>gmail.com</span>
								</div>
							</div>
						</ExLink>
					</li>
					<li>
						<ExLink href="tel:+84929066331">
							<div class="nav-list__link">
								<Phone />
								+84 929066331
							</div>
						</ExLink>
					</li>
					<li>
						<ExLink href="https://www.linkedin.com/in/wentallout">
							<div class="nav-list__link">
								<LinkedinLogo />Linkedin
							</div>
						</ExLink>
					</li>
					<li>
						<ExLink href="https://www.instagram.com/wentallout/saved">
							<div class="nav-list__link">
								<InstagramLogo />
								Instagram
							</div>
						</ExLink>
					</li>
					<li>
						<ExLink href="https://github.com/wentallout">
							<div class="nav-list__link">
								<GitHubLogo />
								GitHub
							</div>
						</ExLink>
					</li>
				</ul>
			</div>
		</div>

		<FooterCopyright />
		<div class="footer__deco" alt="footer decoration"></div>
	</div>
</footer>

<Marquee />

<style>
	.footer {
		position: relative;
		/* FLEX */
		display: flex;
		flex-direction: column;
		/* --- */

		/* SIZE */
		max-width: 100vw;
		width: 100%;
		padding: var(--spaceXL) 0;
		/* --- */

		overflow: hidden;
		background-color: var(--colorBgLayout);
	}

	.g-container {
		z-index: 3;
		background: transparent;
	}

	:global([color-scheme='light'] .bg) {
		display: none;
	}

	.nav-list__link {
		display: flex;
		flex-direction: row;
		gap: var(--space2XS);
		align-items: center;

		&:hover {
			color: var(--colorPrimaryHover);
		}
	}

	.footer__deco {
		background: url('/images/footer-skyline.webp');
		background-repeat: repeat-x;
		height: 53px;
		width: 100%;
		z-index: -1;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.link {
		display: inline;
	}

	.footer__list {
		overflow: hidden;
		--min: 20ch;
		--gap: var(--spaceL);

		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
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
		padding-bottom: var(--space3XS);
		border-bottom: 1px solid transparent;
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

	.footer__koi {
		position: absolute;
		right: 0;
		top: 0%;
		height: 100%;
		width: auto;
		opacity: 0.1;
		filter: invert(1);
	}

	:global([color-scheme='light'] .footer__koi) {
		filter: invert(0);
	}
</style>
