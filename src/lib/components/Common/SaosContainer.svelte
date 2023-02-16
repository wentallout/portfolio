<script>
	import Saos from 'saos';
	export let once = true;
	export let animation = 'slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both';
</script>

<Saos {once} {animation}>
	<slot />
</Saos>

<style>
	@keyframes -global-slide-in-blurred-top {
		0% {
			transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
			transform-origin: 50% 0%;
			filter: blur(40px);
			opacity: 0;
		}
		100% {
			transform: translateY(0) scaleY(1) scaleX(1);
			transform-origin: 50% 50%;
			filter: blur(0);
			opacity: 1;
		}
	}
</style>
