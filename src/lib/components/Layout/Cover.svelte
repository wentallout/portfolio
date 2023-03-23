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
		<YinYang class="yinyang" width="100%" height="100%" color="var(--primary-500)" />
	</a>

	<div class="cover__btn">
		<a href="tel:+84929066331" class="">
			<Phone />
			+84 929 066 331</a>
		<ExLink href="mailto:wentallout@gmail.com">
			<div class="name base-text">
				<Envelope />
				wentallout@gmail.com
			</div>
		</ExLink>
	</div>
</div>

<style>
	:global(.yinyang) {
		filter: drop-shadow(0px 0px 10px var(--primary-500));
		animation: rotate 3s linear infinite;
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
		filter: brightness(50%);
		transition: var(--transition);
	}

	.name {
		font-family: 'Normal';
		user-select: none;

		transition: var(--transition);
		font-weight: 600;
	}
</style>
