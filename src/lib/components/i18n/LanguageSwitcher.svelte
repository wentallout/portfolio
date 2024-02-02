<script>
	import { availableLanguageTags, languageTag } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n.js';
</script>

{#each availableLanguageTags as lang}
	<a
		href={i18n.route($page.url.pathname)}
		hreflang={lang}
		aria-current={lang === languageTag() ? 'page' : undefined}>
		{lang}
	</a>
{/each}
