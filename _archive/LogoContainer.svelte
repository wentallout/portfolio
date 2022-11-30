<script>
	import YinYangFill from '~icons/ph/yin-yang-fill';
</script>

<div class="logo-container">
	<div class="svg-container">
		<div class="yinyang-container">
			<YinYangFill class="rotate" color="var(--primary-500)" width="24" height="24" />
		</div>
	</div>
</div>

<style>
	.yinyang-container {
		border-radius: 100%;
		width: 24px;
		height: 24px;
		background-color: #000;
		z-index: 2;
		display: hidden;
		opacity: 0.6;
	}

	.svg-container {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 60%;
		background-color: transparent;
	}

	@media (min-width: 768px) {
		.svg-container {
			width: 100%;
			height: 100%;
		}
	}

	.logo-container {
		position: relative;
		max-width: 100vw;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
</style>
