<script>
	import { haptic } from '$lib/actions/haptics';

	let {
		desc = '',
		index = 1,
		linkToDetail = '',
		output = '',
		projectName = '',
		role = '',
		thumbnail
	} = $props();

	let formattedIndex = $derived(String(index).padStart(3, '0'));
</script>

<a
	href={linkToDetail}
	use:haptic={'selection'}
	class="group block relative bg-background hover:bg-card transition-colors duration-300 w-full overflow-hidden">
	<article class="md:grid md:grid-cols-12 gap-0 items-stretch w-full relative">
		<!-- Left: Text Details -->
		<div class="md:col-span-6 flex flex-col justify-between h-full space-y-4 signature-padding">
			<div>
				<!-- Card Header Tag & Number -->
				<div class="flex items-center justify-between mb-3 text-sm">
					<span class="uppercase tracking-widest text-sm text-muted-foreground font-medium">
						{role ? role.split(',')[0] : 'PROJECT'}
					</span>
				</div>

				<!-- Project Title -->
				<h2
					class="text-2xl md:text-2xl font-medium text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
					{projectName}
				</h2>

				<!-- Description -->
				<p class="text-sm text-muted-foreground leading-relaxed font-normal font-sans">
					{desc}
				</p>

				{#if output}
					<div class="mt-4 text-sm text-muted-foreground font-sans">
						<span class="text-muted-foreground font-medium">Deliverables:</span>
						{output}
					</div>
				{/if}
			</div>

			<!-- Action Link -->
			<div class="pt-6 inline-flex items-center gap-1.5 text-sm text-foreground font-medium">
				<span
					class="underline underline-offset-4 decoration-muted-foreground group-hover:decoration-primary group-hover:text-primary transition-all"
					>View Project</span>
				<span class="group-hover:translate-x-1 group-hover:text-primary transition-all duration-200">→</span>
			</div>
		</div>

		<!-- Right: Thumbnail Image -->
		{#if thumbnail}
			<div class="md:col-span-6 overflow-hidden bg-card aspect-video relative w-full">
				<img
					alt={projectName}
					loading="lazy"
					src={thumbnail}
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
			</div>
		{/if}
	</article>
</a>
