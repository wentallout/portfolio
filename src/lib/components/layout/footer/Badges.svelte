<script>
	import ExLink from '$components/common/ExLink.svelte';
	import LogoNotAi from '$lib/assets/icons/LogoNotAI.svelte';
	import LogoSvelte from '$lib/assets/icons/LogoSvelte.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener(
			'DOMContentLoaded',
			function () {
				var e = 'dmca-badge';
				var t = 'refurl';
				var n = document.querySelectorAll('a.' + e);
				if (n[0].getAttribute('href').indexOf('refurl') < 0) {
					for (var r = 0; r < n.length; r++) {
						var i = n[r];
						i.href =
							i.href + (i.href.indexOf('?') === -1 ? '?' : '&') + t + '=' + document.location;
					}
				}
			},
			false
		);
	});
</script>

<div class="badges">
	<ExLink style="display:block" ariaLabel="not by ai" href="https://notbyai.fyi">
		<LogoNotAi />
	</ExLink>
	<ExLink style="display:block" ariaLabel="Vite" href="https://vitejs.dev/">
		<img
			class="badge__img"
			alt="vite logo"
			height="42"
			loading="lazy"
			src="/images/vite.svg"
			title="vite logo"
			width="auto" />
	</ExLink>
	<ExLink style="display:block" ariaLabel="SvelteKit" href="https://kit.svelte.dev">
		<LogoSvelte height="42" width="100%" />
	</ExLink>

	<ExLink style="display:block" ariaLabel="Svelte Vietnam" href="https://www.sveltevietnam.dev">
		<img
			class="badge__img"
			alt="svelte vietnam"
			height="42"
			loading="lazy"
			src="/images/sveltevn.webp"
			title="svelte vietnam"
			width="auto" />
	</ExLink>

	<ExLink style="display:block" ariaLabel="Netlify" href="https://netlify.com">
		<img
			class="badge__img"
			alt="built with netlify"
			height="42"
			loading="lazy"
			src="/images/netlify.svg"
			title="built with netlify"
			width="auto" />
	</ExLink>

	<ExLink
		style="display:block"
		ariaLabel="green web foundation"
		href="https://www.thegreenwebfoundation.org/green-web-check/?url=https%3A%2F%2Fwentallout.io.vn">
		<img
			alt="This website runs on green hosting - verified by thegreenwebfoundation.org"
			height="95px"
			loading="lazy"
			src="https://app.greenweb.org/api/v3/greencheckimage/wentallout.io.vn?nocache=true"
			title="green hosting"
			width="200px" />
	</ExLink>

	<a
		class="dmca-badge"
		href="//www.dmca.com/Protection/Status.aspx?ID=3ed85d25-4eff-4e86-905a-dfa12904ade1"
		title="DMCA.com Protection Status">
		<img
			alt="DMCA.com Protection Status"
			src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=3ed85d25-4eff-4e86-905a-dfa12904ade1" />
	</a>
</div>

<!-- <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script> -->

<style>
	.badges {
		width: 100%;

		margin-bottom: var(--spaceS);

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

		border-top: 1px solid var(--colorBorderSecondary);
		border-left: 1px solid var(--colorBorderSecondary);
	}

	:global(.badge > a) {
		display: grid;
		place-items: center;
		border-bottom: 1px solid var(--colorBorderSecondary);
		border-right: 1px solid var(--colorBorderSecondary);
		padding: var(--spaceS);
	}

	.badge__img {
		height: 42px;
		width: auto;
	}
</style>
