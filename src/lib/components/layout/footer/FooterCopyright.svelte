<script>
	import { VERSION } from '@sveltejs/kit';
	import ExLink from '$components/common/ExLink.svelte';
	import Badges from '$components/layout/footer/Badges.svelte';
	import LogoSvelte from '$lib/assets/icons/LogoSvelte.svelte';
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities.js';

	let currentYear = new Date().getFullYear();
</script>

<Badges />
<div class="end text-xs">
	<div class="end__text">
		Copyright {`${COPYRIGHT_ENTITY}`}
		{currentYear} Nguyen Dang Khoa (wentallout), All Rights Reserved.
	</div>

	<ExLink ariaLabel="SvelteKit" href="https://kit.svelte.dev">
		<div class="end__text env__text--svelte">
			<div class="">Made by Khoa with</div>
			<LogoSvelte />
			<div class="">{VERSION}</div>
		</div>
	</ExLink>
</div>

<style>
	.end {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		font-weight: 300;
	}
	.end__text {
		user-select: none;
		margin-top: var(--space-small);
		color: var(--color-text-tertiary);
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		gap: 1ch;
	}

	.env__text--svelte {
		color: var(--color-svelte);
	}
</style>
