<script>
	import Giscus from '@giscus/svelte';

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
		repo="wentallout/portfolio"
		repoId="R_kgDOH5VoSQ"
		{category}
		{categoryId}
		mapping="title"
		strict="0"
		reactionsEnabled="1"
		emitMetadata="1"
		inputPosition="top"
		theme="transparent_dark"
		lang="en"
		loading="lazy" />
</section>
