<script lang="ts">
	import ExLink from '#lib/components/common/ExLink.svelte';
	import LogoNotAi from '#lib/assets/icons/LogoNotAI.svelte';
</script>

<div
	class="inline-flex items-center gap-3 grayscale opacity-40 hover:opacity-100 transition-opacity">
	<ExLink ariaLabel="not by ai" href="https://notbyai.fyi">
		<LogoNotAi class="h-5 w-auto flex items-center object-cover" />
	</ExLink>

	<ExLink ariaLabel="Netlify" href="https://netlify.com">
		<img
			class="h-6 w-auto object-cover"
			alt="built with netlify"
			loading="lazy"
			src="/images/netlify.svg" />
	</ExLink>

	<ExLink ariaLabel="Svelte Vietnam" href="https://www.sveltevietnam.dev">
		<img
			class="h-6 w-auto object-cover"
			alt="svelte vietnam"
			loading="lazy"
			src="/images/sveltevn.webp" />
	</ExLink>
</div>
