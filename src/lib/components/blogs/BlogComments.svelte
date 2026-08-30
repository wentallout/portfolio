<script lang="ts">
	import BlogGiscus from '#lib/components/blogs/BlogGiscus.svelte';
	import { Article } from '#lib/assets/icons/icons.js';

	/** @type {{category?: string}} */
	let { category = 'Blogs' } = $props();

	let categoryId = $derived(category === 'Blogs' ? 'DIC_kwDOH5VoSc4CV-u6' : 'DIC_kwDOH5VoSc4CV-xr');
</script>

<section class="w-full border-grid-b signature-padding bg-background relative">
	<div class="flex items-center justify-between text-sm mb-6">
		<span
			class="uppercase tracking-widest text-sm text-muted-foreground font-medium font-sans flex items-center gap-2">
			<Article color="#9ca3af" height="16" width="16" />
			DISCUSSION
		</span>
		<span class="text-muted-foreground font-sans">COMMENTS</span>
	</div>

	<BlogGiscus
		id="comments"
		{category}
		{categoryId}
		emitMetadata="1"
		lang="en"
		loading="lazy"
		mapping="title"
		reactionsEnabled="0"
		repo="wentallout/portfolio"
		repoId="R_kgDOH5VoSQ"
		strict="0"
		theme="preferred_color_scheme" />
</section>
