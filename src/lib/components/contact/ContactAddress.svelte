<script>
	import ExLink from '$components/common/ExLink.svelte';

	/** @type {{ title: string, href?: string, icon: import('svelte').Snippet, children: import('svelte').Snippet }} */
	let { children, href, icon, title } = $props();
</script>

<div class="signature-padding flex items-start gap-4 w-full relative flex-1 bg-background hover:bg-card transition-colors">

	<div class="text-muted-foreground shrink-0 pt-0.5">
		{@render icon?.()}
	</div>

	<div class="flex flex-col gap-1.5 min-w-0 flex-1">
		{#if href}
			<ExLink {href}>
				<div class="text-sm font-medium text-foreground hover:text-primary transition-colors">
					{title}
				</div>
			</ExLink>
		{:else}
			<div class="text-sm font-medium text-foreground">
				{title}
			</div>
		{/if}
		<div class="text-sm text-muted-foreground space-y-1 font-normal">
			{@render children?.()}
		</div>
	</div>
</div>




