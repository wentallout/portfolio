<script>
	import ExLink from '$components/common/ExLink.svelte';
	import LogoNotAi from '$lib/assets/icons/LogoNotAI.svelte';
</script>

<div class="inline-flex items-center gap-3 grayscale opacity-40 hover:opacity-100 transition-opacity">
	<ExLink ariaLabel="not by ai" href="https://notbyai.fyi">
		<div class="h-6 flex items-center">
			<LogoNotAi />
		</div>
	</ExLink>

	<ExLink ariaLabel="Netlify" href="https://netlify.com">
		<img
			alt="built with netlify"
			class="h-5 w-auto object-contain"
			loading="lazy"
			src="/images/netlify.svg"
		/>
	</ExLink>

	<ExLink ariaLabel="Svelte Vietnam" href="https://www.sveltevietnam.dev">
		<img
			alt="svelte vietnam"
			class="h-5 w-auto object-contain"
			loading="lazy"
			src="/images/sveltevn.webp"
		/>
	</ExLink>
</div>

