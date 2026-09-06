<script lang="ts">
	/** @type {{ title: string, children: import('svelte').Snippet }} */
	let { children, title } = $props();
</script>

<div class="signature-padding space-y-4 relative">
	<h3 class="text-sm font-medium text-muted-foreground uppercase tracking-widest">
		{title}
	</h3>
	{@render children()}
</div>
