<script>
	import { availableLanguageTags, languageTag } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n.js';
</script>

{#each availableLanguageTags as lang}
	<li>
		<a
			aria-current={lang === languageTag() ? 'page' : undefined}
			href={i18n.route($page.url.pathname)}
			hreflang={lang}>
			{lang}
		</a>
	</li>
{/each}
