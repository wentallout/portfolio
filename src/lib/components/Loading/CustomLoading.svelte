<div class="loadingio-spinner-bean-eater-xghevhr8yf">
	<div class="spinner">
		<div>
			<div />
			<div />
			<div />
		</div>
		<div>
			<div />
			<div />
			<div />
		</div>
	</div>
</div>

<style type="text/css">
	@keyframes spinner-1 {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-45deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	@keyframes spinner-2 {
		0% {
			transform: rotate(180deg);
		}
		50% {
			transform: rotate(225deg);
		}
		100% {
			transform: rotate(180deg);
		}
	}
	.spinner > div:nth-child(2) {
		transform: translate(-15px, 0);
	}
	.spinner > div:nth-child(2) div {
		position: absolute;
		top: 20px;
		left: 20px;
		width: 60px;
		height: 30px;
		border-radius: 60px 60px 0 0;
		background: var(--primary-500);
		animation: spinner-1 1s linear infinite;
		transform-origin: 30px 30px;
	}
	.spinner > div:nth-child(2) div:nth-child(2) {
		animation: spinner-2 1s linear infinite;
	}
	.spinner > div:nth-child(2) div:nth-child(3) {
		transform: rotate(-90deg);
		animation: none;
	}
	@keyframes spinner-3 {
		0% {
			transform: translate(95px, 0);
			opacity: 0;
		}
		20% {
			opacity: 1;
		}
		100% {
			transform: translate(35px, 0);
			opacity: 1;
		}
	}
	.spinner > div:nth-child(1) {
		display: block;
	}
	.spinner > div:nth-child(1) div {
		position: absolute;
		top: 46px;
		left: -4px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #000000;
		animation: spinner-3 1s linear infinite;
	}
	.spinner > div:nth-child(1) div:nth-child(1) {
		animation-delay: -0.67s;
	}
	.spinner > div:nth-child(1) div:nth-child(2) {
		animation-delay: -0.33s;
	}
	.spinner > div:nth-child(1) div:nth-child(3) {
		animation-delay: 0s;
	}
	.loadingio-spinner-bean-eater-xghevhr8yf {
		width: 64px;
		height: 64px;
		display: inline-block;
		overflow: hidden;
		background: none;
	}
	.spinner {
		width: 100%;
		height: 100%;
		position: relative;
		transform: translateZ(0) scale(0.64);
		backface-visibility: hidden;
		transform-origin: 0 0; /* see note above */
	}
	.spinner div {
		box-sizing: content-box;
	}
</style>
