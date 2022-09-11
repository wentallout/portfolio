<div class="container">
	<div class="marquee small-text">
		<ul class="marquee__content">
			<li>Nguyen Dang Khoa</li>
			<li>wentallout@gmail.com</li>
			<li>+84 929 066 331</li>
			<li>Mobile First</li>
			<li>Responsive Design</li>
			<li>Human-Centered Design</li>
		</ul>
		<!-- Mirrors the content above -->
		<ul class="marquee__content" aria-hidden="true">
			<li>Nguyen Dang Khoa</li>
			<li>wentallout@gmail.com</li>
			<li>+84 929 066 331</li>
			<li>Mobile First</li>
			<li>Responsive Design</li>
			<li>Human-Centered Design</li>
		</ul>
	</div>
</div>

<style>
	.container {
		position: absolute;
		z-index: 1;
		width: 100%;
		max-width: 100vw;
		font-weight: 600;
	}

	.marquee {
		--gap: 0.5rem;
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
		color: var(--primary-600);
	}

	.marquee__content {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: var(--gap);
		min-width: 100%;
		animation: scroll 20s linear infinite;
		animation-direction: reverse;
	}

	.marquee:hover .marquee__content {
		animation-play-state: paused;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}
</style>
