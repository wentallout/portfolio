<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
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

<div class="container">
	<div contentEditable="true" class="text">
		<div class="line">
			<div class="word word--bold">Dang Khoa</div>
			<div class="word">1999</div>
		</div>
		<div class="line">
			<div class="word word--bold">UI/UX</div>
			<div class="word">Backend</div>
			<div class="word">Frontend</div>
		</div>
		<div class="line">
			<div class="word word--bold">Ho Chi Minh</div>
			<div class="word">2023</div>
		</div>

		<div class="line ">
			<ExLink href="https://www.linkedin.com/in/wentallout/">
				<div bind:this={linkEle} id="channel-link" class="word fancy word--bold">→Resume</div>
			</ExLink>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		margin-bottom: var(--space-xl);
	}

	.text {
		display: flex;
		width: 100%;
		flex-direction: column;
		flex-wrap: wrap;
		gap: var(--space-s);

		background-color: var(--page-bg);
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
		color: var(--text-color-low);

		font-size: var(--font-size-xl);
		font-weight: 300;

		margin: 0rem;
		transition: opacity 250ms ease;
	}

	.fancy {
		color: var(--primary-500);
	}

	.fancy:hover {
		color: var(--primary-500);
	}
	.word--bold {
		font-weight: 600;
	}
</style>
