<script>
	import Giscus from '@giscus/svelte';

	export let category = 'Blogs';
	let categoryId = 'DIC_kwDOH5VoSc4CV-u6';

	if (category = 'Projects') {
		categoryId = 'DIC_kwDOH5VoSc4CV-xr';
	}
</script>

<Giscus
	id="comments"
	repo="wentallout/portfolio"
	repoId="R_kgDOH5VoSQ"
	{category}
	{categoryId}
	mapping="title"
	strict="0"
	reactionsEnabled="1"
	emitMetadata="1"
	inputPosition="top"
	theme="dark"
	lang="en"
	loading="lazy" />
