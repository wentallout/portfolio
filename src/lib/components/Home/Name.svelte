<script>
	import SocialButtons from '$lib/components/Contact/SocialButtons.svelte';
	import Phone from '~icons/ph/phone';
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import Envelope from '~icons/ph/envelope';

	import LinkedinLogo from '~icons/ph/linkedin-logo';

	import { onMount } from 'svelte';
	let linkEle;
	const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

	onMount(() => {
		let text = linkEle.innerText.split('');

		linkEle.innerText = '';

		text.forEach((value, index) => {
			const outer = document.createElement('span');

			outer.className = 'outer';

			const inner = document.createElement('span');

			inner.className = 'inner';

			inner.style.animationDelay = `${rand(-5000, 0)}ms`;

			const letter = document.createElement('span');

			letter.className = 'letter';

			letter.innerText = value;

			letter.style.animationDelay = `${index * 1000}ms`;

			inner.appendChild(letter);

			outer.appendChild(inner);

			linkEle.appendChild(outer);
		});
	});
</script>

<section class="container">
	<div class="text">
		<div style="margin-bottom:var(--space-m)" class="line">
			<SocialButtons />
		</div>
		<div contentEditable="true" class="line">
			<div class="word rainbow">Dang</div>
			<div class="word rainbow">Khoa</div>
		</div>
		<div class="line">
			<div class="word">UI/UX</div>
			<div class="word">Dev</div>
		</div>

		<div class="line">
			<ExLink href="https://www.linkedin.com/in/wentallout/">
				<div bind:this={linkEle} id="channel-link" class="word fancy">→Resume</div>
			</ExLink>
		</div>
	</div>
</section>

<style>
	/* .name-bg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	} */

	.social-links {
		display: flex;
		gap: var(--space-s);
		flex-direction: row;
	}

	.container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}

	@media (min-width: 768px) {
		.container {
			background-image: url('/images/wall.svg');
			background-position: top;
			background-repeat: repeat;
		}
	}

	.container:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background: linear-gradient(
			0deg,
			var(--page-bg) 0%,
			rgba(18, 18, 18, 0.5) 12%,
			rgba(18, 18, 18, 0.1) 30%,
			rgba(18, 18, 18, 0) 40%
		);
	}

	.text {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: var(--space-3xs);
		width: max-content;
		max-width: 100%;
		background-color: var(--page-bg);
		padding: var(--space-m);
	}

	@keyframes float {
		from,
		to {
			transform: translateY(-0%);
		}

		50% {
			transform: translateY(-3%);
		}
	}

	@keyframes background-pan {
		from {
			background-position: 1000% center;
		}

		to {
			background-position: 0% center;
		}
	}

	.line {
		display: flex;
		justify-content: space-between;
		gap: var(--space-m);
		flex-wrap: wrap;
	}

	.word {
		color: var(--text-color);

		font-size: var(--font-size-2xl);
		font-weight: 600;

		margin: 0rem;
		text-transform: uppercase;
		transition: opacity 250ms ease;
	}

	.fancy:hover {
		color: var(--primary-500);
	}
</style>
