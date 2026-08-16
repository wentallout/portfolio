<script>
	import BlogGiscus from '$components/blogs/BlogGiscus.svelte';
	import { Article } from '$lib/assets/icons/icons';

	/** @type {{category?: string}} */
	let { category = 'Blogs' } = $props();

	let categoryId = $derived(category === 'Blogs' ? 'DIC_kwDOH5VoSc4CV-u6' : 'DIC_kwDOH5VoSc4CV-xr');
</script>

<section class="w-full border-grid-b p-6 md:p-8 bg-black relative">
	<span class="grid-plus grid-plus-tl">+</span>
	<span class="grid-plus grid-plus-tr">+</span>
	<span class="grid-plus grid-plus-bl">+</span>
	<span class="grid-plus grid-plus-br">+</span>

	<div class="flex items-center justify-between text-sm mb-6">
		<span class="uppercase tracking-widest text-xs text-neutral-400 font-semibold font-sans flex items-center gap-2">
			<Article color="#9ca3af" height="16" width="16" />
			DISCUSSION
		</span>
		<span class="text-neutral-500 font-sans">COMMENTS</span>
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
		theme="transparent_dark" />
</section>
