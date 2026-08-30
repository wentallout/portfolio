<script lang="ts">
	import ExLink from '#lib/components/common/ExLink.svelte';

	/** @type {{ href: string, ariaLabel?: string, children: import('svelte').Snippet }} */
	let { ariaLabel = '', children, href } = $props();
</script>

<ExLink {ariaLabel} {href}>
	<div
		class="p-2.5 bg-card border-grid-all hover:bg-primary hover:text-primary-foreground transition-colors">
		{@render children()}
	</div>
</ExLink>
