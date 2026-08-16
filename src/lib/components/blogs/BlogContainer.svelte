<script>
	import CustomBlogToc from '$components/blogs/CustomBlogToc.svelte';
	import { ListBullets } from '$lib/assets/icons/icons';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-grid-b relative bg-black items-stretch">
	<!-- Main Article Content Column -->
	<div class="lg:col-span-8 border-grid-b lg:border-grid-b-0 lg:border-grid-r p-6 md:p-8 relative bg-black min-w-0">
		<span class="grid-plus grid-plus-tl">+</span>
		<span class="grid-plus grid-plus-tr">+</span>
		<span class="grid-plus grid-plus-bl">+</span>
		<span class="grid-plus grid-plus-br">+</span>

		<div class="prose prose-invert max-w-none text-neutral-300 leading-relaxed prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white prose-a:text-rose-400 hover:prose-a:text-rose-300 prose-code:text-rose-300 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800 prose-img:border prose-img:border-neutral-800">
			{@render children?.()}
		</div>
	</div>

	<!-- Desktop Table of Contents Sidebar Column -->
	<div class="lg:col-span-4 p-6 md:p-8 relative bg-black hidden lg:block">
		<span class="grid-plus grid-plus-tl">+</span>
		<span class="grid-plus grid-plus-tr">+</span>
		<span class="grid-plus grid-plus-bl">+</span>
		<span class="grid-plus grid-plus-br">+</span>

		<div class="sticky top-24 space-y-4">
			<div class="flex items-center justify-between text-sm pb-3 border-b border-neutral-800">
				<span class="uppercase tracking-widest text-xs text-neutral-400 font-semibold font-sans flex items-center gap-2">
					<ListBullets color="#9ca3af" height="16" width="16" />
					TABLE OF CONTENTS
				</span>
				<span class="text-neutral-500 font-sans">INDEX</span>
			</div>
			<CustomBlogToc />
		</div>
	</div>
</div>
