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
</div>

<style>
	.badges {
		margin-bottom: var(--space-s);
		display: grid;
		grid-template-columns: auto auto;
		overflow: visible;
		align-items: start; /* or center or baseline */
		justify-items: start;
		max-width: fit-content;
		gap: var(--space-xs);
	}

	@media (min-width: 768px) {
		.badges {
			grid-template-columns: auto auto auto;
		}
	}

	:global(.badges > a) {
		display: grid;
		place-items: center;
		width: max-content;
		overflow: visible;
	}

	.badge__img {
		height: 42px;
		width: auto;
	}
</style>
