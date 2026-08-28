<script>
	import Saos from 'saos';

	let {
		animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
		children,
		once = true
	} = $props();
</script>

<div class="relative">
	<Saos {animation} {once}>
		{@render children?.()}
	</Saos>
</div>
