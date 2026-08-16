<script>
	import ExLink from '$components/common/ExLink.svelte';

	/** @type {{ title: string, href?: string, icon: import('svelte').Snippet, children: import('svelte').Snippet }} */
	let { children, href, icon, title } = $props();
</script>

<div class="p-6 md:p-8 border-grid-b last:border-b-0 flex items-start gap-4 w-full relative flex-1 bg-black hover:bg-neutral-950/40 transition-colors">
	<span class="grid-plus grid-plus-bl">+</span>
	<span class="grid-plus grid-plus-br">+</span>

	<div class="text-neutral-400 shrink-0 pt-0.5">
		{@render icon?.()}
	</div>

	<div class="flex flex-col gap-1.5 min-w-0 flex-1">
		{#if href}
			<ExLink {href}>
				<div class="text-sm font-semibold text-white hover:text-rose-400 transition-colors">
					{title}
				</div>
			</ExLink>
		{:else}
			<div class="text-sm font-semibold text-white">
				{title}
			</div>
		{/if}
		<div class="text-sm text-neutral-400 space-y-1 font-normal">
			{@render children?.()}
		</div>
	</div>
</div>




