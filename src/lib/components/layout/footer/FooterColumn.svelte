<script lang="ts">
	/** @type {{ title: string, children: import('svelte').Snippet }} */
	let { children, title } = $props();
</script>

<div class="signature-padding space-y-4 relative">
	<h4 class="text-xs font-medium text-muted-foreground uppercase tracking-widest">
		{title}
	</h4>
	{@render children()}
</div>
