<script>
	import YinYang from '~icons/ph/yin-yang';
</script>

<div class="logo-container">
	<div class="svg-container">
		<YinYang class="rotate" color="var(--neutral-900)" width="64" height="64" />
	</div>
</div>

<style>
	.svg-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60%;
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
	}
</style>
