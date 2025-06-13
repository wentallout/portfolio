<script>
	import Saos from 'saos';

	let {
		animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
		children,
		once = true
	} = $props();
</script>

<div>
	<Saos {animation} {once}>
		{@render children?.()}
	</Saos>
</div>

<style>
	div {
		position: relative;
	}

	@keyframes -global-fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes -global-fade-in-top {
		from {
			transform: translateY(-50px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-in-left {
		from {
			transform: translateX(-1000px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>
