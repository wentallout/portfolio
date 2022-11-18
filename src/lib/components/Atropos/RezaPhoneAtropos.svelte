<script>
	import Atropos from 'atropos/svelte';
	import rezaPhoneFrame from '$lib/assets/images/project/reza/rezaPhoneFrame.png';
	import rezaSplat from '$lib/assets/images/project/reza/rezaSplat.svg';
</script>

<Atropos
	class="my-atropos"
	shadow="false"
	eventsEl=".project"
	rotateXMax={20}
	rotateYMax={20}
	stretchX={0}
	stretchZ={5}
	rotateTouch="scroll-y">
	<div class="reza-phone">
		<div class="frame">
			<img data-atropos-offset="5" class="frame__image" src={rezaPhoneFrame} alt="reza homepage" />
			<img data-atropos-offset="3" class="splat" src={rezaSplat} alt="reza splat" />
			<div data-atropos-offset="-3" class="reza-text">reza</div>
		</div>
	</div>
</Atropos>

<style>
	.reza-phone {
		background-color: transparent;
		overflow: hidden;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.frame {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
		position: relative;
		background: transparent url('/images/dot.svg') repeat left top/20px;
		height: 100%;
	}

	.reza-text {
		z-index: -3;
		position: absolute;
		font-size: 200px;
		font-weight: 600;
		top: 0;
		left: 0;
		color: #e4543b;
		writing-mode: vertical-rl;
		text-orientation: sideways;
	}

	.frame__image {
		width: auto;
		height: 406px;
	}

	.splat {
		position: absolute;
		z-index: -1;
		top: -62px;
		left: 183px;
		width: 400px;
		height: 400px;
		opacity: 0.8;
	}
</style>
