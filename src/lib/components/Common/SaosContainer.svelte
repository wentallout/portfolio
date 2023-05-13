<script>
	import Saos from 'saos';
	export let once = true;
	export let animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;';
</script>

<Saos {once} {animation}>
	<slot />
</Saos>

<style>
	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
