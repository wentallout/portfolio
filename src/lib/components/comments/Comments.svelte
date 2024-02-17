<script>
	import Giscus from '$components/comments/Giscus.svelte';

	export let category = 'Blogs';
	let categoryId = '';

	if (category === 'Blogs') {
		categoryId = 'DIC_kwDOH5VoSc4CV-u6';
	} else {
		categoryId = 'DIC_kwDOH5VoSc4CV-xr';
	}
</script>

<section>
	<Giscus
		id="comments"
		{category}
		{categoryId}
		emitMetadata="1"
		inputPosition="top"
		lang="en"
		loading="lazy"
		mapping="title"
		reactionsEnabled="1"
		repo="wentallout/portfolio"
		repoId="R_kgDOH5VoSQ"
		strict="0"
		theme="transparent_dark" />
</section>
