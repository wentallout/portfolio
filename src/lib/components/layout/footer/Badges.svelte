<script>
	import ExLink from '$components/common/ExLink.svelte';
	import LogoNotAi from '$lib/assets/icons/LogoNotAI.svelte';
	import LogoSvelte from '$lib/assets/icons/LogoSvelte.svelte';
	import { onMount } from 'svelte';
</script>

<div class="badges">
	<ExLink ariaLabel="not by ai" href="https://notbyai.fyi">
		<LogoNotAi />
	</ExLink>
	<ExLink ariaLabel="Vite" href="https://vitejs.dev/">
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

	<ExLink ariaLabel="Svelte Vietnam" href="https://www.sveltevietnam.dev">
		<img
			class="badge__img"
			alt="svelte vietnam"
			height="42"
			loading="lazy"
			src="/images/sveltevn.webp"
			title="svelte vietnam"
			width="auto" />
	</ExLink>

	<ExLink ariaLabel="Netlify" href="https://netlify.com">
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
</div>

<style>
	.badges {
		width: 100%;

		margin-bottom: var(--spaceS);

		display: grid;
		grid-template-columns: 1fr 1fr;

		border-top: 1px solid var(--colorBorderSecondary);
		border-left: 1px solid var(--colorBorderSecondary);
		overflow: visible;

		border-radius: var(--borderRadius);
	}

	@media (min-width: 768px) {
		.badges {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}

	:global(.badges > a) {
		display: grid;
		place-items: center;
		border-bottom: 1px solid var(--colorBorderSecondary);
		border-right: 1px solid var(--colorBorderSecondary);
		padding: var(--spaceS);
		overflow: visible;
		border-radius: var(--borderRadius);
	}

	.badge__img {
		height: 42px;
		width: auto;
	}
</style>
