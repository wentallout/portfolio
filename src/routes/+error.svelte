<script lang="ts">
	import { page } from '$app/state';
	import PrimaryButton from '#lib/components/button/PrimaryButton.svelte';
	import SecondaryButton from '#lib/components/button/SecondaryButton.svelte';
	import { Copy, House, ArrowCounterClockwise, Tag as TagIcon } from '#lib/assets/icons/icons.js';
	import Check from '~icons/ph/check';
	import { toast } from 'svelte-sonner';

	let copiedPrompt = $state(false);
	let copiedRaw = $state(false);

	let customMessage = $derived.by(() => {
		switch (page.status) {
			case 403:
				return "Sorry, you don't have permission to access this page. Please contact the administrator.";
			case 404:
				return "Oops! The page you're looking for cannot be found. Check the URL or try searching.";
			case 500:
				return "We're sorry, something went wrong on our side. Our team has been notified.";
			case 503:
				return 'Servers are down for maintenance. We’ll be back shortly.';
			default:
				return 'An unexpected error occurred. Please try again.';
		}
	});

	let errorMessage = $derived(
		(page.error as unknown as App.Error & Record<string, unknown>)?.message ?? 'Unknown error'
	);
	let errorStack = $derived(
		(page.error as unknown as Record<string, unknown>)?.['stack'] as string | undefined
	);
	let errorDetails = $derived.by(() => {
		try {
			const err = page.error as unknown as Record<string, unknown>;
			if (!err) return null;
			const rest = { ...err };
			delete (rest as Record<string, unknown>).message;
			delete (rest as Record<string, unknown>).stack;
			const keys = Object.keys(rest);
			return keys.length ? JSON.stringify(rest, null, 2) : null;
		} catch {
			return null;
		}
	});

	let prompt = $derived.by(() => {
		const url =
			page.url?.href ?? (typeof window !== 'undefined' ? window.location.href : 'unknown');
		const stack = errorStack ? `\nStack:\n${errorStack}` : '';
		const details = errorDetails ? `\nExtra details:\n${errorDetails}` : '';
		return `Fix this SvelteKit error for my portfolio site (wentallout.io.vn):

- URL: ${url}
- Status: ${page.status}
- Message: ${errorMessage}${stack}${details}
- Timestamp: ${new Date().toISOString()}
- Route: ${page.route?.id ?? 'unknown'}
- Expected: /blogs shows tags from Neon Postgres via remote functions, /blogs/tags/[tag] filters, /blogs/[slug] shows post

Project context:
- SvelteKit 3 (Svelte 5) with experimental remoteFunctions + async compilerOptions (vite.config.ts)
- All data loading MUST use Remote Functions: query/form/command/prerender from '$app/server' in *.remote.ts under #lib/remotes/ (e.g. #lib/remotes/blogs.remote.ts with getBlogs, getBlogsByTag, getPostBySlug)
- Do NOT use +page.server.ts load or fetch('/api/...') for internal data — only leave *.server.ts for hooks.server.ts, redirects, rss.xml/sitemap.xml, or raw +server.ts external endpoints
- DB: @neondatabase/serverless + DATABASE_URL, tables: posts, tags, posts_to_tags (tags renamed from categories)
- Styling: text-sm minimum (never text-xs), shadcn-svelte, tailwind

Error file: src/routes/+error.svelte

Please give a minimal diff fix and explain root cause in 2-3 sentences.`;
	});

	async function copyPrompt() {
		try {
			await navigator.clipboard.writeText(prompt);
			copiedPrompt = true;
			toast.success('AI prompt copied to clipboard');
			setTimeout(() => (copiedPrompt = false), 2000);
		} catch {
			toast.error('Clipboard failed — prompt is in the preview below, copy manually');
		}
	}

	async function copyRaw() {
		const raw = JSON.stringify(
			{
				status: page.status,
				message: errorMessage,
				stack: errorStack ?? null,
				url: page.url?.href ?? null,
				route: page.route?.id ?? null
			},
			null,
			2
		);
		try {
			await navigator.clipboard.writeText(raw);
			copiedRaw = true;
			toast.success('Raw error copied');
			setTimeout(() => (copiedRaw = false), 2000);
		} catch {
			toast.error('Copy failed');
		}
	}

	function reload() {
		location.reload();
	}
</script>

<svelte:head>
	<title>{page.status} — Error</title>
</svelte:head>

<div class="flex flex-col items-center gap-6 p-6 md:p-8 max-w-4xl mx-auto w-full">
	<!-- Header -->
	<div class="w-full bg-background border-grid-all relative">
		<div class="signature-padding flex flex-col gap-4">
			<div class="flex items-center gap-3 flex-wrap">
				<span
					class="inline-flex items-center px-3 py-1 bg-destructive text-destructive-foreground text-sm font-medium font-mono">
					{page.status}
				</span>
				<h1 class="text-2xl md:text-3xl font-medium tracking-tight text-foreground font-fancy">
					{page.error?.message ?? `${page.status} Error`}
				</h1>
			</div>
			<p class="text-sm text-muted-foreground max-w-2xl leading-relaxed">
				{customMessage}
			</p>
			<div class="flex flex-wrap gap-2 pt-2">
				<a href="/" rel="external">
					<PrimaryButton label="Take Me Home">
						<House height="16" width="16" />
					</PrimaryButton>
				</a>
				<button type="button" onclick={reload} class="inline-flex">
					<SecondaryButton label="Try Again">
						<ArrowCounterClockwise height="16" width="16" />
					</SecondaryButton>
				</button>
			</div>
		</div>
	</div>

	<!-- Detailed error -->
	<div class="w-full bg-card border-grid-all relative">
		<div class="signature-padding flex flex-col gap-4">
			<div class="flex items-center gap-2 text-sm font-medium text-foreground">
				<TagIcon height="16" width="16" />
				<span>Detailed error</span>
				<span class="text-muted-foreground font-normal"
					>— only you see the stack; it’s not sent to the server</span>
			</div>

			<div class="grid gap-3 text-sm">
				<div class="flex flex-col gap-1">
					<span class="text-muted-foreground text-sm">Status</span>
					<span class="font-mono text-foreground">{page.status}</span>
				</div>
				<div class="flex flex-col gap-1">
					<span class="text-muted-foreground text-sm">Message</span>
					<span class="text-foreground break-words">{errorMessage}</span>
				</div>
				<div class="flex flex-col gap-1">
					<span class="text-muted-foreground text-sm">URL</span>
					<span class="font-mono text-foreground break-all text-sm">{page.url.href}</span>
				</div>
				{#if page.route?.id}
					<div class="flex flex-col gap-1">
						<span class="text-muted-foreground text-sm">Route</span>
						<span class="font-mono text-foreground text-sm">{page.route.id}</span>
					</div>
				{/if}
			</div>

			{#if errorStack}
				<details class="group bg-background border-grid-all">
					<summary
						class="cursor-pointer list-none flex items-center justify-between p-3 text-sm font-medium text-foreground select-none">
						<span>Stack trace</span>
						<span class="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
					</summary>
					<pre
						class="p-3 pt-0 text-sm font-mono text-muted-foreground whitespace-pre-wrap break-words overflow-x-auto max-h-72 overflow-y-auto">{errorStack}</pre>
				</details>
			{/if}

			{#if errorDetails}
				<details class="group bg-background border-grid-all">
					<summary
						class="cursor-pointer list-none flex items-center justify-between p-3 text-sm font-medium text-foreground select-none">
						<span>Extra error fields</span>
						<span class="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
					</summary>
					<pre
						class="p-3 pt-0 text-sm font-mono text-muted-foreground whitespace-pre-wrap break-words overflow-x-auto">{errorDetails}</pre>
				</details>
			{/if}

			<div class="flex flex-wrap gap-2 pt-2">
				<button
					type="button"
					onclick={copyRaw}
					class="inline-flex items-center gap-2 px-3 py-2 bg-background border-grid-all hover:bg-accent text-sm font-medium text-foreground transition-colors">
					{#if copiedRaw}
						<Check height="16" width="16" />
						Copied
					{:else}
						<Copy height="16" width="16" />
						Copy raw error
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- AI prompt -->
	<div class="w-full bg-background border-grid-all relative">
		<div class="signature-padding flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<h2 class="text-base font-medium text-foreground">Fix with AI</h2>
				<p class="text-sm text-muted-foreground leading-relaxed">
					Copy a ready-made prompt with all error context. Paste it into your AI assistant (Muse
					Spark, ChatGPT, etc.) for a minimal fix.
				</p>
			</div>

			<div class="flex flex-wrap gap-2">
				<button
					type="button"
					onclick={copyPrompt}
					class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors">
					{#if copiedPrompt}
						<Check />
						Copied!
					{:else}
						<Copy />
						Copy AI fix prompt
					{/if}
				</button>
				<span class="text-sm text-muted-foreground self-center"
					>Prompt includes URL, status, message, stack, and project conventions (Remote Functions in
					#lib/remotes/, no text-xs)</span>
			</div>
		</div>
	</div>
</div>
