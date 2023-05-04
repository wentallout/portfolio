<script>
	import Saos from 'saos';
	export let once = true;
	export let animation = 'slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both';
</script>

<Saos {once} {animation}>
	<slot />
</Saos>

<style>
	@keyframes -global-slide-in-blurred-left {
		0% {
			transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
			transform-origin: 100% 50%;
			filter: blur(40px);
			opacity: 0;
		}
		100% {
			transform: translateX(0) scaleY(1) scaleX(1);
			transform-origin: 50% 50%;
			filter: blur(0);
			opacity: 1;
		}
	}
</style>
