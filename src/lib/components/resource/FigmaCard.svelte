<script>
	import ExLink from '$components/common/ExLink.svelte';

	let { desc = 'author', href, thumbnailUrl = '', title = 'insert title' } = $props();

	let finalThumbnail = $derived(
		href && href.includes('codepen.io')
			? href.replace('codepen.io', 'shots.codepen.io') + '-800.jpg'
			: thumbnailUrl
	);
</script>

<div class="bg-background flex flex-col justify-between relative hover:bg-card transition-all duration-300 group h-full">
	
	<ExLink {href} style="display: flex; flex-direction: column; height: 100%; width: 100%;">
		<div class="w-full aspect-video overflow-hidden bg-card relative">
			<img
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				alt={title}
				loading="lazy"
				src={finalThumbnail}
				{title}
			/>
		</div>

		<div class="signature-padding flex flex-col justify-between flex-1 space-y-2 bg-background">
			<h4 class="text-base font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
				{title}
			</h4>
			<div class="flex items-center justify-between pt-2 text-sm text-muted-foreground font-sans font-medium">
				<span>{desc}</span>
				<span class="group-hover:translate-x-1 transition-transform duration-200 group-hover:text-primary">↗</span>
			</div>
		</div>
	</ExLink>
</div>



