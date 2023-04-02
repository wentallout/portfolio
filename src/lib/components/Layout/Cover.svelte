<script>
	import Phone from '~icons/ph/phone';
	import YinYang from '~icons/ph/yin-yang-fill';
	import Envelope from '~icons/ph/envelope';
	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<div class="cover">
	<video class="video" autoplay muted loop>
		<source src="/videos/city.mp4" type="video/mp4" />
	</video>

	<a href="/" class="cover__logo">
		<YinYang class="yinyang" width="100%" height="100%" color="var(--text-color)" />
	</a>
	<img class="logo__alter" src="/images/wentallout.svg" alt="alternative logo" />

	<div class="cover__btn">
		<ExLink href="tel:+84929066331">
			<div class="contact">
				<Phone />

				<div class="contact__value small-text">+84 929066331</div>
			</div>
		</ExLink>

		<ExLink href="mailto:wentallout@gmail.com">
			<div class="contact">
				<Envelope />
				<div class="contact__value small-text">wentallout@gmail.com</div>
			</div>
		</ExLink>
	</div>
</div>

<style>
	.logo__alter {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		transition: var(--transition);
		width: 10%;
		min-width: 80px;
	}

	:global(.yinyang) {
		filter: drop-shadow(0px 0px 10px var(--text-color));
		animation: rotate 3s linear infinite;
		opacity: 0.5;
		transition: var(--transition);
	}

	:global(.yinyang:hover) {
		color: var(--primary-500);
		filter: drop-shadow(0px 0px 10px var(--primary-500));
		opacity: 1;
	}

	.cover__logo:hover + .logo__alter {
		opacity: 0;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.cover__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		transition: var(--transition);
		width: var(--space-2xl);
		aspect-ratio: 1/1;
	}

	.cover__logo:hover {
		filter: brightness(1.2);
	}

	.cover {
		display: flex;
		position: relative;
		width: 100%;
		height: 240px;
		background-color: var(--bg-500);
	}

	@media (min-width: 768px) {
		.cover {
			height: 300px;
		}
	}

	.cover__btn {
		width: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		bottom: var(--space-s);
		padding-right: 1rem;
		left: 0;
		z-index: 2;
		transition: var(--transition);
		gap: var(--space-m);
		flex-direction: row;
		flex-wrap: wrap;
	}

	.cover::after {
		pointer-events: none;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background: linear-gradient(
			0deg,
			var(--page-bg) 0%,
			rgba(0, 0, 0, 0.5) 12%,
			rgba(0, 0, 0, 0.1) 30%,
			rgba(0, 0, 0, 0) 40%
		);
	}

	.video {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		filter: brightness(60%);
		transition: var(--transition);
	}

	.contact {
		user-select: none;
		transition: var(--transition);
		font-weight: 400;
		display: flex;
		flex-direction: row;

		align-items: center;
		gap: 4px;
	}

	.contact__value {
		display: none;
		color: var(--text-color-low);
	}

	@media (min-width: 992px) {
		.contact__value {
			display: block;
		}
	}
</style>
