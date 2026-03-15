<script>
	/** @type {{alt?: string, imgUrl?: string}} */
	let { alt = '', imgUrl = '' } = $props();
</script>

<div class="container">
	<div class="book-container">
		<div class="book">
			<img {alt} decoding="async" loading="lazy" src={imgUrl} />
		</div>
	</div>
</div>

<style lang="postcss">
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.book-container {
		perspective: 600px;
		width: fit-content;
		height: fit-content;
	}

	@keyframes initAnimation {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(-30deg);
		}
	}

	.book {
		perspective: 600px;
		width: 200px;
		height: 300px;
		position: relative;
		transform-style: preserve-3d;
		transform: rotateY(-30deg);
		transition: 1s ease;
		animation: 1s ease 0s 1 initAnimation;

		&:hover {
			transform: rotateY(0deg);
		}
	}

	.book > :first-child {
		width: 200px;
		height: 300px;

		position: absolute;
		top: 0;
		left: 0;

		transform: translateZ(25px);
		background-color: #01060f;
		border-radius: 0 2px 2px 0;
	}

	.book::before {
		position: absolute;
		content: ' ';
		left: 0;
		top: 3px;
		width: 48px;
		height: 294px;
		transform: translateX(172px) rotateY(90deg);
		background: linear-gradient(
			90deg,
			var(--color-text) 0%,
			var(--color-bg-layout) 5%,
			var(--color-text) 10%,
			var(--color-bg-layout) 15%,
			var(--color-text) 20%,
			var(--color-bg-layout) 25%,
			var(--color-text) 30%,
			var(--color-bg-layout) 35%,
			var(--color-text) 40%,
			var(--color-bg-layout) 45%,
			var(--color-text) 50%,
			var(--color-bg-layout) 55%,
			var(--color-text) 60%,
			var(--color-bg-layout) 65%,
			var(--color-text) 70%,
			var(--color-bg-layout) 75%,
			var(--color-text) 80%,
			var(--color-bg-layout) 85%,
			var(--color-text) 90%,
			var(--color-bg-layout) 95%,
			var(--color-text) 100%
		);
	}

	.book::after {
		width: 200px;
		height: 300px;
		position: absolute;
		top: 0;
		left: 0;
		content: ' ';

		transform: translateZ(-25px);
		background-color: var(--color-text-secondary);
		border-radius: 0 2px 2px 0;
	}

	.book {
		scale: 0.7;
	}
</style>
