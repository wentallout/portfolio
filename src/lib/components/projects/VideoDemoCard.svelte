<script lang="ts">
	import { fade } from 'svelte/transition';

	let { link = '', title = '', vidDemo = '' } = $props();
</script>

<a
	class="group flex flex-col justify-between bg-background hover:bg-card transition-colors duration-300 relative h-full w-full overflow-hidden"
	aria-label={`link to ${title}`}
	href={link}
	rel="noreferrer"
	target="_blank">
	<div class="w-full aspect-video bg-card overflow-hidden relative">
		<video
			autoplay
			class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
			loop
			muted
			playsinline
			preload="auto"
			transition:fade={{ duration: 300 }}>
			<source src={vidDemo} type="video/webm" />
		</video>
	</div>

	<div class="p-6 bg-background flex items-center justify-between flex-1">
		<h3 class="text-base font-medium text-foreground group-hover:text-primary transition-colors">
			{title}
		</h3>
		<span
			class="text-sm text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-[color,transform] duration-200">
			↗
		</span>
	</div>
</a>
