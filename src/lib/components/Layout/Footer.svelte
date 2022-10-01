<script>
	import { navItems } from '$lib/config.js';
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
		<div class="footer__other">
			<p>
				2022 - Made by Khoa with <a href="https://kit.svelte.dev">SvelteKit</a>
			</p>
			<a href="mailto:wentallout@gmail.com">wentallout@gmail.com</a>
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

		/* Font weight */
		/* font-weight: 300; */

		padding: var(--space-m) var(--space-xs);

		/* Position */
		position: relative;

		/* Width */
		max-width: 100vw;

		/* Color */
		

		background-image: url(/images/noise.svg);
		background-repeat: repeat;

		
	}

	.footer__other {
		z-index: 2;
		color: var(--neutral-500);
	}

	.footer__other a {
		color: var(--accent-500);
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

		font-family: 'Yipes';
	}

	.nav-list-item {
		display: flex;
		padding-left: 0;
		padding-right: var(--space-xs);
	}

	.nav-list-item a:hover
	{
		color: var(--primary-500);
	}

	footer {
		--c-footer--mask-height: 10px;

		position: relative;
		margin-top: calc(var(--c-footer--mask-height) * -1);
		-webkit-mask-image: url(/images/mask_section-bg_top.png),
			-webkit-gradient(linear, left top, left bottom, from(#000));
		-webkit-mask-image: url(/images/mask_section-bg_top.png), linear-gradient(#000);
		mask-image: url(/images/mask_section-bg_top.png),
			-webkit-gradient(linear, left top, left bottom, from(#000));
		mask-image: url(/images/mask_section-bg_top.png), linear-gradient(#000);
		-webkit-mask-size: auto var(--c-footer--mask-height),
			100% calc(100% - var(--c-footer--mask-height) + 1px);
		mask-size: auto var(--c-footer--mask-height),
			100% calc(100% - var(--c-footer--mask-height) + 1px);

		-webkit-mask-position: left top, left calc(var(--c-footer--mask-height) - 1px);
		mask-position: left top, left calc(var(--c-footer--mask-height) - 1px);

		-webkit-mask-repeat: repeat-x, no-repeat;
		mask-repeat: repeat-x, no-repeat;
	}
</style>
