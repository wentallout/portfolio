<script>
	import { availableLanguageTags } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n.js';
</script>

<div class="">
	{#each availableLanguageTags as lang}
		<a href={i18n.route($page.url.pathname)} hreflang={lang}>{lang}</a>
	{/each}
</div>




