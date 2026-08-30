<script lang="ts">
	import CustomBlogToc from '#lib/components/blogs/CustomBlogToc.svelte';
	import { ListBullets } from '#lib/assets/icons/icons.js';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div
	class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-grid-b relative bg-background items-stretch">
	<!-- Main Article Content Column -->
	<div
		class="lg:col-span-8 border-grid-b lg:border-grid-b-0 lg:border-grid-r signature-padding relative bg-background min-w-0">
		<div
			class="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-img:border prose-img:border-border">
			{@render children?.()}
		</div>
	</div>

	<!-- Desktop Table of Contents Sidebar Column -->
	<div class="lg:col-span-4 signature-padding relative bg-background hidden lg:block">
		<div class="sticky top-24 space-y-4">
			<div class="flex items-center justify-between text-sm pb-3 border-b border-border">
				<span
					class="uppercase tracking-widest text-sm text-muted-foreground font-medium font-sans flex items-center gap-2">
					<ListBullets color="currentColor" />
					TABLE OF CONTENTS
				</span>
			</div>
			<CustomBlogToc />
		</div>
	</div>
</div>
