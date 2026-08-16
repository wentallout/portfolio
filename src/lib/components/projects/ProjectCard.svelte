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
	class="group block relative bg-black hover:bg-neutral-950/60 transition-colors duration-300 w-full"
>
	<article class="p-6 md:p-8 md:grid md:grid-cols-12 gap-6 md:gap-10 items-center w-full relative">
		<!-- Left: Text Details -->
		<div class="md:col-span-6 flex flex-col justify-between h-full space-y-4">
			<div>
				<!-- Card Header Tag & Number -->
				<div class="flex items-center justify-between mb-3 text-sm">
					<span class="uppercase tracking-widest text-[10px] text-neutral-400 font-semibold">
						{role ? role.split(',')[0] : 'PROJECT'}
					</span>
					<span class="text-neutral-500">{formattedIndex}</span>
				</div>

				<!-- Project Title -->
				<h2 class="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-rose-400 transition-colors">
					{projectName}
				</h2>

				<!-- Description -->
				<p class="text-sm text-neutral-400 leading-relaxed font-normal font-sans">
					{desc}
				</p>

				{#if output}
					<div class="mt-4 text-sm text-neutral-500 font-sans">
						<span class="text-neutral-400 font-medium">Deliverables:</span> {output}
					</div>
				{/if}
			</div>

			<!-- Action Link -->
			<div class="pt-6 inline-flex items-center gap-1.5 text-sm text-white font-medium">
				<span class="underline underline-offset-4 decoration-neutral-600 group-hover:decoration-white transition-all">View Project</span>
				<span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
			</div>
		</div>

		<!-- Right: Thumbnail Image -->
		{#if thumbnail}
			<div class="md:col-span-6 mt-6 md:mt-0 overflow-hidden border-grid-all bg-neutral-950 aspect-video relative">
				<img
					alt={projectName}
					loading="lazy"
					src={thumbnail}
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
			</div>
		{/if}
	</article>
</a>





