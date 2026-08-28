<script>
	import CustomBlogToc from '$components/blogs/CustomBlogToc.svelte';
	import { ListBullets } from '$lib/assets/icons/icons';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-grid-b relative bg-background items-stretch">
	<!-- Main Article Content Column -->
	<div class="lg:col-span-8 border-grid-b lg:border-grid-b-0 lg:border-grid-r signature-padding relative bg-background min-w-0">

		<div class="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-rose-400 hover:prose-a:text-rose-300 prose-code:text-rose-300 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-img:border prose-img:border-border">
			{@render children?.()}
		</div>
	</div>

	<!-- Desktop Table of Contents Sidebar Column -->
	<div class="lg:col-span-4 signature-padding relative bg-background hidden lg:block">

		<div class="sticky top-24 space-y-4">
			<div class="flex items-center justify-between text-sm pb-3 border-b border-border">
				<span class="uppercase tracking-widest text-sm text-muted-foreground font-medium font-sans flex items-center gap-2">
					<ListBullets color="#9ca3af" height="16" width="16" />
					TABLE OF CONTENTS
				</span>
				<span class="text-muted-foreground font-sans">INDEX</span>
			</div>
			<CustomBlogToc />
		</div>
	</div>
</div>
