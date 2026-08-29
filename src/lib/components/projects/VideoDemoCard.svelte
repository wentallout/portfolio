<script>
	import { fade } from 'svelte/transition';

	let { link = '', title = '', vidDemo = '' } = $props();
</script>

<a
	aria-label={`link to ${title}`}
	class="group flex flex-col justify-between bg-background hover:bg-card transition-all duration-300 relative h-full w-full overflow-hidden"
	href={link}
	target="_blank"
	rel="noreferrer"
>
	<div class="w-full aspect-video bg-card overflow-hidden relative">
		<video
			class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
			autoplay
			fetchpriority="high"
			loop
			muted
			playsinline
			transition:fade={{ duration: 300 }}>
			<source src={vidDemo} type="video/mp4" />
		</video>
	</div>

	<div class="signature-padding bg-background flex items-center justify-between flex-1">
		<h4 class="text-base font-medium text-foreground group-hover:text-primary transition-colors">
			{title}
		</h4>
		<span class="text-sm text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">
			↗
		</span>
	</div>
</a>

