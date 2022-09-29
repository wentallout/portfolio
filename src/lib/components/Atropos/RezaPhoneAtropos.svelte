<script>
	import Atropos from 'atropos/svelte';
	import rezaPhoneFrame from '$lib/assets/images/project/reza/rezaPhoneFrame.png?webp';
	import rezaWireframe from '$lib/assets/images/project/reza/rezaWireframe.png?webp';

	import rezaPhoneFrame2 from '$lib/assets/images/project/reza/rezaPhoneFrame2.png?webp';
</script>

<Atropos
	class="reza-phone"
	shadow={false}
	eventsEl="body"
	rotateXMax={20}
	rotateYMax={20}
	stretchX={0}
	stretchZ={5}
	rotateTouch="scroll-y"
>
	<div class="frame">
		<img data-atropos-offset="5" class="frame__image" src={rezaPhoneFrame} alt="" />
		<img
			data-atropos-offset="3"
			data-atropos-opacity="0.5;1"
			class="frame__image2"
			src={rezaWireframe}
			alt=""
		/>
	</div>

	<div data-atropos-offset="-3" class="reza-text">reza</div>
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
	}

	.reza-text {
		z-index: -3;
		position: absolute;
		font-size: 200px;
		font-weight: 600;
		top: 0;
		left: -10%;

		color: #e4543b;

		writing-mode: vertical-rl;
		text-orientation: sideways;
	}

	.frame__image {
		width: auto;
		max-height: 406px;
	}

	.frame__image2 {
		z-index: -1;
		top: 0;
		right: 15%;

		max-height: 406px;
		width: auto;
		position: absolute;
	}
</style>
