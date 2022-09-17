<script>
	import { browser } from '$app/environment';
	import MarkdownContainer from '$lib/components/Markdown/MarkdownContainer.svelte';
	browser;
	import 'swiper/css/bundle';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<MarkdownContainer>
	<slot />
</MarkdownContainer>
