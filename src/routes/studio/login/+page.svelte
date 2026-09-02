<svelte:head>
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<meta name="googlebot" content="noindex, nofollow" />
</svelte:head>

<script lang="ts">
	import { page } from '$app/state';
	import { authClient } from '#lib/auth-client.js';
	import { Button } from '#lib/components/ui/button/index.js';
	let { data } = $props();

	const error = $derived(page.url.searchParams.get('error'));
	const redirect = $derived(page.url.searchParams.get('redirect') ?? '/studio');
	let msg = $state('');
	let loading = $state(false);

	const callbackUrl = $derived.by(() => {
		try {
			return new URL(redirect, page.url.origin).href;
		} catch {
			return new URL('/studio', page.url.origin).href;
		}
	});

	async function handleGoogle() {
		loading = true;
		msg = '';
		console.log('[auth] handleGoogle start', { callbackUrl, authUrl: (data as any).authUrl, pageOrigin: page.url.origin });
		try {
			console.log('[auth] calling authClient.signIn.social');
			const res: any = await authClient.signIn.social({ provider: 'google', callbackURL: callbackUrl } as any);
			console.log('[auth] raw res', res);
			console.log('[auth] res.data', res?.data);
			console.log('[auth] res.error', res?.error);
			if (res?.error) {
				console.error('[auth] signIn error', res.error);
				msg = `signIn error: ${res.error.message ?? JSON.stringify(res.error)}`;
				return;
			}
			const url = res?.data?.url;
			console.log('[auth] redirect url', url);
			if (url) {
				console.log('[auth] navigating to', url);
				window.location.href = url;
				return;
			}
			console.error('[auth] no url in response', res);
			msg = `No redirect URL in response: ${JSON.stringify(res)}`;
		} catch (e) {
			console.error('[auth] exception', e);
			console.error('[auth] stack', (e as Error).stack);
			msg = `Exception: ${String((e as Error).message)} — check console`;
		} finally {
			loading = false;
			console.log('[auth] handleGoogle end, loading', loading, 'msg', msg);
		}
	}
</script>

<div class="min-h-screen flex items-center justify-center bg-background px-6">
	<div class="w-full max-w-md border rounded-none p-8 shadow-sm bg-card">
		<h1 class="text-2xl font-bold">Studio Login</h1>
		<p class="text-sm text-muted-foreground mt-2">Sign in with Google. Only the admin email configured in <code>CMS_ADMIN_EMAIL</code> is allowed.</p>
		{#if error}
			<p class="mt-4 text-sm text-red-600 border border-red-200 bg-red-50 rounded-none p-3">{error}</p>
		{/if}
		{#if msg}
			<p class="mt-4 text-sm text-amber-600 border border-amber-200 bg-amber-50 rounded-none p-3">{msg}</p>
		{/if}
		<Button onclick={handleGoogle} disabled={loading} class="mt-6 w-full">
			{loading ? 'Redirecting…' : 'Continue with Google (JS)'}
		</Button>
		<Button href="/studio/login/google?redirect={encodeURIComponent(redirect)}" variant="outline" class="mt-3 w-full">Continue with Google (server)</Button>
		<p class="text-sm text-muted-foreground mt-2">If you see this page stuck, check server logs — errors now surface as ?error=.</p>
		<p class="mt-4 text-sm text-muted-foreground">
			Auth endpoint: <code class="text-sm break-all">{(data as any).authUrl || 'NEON_AUTH_BASE_URL not set'}</code>
		</p>

		<p class="mt-2 text-sm"><a href="/" class="underline">← Back to site</a></p>
	</div>
</div>
