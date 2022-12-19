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
				<Phone className="icon" width="32" height="32" color="var(--text)" />
			</a>
			<a
				aria-label="Contact through LinkedIn"
				class="social__icon"
				href="https://www.linkedin.com/in/wentallout"
				target="_blank"
				rel="noreferrer noopener">
				<LinkedinLogo width="32" height="32" color="var(--text)" />
			</a>
		</div>
	</div>
</footer>

<style>
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
		background-color: transparent;
		background-repeat: repeat;
		background-image: url('images/diamonds.svg');
	}

	.footer__social {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		gap: var(--space-s);
	}

	.footer-container {
		display: flex;
		flex-direction: column;
		color: var(--text);
		font-weight: 300;
	}

	@media (min-width: 768px) {
		footer {
			padding: var(--space-xl) 17vw;
		}
	}

	.nav-list {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		margin: 0px;

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
