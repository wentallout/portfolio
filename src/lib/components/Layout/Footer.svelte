<script>
</script>

<footer>
	<div class="footer-container small-text">
		<ul class="nav-list">
			<li class="nav-list-item">
				<a href="/">Home</a>
			</li>
			<li class="nav-list-item">
				<a href="/project">Project</a>
			</li>
			<li class="nav-list-item">
				<a href="/resource">Resource</a>
			</li>
			<li class="nav-list-item">
				<a href="/contact">Contact</a>
			</li>
		</ul>
		<div class="">2022 - Made by Khoa with SvelteKit</div>
		<div class="">wentallout@gmail.com</div>
	</div>
</footer>

<style>
	.footer-container {
		display: flex;
		flex-direction: column;
		color: var(--white) !important;
		font-weight: 300;
	}

	footer {
		/* Flex */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		/* Font weight */
		font-weight: 300;

		padding: var(--space-m) var(--space-xs);

		/* Position */
		position: relative;

		/* Width */
		max-width: 100vw;

		/* Color */
		background-color: #000;
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
	}

	.nav-list-item {
		display: flex;
		padding-left: 0;
		padding-right: var(--space-xs);
	}
</style>
