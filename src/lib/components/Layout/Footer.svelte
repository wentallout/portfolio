<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import Marquee from '$lib/components/Common/Marquee.svelte';
	import { navItems } from '$lib/config.js';
	import YinYang from '~icons/ph/yin-yang-fill';
</script>

<Marquee />
<footer>
	<div class="footer-container small-text">
		<div class="list-container">
			<div class="list">
				<div class="list__title">About me</div>
				<ul class="nav-list">
					<li class="nav_list__item">
						<div>
							<YinYang class="yinyang" width="40" height="40" color="var(--text-color)" />
						</div>
					</li>
					<li class="nav-list__item">
						<div>
							A one-manned web design agency in Ho Chi Minh City, Vietnam that designs superb
							affordable websites and apps for small businesses and non-profits alike.
						</div>
					</li>
				</ul>
			</div>
			<div class="list">
				<div class="list__title">Browse</div>
				<ul class="nav-list">
					{#each navItems as navItem}
						<li class="nav-list__item">
							<a href={navItem.path}>{navItem.title}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="list">
				<div class="list__title">Contact</div>
				<ul class="nav-list">
					<li class="nav-list__item">
						<ExLink href="mailto:wentallout@gmail.com">wentallout@gmail.com</ExLink>
					</li>
					<li class="nav-list__item">
						<ExLink href="tel:+84929066331">+84 929 066 331</ExLink>
					</li>
				</ul>
			</div>

			<div class="list">
				<div class="list__title">Social</div>
				<ul class="nav-list">
					<li class="nav-list__item">
						<ExLink href="https://www.linkedin.com/in/wentallout">Linkedin</ExLink>
					</li>
					<li class="nav-list__item">
						<ExLink href="https://www.instagram.com/wentallout/saved">Instagram</ExLink>
					</li>
					<li class="nav-list__item">
						<ExLink href="https://github.com/wentallout">GitHub</ExLink>
					</li>
				</ul>
			</div>
		</div>

		<!-- <SocialButtons /> -->

		<div class="other">
			<div class="other-info small-text">© wentallout. All rights reserved.</div>

			<ExLink href="/doc/privacy-policy.pdf">
				<div class="other-info small-text">Privacy Policy</div>
			</ExLink>
		</div>
	</div>
</footer>

<style>
	.list-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
		flex-wrap: wrap;
	}

	@media (min-width: 768px) {
		.list-container {
			flex-direction: row;
		}
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}

	.list__title {
		font-family: 'Fancy';
		font-size: var(--font-size-base);
	}

	.other-info {
		user-select: none;
		margin-top: var(--space-s);
		color: var(--text-color-low);
	}

	footer {
		/* Flex */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		padding: var(--space-2xl) var(--space-xs);

		/* Position */
		position: relative;

		/* Width */
		max-width: 100vw;

		background-color: var(--bg-400);

		--bg-value: 100px;

		background-image: linear-gradient(135deg, var(--bg-500) 25%, transparent 25%),
			linear-gradient(225deg, var(--bg-500) 25%, transparent 25%),
			linear-gradient(45deg, var(--bg-500) 25%, transparent 25%),
			linear-gradient(315deg, var(--bg-500) 25%, var(--black) 25%);
		background-position: var(--bg-value) 0, var(--bg-value) 0, 0 0, 0 0;
		background-size: var(--bg-value) var(--bg-value);
		background-repeat: repeat;
	}

	.footer-container {
		display: flex;
		flex-direction: column;
		color: var(--text-color);
		font-weight: 300;
		width: 100%;
	}

	@media (min-width: 768px) {
		footer {
			padding: var(--space-xl) var(--page-padding);
		}
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
	}

	.nav-list__item a:hover {
		color: var(--primary-500);
	}

	footer {
		position: relative;
	}

	.other {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
