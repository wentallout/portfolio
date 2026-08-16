<script>
	import ExLink from '$components/common/ExLink.svelte';

	let { desc = 'author', href, thumbnailUrl = '', title = 'insert title' } = $props();

	let finalThumbnail = $derived(
		href && href.includes('codepen.io')
			? href.replace('codepen.io', 'shots.codepen.io') + '-800.jpg'
			: thumbnailUrl
	);
</script>

<div class="border-grid-r border-grid-b bg-black flex flex-col justify-between relative hover:bg-neutral-950/60 transition-all duration-300 group h-full">
	<span class="grid-plus grid-plus-tl">+</span>
	<span class="grid-plus grid-plus-tr">+</span>
	<span class="grid-plus grid-plus-bl">+</span>
	<span class="grid-plus grid-plus-br">+</span>
	
	<ExLink {href} style="display: flex; flex-direction: column; height: 100%; width: 100%;">
		<div class="w-full aspect-video overflow-hidden bg-neutral-950 border-grid-b relative">
			<img
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				alt={title}
				loading="lazy"
				src={finalThumbnail}
				{title}
			/>
		</div>

		<div class="p-6 flex flex-col justify-between flex-1 space-y-2 bg-black">
			<h4 class="text-base font-semibold text-white group-hover:text-rose-400 transition-colors line-clamp-2 leading-snug">
				{title}
			</h4>
			<div class="flex items-center justify-between pt-2 text-xs text-neutral-400 font-sans font-medium">
				<span>{desc}</span>
				<span class="group-hover:translate-x-1 transition-transform duration-200 text-white">↗</span>
			</div>
		</div>
	</ExLink>
</div>



