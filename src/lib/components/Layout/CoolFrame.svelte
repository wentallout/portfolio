<div class="frameWrap">
	<div class="frame2">
		<div class="corner" />
		<div class="bar" />
	</div>
</div>

<style>
	.frameWrap {
		display: none;
		pointer-events: none;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: 0.3s;

		opacity: 0.5;
	}

	@media (min-width: 768px) {
		.frameWrap {
			display: block;
		}
	}

	.frame2:before,
	.frame2:after,
	.corner:before,
	.corner:after {
		content: '';
		display: block;
		position: absolute;
		box-sizing: border-box;

		z-index: 2;
	}

	.frame2 {
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		position: absolute;
		box-sizing: border-box;
	}

	.frame2:before {
		background: url('/images/frame2corner.png') no-repeat 0 0/100%;
		top: 0;
		left: 0;
		width: 21px;
		height: 21px;
	}

	.frame2:after {
		background: url('/images/frame2corner.png') no-repeat 0 0/100%;
		top: 0;
		right: 0;
		transform: rotate(90deg);
		width: 21px;
		height: 21px;
	}

	.corner:before {
		background: url('/images/frame2corner.png') no-repeat 0 0/100%;

		bottom: 0;
		left: 0;
		transform: rotate(-90deg);
		width: 21px;
		height: 21px;
	}
	.corner:after {
		background: url('/images/frame2corner.png') no-repeat 0 0/100%;

		bottom: 0;
		right: 0;
		transform: rotate(180deg);
		width: 21px;
		height: 21px;
	}

	/* BAR */
	.bar {
		position: absolute;
		top: 4px;
		bottom: 4px;
		left: 21px;
		right: 21px;
		border-top: 1px solid var(--primary);
		border-bottom: 1px solid var(--primary);
	}

	.bar:before {
		display: block;
		position: absolute;
		left: -17px;
		content: '';
		width: 0.5px;
		top: 16px;
		bottom: 16px;
		background: var(--primary);
	}

	.bar:after {
		content: '';
		display: block;
		position: absolute;
		right: -17px;
		width: 0.5px;
		top: 16px;
		bottom: 16px;
		background: var(--primary);
	}
	/* END */
</style>
