<div class="deco">
	<span class="line" />
	<span class="side" />
</div>

<style>
	.deco {
		position: absolute;
		top: -6px;
		left: 0;
		display: block;
		width: 100%;
		z-index: 7;
	}

	@media (min-width: 768px) {
		.deco {
			height: 15px;
		}
	}

	/* LINE */

	.line {
		position: relative;
		display: block;
		margin: 1px auto;
		background: url('/images/footer/bg_line_footer_center.webp') no-repeat top center/contain;
	}

	@media (min-width: 768px) {
		.line {
			width: 87px;
			height: 13px;
		}

		.line:before,
		.line:after {
			top: 6px;
			width: calc(50vw - 100px);
		}

		.line:before {
			right: 91px;
		}

		.line:after {
			left: 91px;
		}
	}

	.line:before,
	.line:after {
		content: '';
		position: absolute;
		height: 1px;
		background: #b4b4b4;
	}

	/* LINE END */

	.side:before,
	.side:after {
		content: '';
		position: absolute;
		top: 0;
		display: block;
	}

	.side:before {
		left: 0;
		background: url('/images/footer/bg_line_footer_left.webp') no-repeat top center/contain;
	}

	@media (min-width: 768px) {
		.side:before,
		.side:after {
			width: 42px;
			height: 15px;
		}
	}

	.side:after {
		right: 0;
		background: url('images/footer/bg_line_footer_right.webp') no-repeat top center/contain;
	}

	@media (max-width: 767px) {
		.deco {
			height: 1.95312vw;
		}
		.line {
			width: 11.32812vw;
			height: 1.69271vw;
		}

		.line:before {
			right: 11.84896vw;
		}

		.line:after {
			left: 11.84896vw;
		}

		.line:before,
		.line:after {
			top: 0.78125vw;
			width: 36.97917vw;
		}

		.side:before,
		.side:after {
			width: 5.46875vw;
			height: 1.95312vw;
		}
	}
</style>
