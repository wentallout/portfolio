<script>
	import { navItems } from '$lib/config.js';
	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import Phone from '~icons/ph/phone';
</script>

<footer>
	<div class="footer-container small-text">
		<ul class="nav-list">
			{#each navItems as navItem}
				<li class="nav-list-item">
					<a href={navItem.path}>{navItem.title}</a>
				</li>
			{/each}
		</ul>
		<div class="footer__social">
			<a aria-label="Phone me" class="social__icon" href="tel:+84929066331">
				<Phone width="32" height="32" color="var(--neutral-100)" />
			</a>
			<a
				aria-label="Contact through LinkedIn"
				class="social__icon"
				href="https://www.linkedin.com/in/wentallout"
				target="_blank"
				rel="noreferrer noopener">
				<LinkedinLogo width="32" height="32" color="var(--neutral-100)" />
			</a>
		</div>
		<div class="footer__other">
			<a href="tel:+84929066331" target="_blank" rel="noreferrer noopener">+84929066331</a>
			<a href="mailto:wentallout@gmail.com" target="_blank" rel="noreferrer noopener">Email me</a>
		</div>
	</div>
</footer>

<style>
	.footer__social {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		z-index: 2;
		gap: var(--space-s);
		margin-bottom: var(--space-s);
	}

	footer {
		/* Flex */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		padding: var(--space-m) var(--space-xs);

		/* Position */
		position: relative;

		/* Width */
		max-width: 100vw;

		/* Color */
		background-color: var(--accent-900);

		background-repeat: repeat;
		border-top-left-radius: var(--border-radius-light);
		border-top-right-radius: var(--border-radius-light);
	}

	.footer__other {
		display: flex;
		flex-direction: row;
		gap: var(--space-m);
		z-index: 2;
		color: var(--neutral-500);
	}

	.footer__other a {
		color: var(--accent-300);
		transition: 0.3s;
	}

	.footer__other a:hover {
		color: var(--accent-100);
	}

	.footer-container {
		display: flex;
		flex-direction: column;
		color: var(--neutral-100);
		font-weight: 300;
	}

	@media (min-width: 768px) {
		footer {
			padding: var(--space-m) 17vw;
		}
	}

	footer:before {
		background: url('/images/rhombus_line.png') repeat top center/49px 72px;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.12;
		z-index: 1;
	}

	.nav-list {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		margin: 0px;
		z-index: 2;
		margin-bottom: var(--space-l);
		flex-wrap: wrap;
	}

	.nav-list-item {
		display: flex;
		padding-left: 0;
		padding-right: var(--space-xs);
	}

	.nav-list-item a {
		font-family: var(--fancy-font);
		transition: 0.3s;
	}

	.nav-list-item a:hover {
		color: var(--primary-500);
	}

	footer {
		position: relative;
	}
</style>
