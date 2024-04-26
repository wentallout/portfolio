<script>
	import { languageTag } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n.js';
	import FlagVn from '$lib/assets/icons/FlagVn.svelte';
	import FlagGb from '$lib/assets/icons/FlagGb.svelte';
	import FlagDe from '$lib/assets/icons/FlagDe.svelte';
</script>

<div class="lang">
	<a
		aria-current={'en' === languageTag() ? 'page' : undefined}
		href={i18n.route($page.url.pathname)}
		hreflang={'en'}>
		<FlagGb />
		English
	</a>

	<a
		aria-current={'de' === languageTag() ? 'page' : undefined}
		href={i18n.route($page.url.pathname)}
		hreflang={'de'}>
		<FlagDe />
		German
	</a>

	<a
		aria-current={'vi' === languageTag() ? 'page' : undefined}
		href={i18n.route($page.url.pathname)}
		hreflang={'vi'}>
		<FlagVn />
		Vietnamese
	</a>
</div>

<style>
	.lang {
		margin-top: var(--spaceM);
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: var(--spaceXS);
	}

	.lang a {
		display: flex;
		align-items: center;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: var(--space2XS);
	}
</style>
