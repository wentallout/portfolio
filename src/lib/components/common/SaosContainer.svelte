<script>
	import Saos from 'saos';

	let {
		animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;',
		children,
		once = true
	} = $props();

	//slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
</script>

<div class="">
	<Saos {animation} {once}>
		{@render children?.()}
	</Saos>
</div>

<style>
	div {
		position: relative;
	}

	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes -global-fade-in-top {
		0% {
			transform: translateY(-50px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-in-left {
		0% {
			transform: translateX(-1000px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>
