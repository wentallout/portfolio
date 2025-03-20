<script>
	import ExLink from '$components/common/ExLink.svelte';
	import FooterCopyright from '$components/layout/footer/FooterCopyright.svelte';
	import FooterDeco from '$components/layout/footer/FooterDeco.svelte';
	import Marquee from '$components/other/Marquee.svelte';
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
	<FooterDeco />

	<img class="footer__koi" alt="koi" src="/images/koi.svg" />

	<div class="g-container">
		<div class="footer__list">
			<div class="list">
				<div class="list__title">About</div>
				<ul class="list__nav">
					<li class="nav-list__link">
						Khoa Nguyen. Provide affordable websites for your business.
					</li>
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
						<a href="https://www.realtimecolors.com">Color palette generator</a>
					</li>
					<li class="nav-list__link">
						<a href="https://fluid-type.tolin.ski">Fluid Type Calculator</a>
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
								Ho Chi Minh City, Vietnam
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
		padding: var(--space-xl) 0;
		/* --- */

		overflow: hidden;
		background-color: var(--color-bg-layout);

		border-top-left-radius: 10%;
		border-top-right-radius: 10%;
		box-shadow: var(--boxShadow);
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
		gap: var(--space-2xs);
		align-items: center;

		&:hover {
			color: var(--color-primary-hover);
		}
	}

	.link {
		display: inline;
	}

	.footer__list {
		overflow: hidden;
		--min: 20ch;
		--gap: var(--space-large);

		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: var(--space-mid);
	}

	.list__title {
		font-family: var(--font-fancy);
		color: var(--color-text);
		font-size: var(--font-size-base);
		padding-bottom: var(--space-3xs);
		border-bottom: 1px solid transparent;
		border-image: linear-gradient(to right, var(--color-text-tertiary), transparent) 1 0%;
	}

	.list__nav {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: left;
		align-items: flex-start;
		margin: 0;
		margin-bottom: var(--space-large);

		gap: var(--space-2xs);
	}

	.footer__koi {
		/* POSITION */
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		/* --- */

		/* SIZE */
		height: 60%;
		max-height: 500px;
		width: auto;
		/* --- */

		opacity: 0.1;
		filter: invert(1);
	}

	:global([color-scheme='light'] .footer__koi) {
		filter: invert(0);
	}
</style>
