<script>
	import Saos from 'saos';
	export let once = true;
	export let animation = 'slide-in-bottom 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;';
</script>

<Saos {once} {animation}>
	<slot />
</Saos>

<style>
	@keyframes -global-slide-in-bottom {
		0% {
			transform: translateY(1000px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
