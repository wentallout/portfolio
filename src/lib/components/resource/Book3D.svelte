<script>
	export let alt = '';
	export let imgUrl = '';
</script>

<div class="container">
	<div class="book-container">
		<div class="book">
			<img loading="lazy" decoding="async" {alt} src={imgUrl} />
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
			var(--colorText) 0%,
			var(--colorBgLayout) 5%,
			var(--colorText) 10%,
			var(--colorBgLayout) 15%,
			var(--colorText) 20%,
			var(--colorBgLayout) 25%,
			var(--colorText) 30%,
			var(--colorBgLayout) 35%,
			var(--colorText) 40%,
			var(--colorBgLayout) 45%,
			var(--colorText) 50%,
			var(--colorBgLayout) 55%,
			var(--colorText) 60%,
			var(--colorBgLayout) 65%,
			var(--colorText) 70%,
			var(--colorBgLayout) 75%,
			var(--colorText) 80%,
			var(--colorBgLayout) 85%,
			var(--colorText) 90%,
			var(--colorBgLayout) 95%,
			var(--colorText) 100%
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
		background-color: var(--colorTextSecondary);
		border-radius: 0 2px 2px 0;
	}

	.book {
		scale: 0.7;
	}
</style>
