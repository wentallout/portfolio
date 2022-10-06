<script>
	export let bookUrl = '';
	export let alt = '';
	export let imgUrl = '';
</script>

<a class="book-container" href={bookUrl} target="_blank" rel="noreferrer noopener">
	<div class="book">
		<img loading="lazy" decoding="async" {alt} src={imgUrl} />
	</div>
</a>

<style>
	.book-container {
		display: flex;
		align-items: center;
		justify-content: center;
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
		width: 200px;
		height: 300px;
		position: relative;
		transform-style: preserve-3d;
		transform: rotateY(-30deg);
		transition: 1s ease;
		animation: 1s ease 0s 1 initAnimation;
	}

	.book:hover {
		transform: rotateY(0deg);
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
		box-shadow: 5px 5px 20px #666;
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
			#fff 0%,
			#f9f9f9 5%,
			#fff 10%,
			#f9f9f9 15%,
			#fff 20%,
			#f9f9f9 25%,
			#fff 30%,
			#f9f9f9 35%,
			#fff 40%,
			#f9f9f9 45%,
			#fff 50%,
			#f9f9f9 55%,
			#fff 60%,
			#f9f9f9 65%,
			#fff 70%,
			#f9f9f9 75%,
			#fff 80%,
			#f9f9f9 85%,
			#fff 90%,
			#f9f9f9 95%,
			#fff 100%
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
		background-color: var(--neutral-900);
		border-radius: 0 2px 2px 0;
		box-shadow: -10px 0 50px 10px #666;
	}

	.book {
		scale: 0.7;
	}

	@media (min-width: 768px) {
		.book {
			scale: 1;
		}
	}
</style>
