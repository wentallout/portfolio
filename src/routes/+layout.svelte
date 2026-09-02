<script lang="ts">
	import './layout.css';
	import { goto } from '$app/navigation';
	import Footer from '#lib/components/layout/footer/Footer.svelte';
	import BottomNav from '#lib/components/layout/bottom/BottomNav.svelte';
	import NavBar from '#lib/components/layout/header/NavBar.svelte';
	import GlassShatter from '#lib/components/GlassShatter.svelte';
	import Revolver from '#lib/components/Revolver.svelte';
	import TargetCursor from '#lib/components/TargetCursor.svelte';
	import SfxProvider from '#lib/components/SfxProvider.svelte';
	import Misc from '#lib/sections/layout/Misc.svelte';
import { attachGlyphnav } from 'glyphnav/sveltekit';
import { ModeWatcher } from 'mode-watcher';
 import { Toaster } from '#lib/components/ui/sonner/index.js';
 import { onMount } from 'svelte';
 import { authClient } from '#lib/auth-client.js';

	let { children, data } = $props();

	onMount(() => {
		document.documentElement.toggleAttribute('hydrated', true);

		function getJwtExp(token: string): number | null {
			try {
				const p = token.split('.')[1];
				if (!p) return null;
				const j = JSON.parse(atob(p.replace(/-/g, '+').replace(/_/g, '/')));
				return typeof j.exp === 'number' ? j.exp : null;
			} catch {
				return null;
			}
		}

		function persistToken(token: string, expiresAt?: string | Date | number) {
			let expSec: number | null = null;
			if (expiresAt) {
				const d = new Date(expiresAt as string);
				if (!isNaN(d.getTime())) expSec = Math.floor(d.getTime() / 1000);
				else if (typeof expiresAt === 'number') expSec = Math.floor(expiresAt / 1000);
			}
			if (!expSec) expSec = getJwtExp(token);
			const nowSec = Math.floor(Date.now() / 1000);
			let maxAge = expSec ? expSec - nowSec : 60 * 60 * 24 * 7;
			// clamp: at least 1h, at most 30d — "keep me logged in at all times"
			maxAge = Math.max(60 * 60, Math.min(maxAge, 60 * 60 * 24 * 30));
			if (!Number.isFinite(maxAge) || maxAge <= 0) maxAge = 60 * 60 * 24 * 7;
			const secure = window.location.protocol === 'https:' ? '; Secure' : '';
			const base = `path=/; SameSite=Lax; max-age=${maxAge}${secure}`;
			const enc = encodeURIComponent(token);
			document.cookie = `better-auth.session_token=${enc}; ${base}`;
			document.cookie = `__Secure-better-auth.session_token=${enc}; ${base}`;
			document.cookie = `neon_auth_token=${enc}; ${base}`;
		}

		async function syncSession() {
			try {
				const res: any = await authClient.getSession();
				const token = res?.data?.session?.token ?? res?.data?.token;
				const expiresAt = res?.data?.session?.expiresAt;
				if (token) persistToken(token, expiresAt);
			} catch {}
		}

		// Better Auth verifier: after OAuth, Neon redirects to /?neon_auth_session_verifier=...
		const url = new URL(window.location.href);
		if (url.searchParams.has('neon_auth_session_verifier')) {
			authClient.getSession().then((res: any) => {
				try {
					const token = res?.data?.session?.token ?? res?.data?.token;
					const expiresAt = res?.data?.session?.expiresAt;
					if (token) persistToken(token, expiresAt);
				} catch {}
				url.searchParams.delete('neon_auth_session_verifier');
				const dest = url.searchParams.get('redirect') ?? '/studio';
				const clean = dest.startsWith('/') ? dest : '/studio';
				history.replaceState(null, '', url.pathname + url.search);
				goto(clean, { replaceState: true });
			});
		} else {
			// No verifier — proactively refresh mirrored cookie (handles page reload after SDK cache was cleared)
			syncSession();
		}

		// Keep-alive: refresh mirrored cookie periodically + on visibility/focus so session never expires
		// Poll every 10 min; also sync when tab becomes visible — covers background throttling / laptop sleep
		const interval = window.setInterval(syncSession, 10 * 60 * 1000);
		const onVisible = () => {
			if (document.visibilityState === 'visible') syncSession();
		};
		const onFocus = () => syncSession();
		document.addEventListener('visibilitychange', onVisible);
		window.addEventListener('focus', onFocus);
		const detachGlyphnav = attachGlyphnav(goto, { animatePopState: true, commit: 'before', duration: 250 }).detach;
		const cleanupKeepAlive = () => {
			clearInterval(interval);
			document.removeEventListener('visibilitychange', onVisible);
			window.removeEventListener('focus', onFocus);
		};

		// WebMCP: expose site tools to AI agents via browser
		// @ts-expect-error - WebMCP is experimental
		const modelContext = navigator.modelContext ?? document.modelContext;
		const registerTool = modelContext?.registerTool ?? modelContext?.provideContext;

		if (typeof modelContext?.registerTool === 'function') {
			const controller = new AbortController();
			const signal = controller.signal;

			// ModelContext requires `execute` inside the tool definition (not as 2nd arg).
			// Wrap in try/catch — different browsers gate the API differently.
			try {
				modelContext.registerTool(
					{
						name: 'search_blogs',
						description: 'Search blog posts by keyword. Returns matching titles and URLs.',
						inputSchema: {
							type: 'object',
							properties: {
								query: { type: 'string', description: 'Search keyword' }
							},
							required: ['query']
						},
						execute: async ({ query }: { query: string }) => {
							try {
								const res = await fetch(`/api/blogs`);
								const blogs = await res.json();
								const q = query.toLowerCase();
								const matches = blogs
									.filter((b: { meta: { title: string; description?: string } }) =>
										`${b.meta.title} ${b.meta.description || ''}`.toLowerCase().includes(q)
									)
									.slice(0, 5)
									.map((b: { meta: { title: string }; path: string }) => ({ title: b.meta.title, path: b.path }));
								return { query, results: matches };
							} catch (e) {
								return { error: String(e) };
							}
						}
					},
					{ signal }
				);
			} catch (e) {
				console.warn('[modelContext] search_blogs register failed', e);
			}

			try {
				modelContext.registerTool(
					{
						name: 'get_projects',
						description: 'List portfolio projects with links',
						inputSchema: { type: 'object', properties: {}, required: [] },
						execute: async () => {
							return {
								projects: [
									{ name: 'NVault', path: '/projects/nvault' },
									{ name: 'Reza', path: '/projects/reza' },
									{ name: 'Stock Grabber', path: '/projects/stock-grabber' },
									{ name: 'Super Tab Manager', path: '/projects/super-tab-manager' }
								]
							};
						}
					},
					{ signal }
				);
			} catch (e) {
				console.warn('[modelContext] get_projects register failed', e);
			}

			try {
				modelContext.registerTool(
					{
						name: 'navigate',
						description: 'Navigate to a site section',
						inputSchema: {
							type: 'object',
							properties: {
								path: {
									type: 'string',
									description: 'Path to navigate to',
									enum: ['/', '/about', '/projects', '/blogs', '/contact', '/design-system']
								}
							},
							required: ['path']
						},
						execute: async ({ path }: { path: string }) => {
							await goto(path);
							return { navigated: path };
						}
					},
					{ signal }
				);
			} catch (e) {
				console.warn('[modelContext] navigate register failed', e);
			}

			try {
				modelContext.registerTool(
					{
						name: 'get_contact_info',
						description: 'Get contact information for Khoa Nguyen',
						inputSchema: { type: 'object', properties: {}, required: [] },
						execute: async () => {
							return {
								email: 'wentallout@gmail.com',
								booking: 'https://cal.com/wentallout/web',
								linkedin: 'https://linkedin.com/in/wentallout',
								github: 'https://github.com/wentallout'
							};
						}
					},
					{ signal }
				);
			} catch (e) {
				console.warn('[modelContext] get_contact_info register failed', e);
			}

			return () => {
				controller.abort();
				cleanupKeepAlive();
				detachGlyphnav();
			};
		} else if (typeof registerTool === 'function') {
			// Fallback for older EPP provideContext API
			// @ts-expect-error - legacy API
			registerTool({
				tools: [
					{
						name: 'get_portfolio_info',
						description: 'Get information about the portfolio projects and skills',
						inputSchema: { type: 'object', properties: {} },
						execute: async () => ({
							contact: 'Use /contact to reach out',
							projects: 'Check /projects for a list of my work',
							skills: 'Check /about for my technical stack'
						})
					},
					{
						name: 'search_blogs',
						description: 'Search blogs',
						inputSchema: {
							type: 'object',
							properties: { query: { type: 'string' } },
							required: ['query']
						},
						execute: async ({ query }) => {
							const res = await fetch('/api/blogs');
							const blogs = await res.json();
							return blogs.filter((b) => b.meta.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
						}
					}
				]
			});
			return () => {
				cleanupKeepAlive();
				detachGlyphnav();
			};
		}

		return () => {
			cleanupKeepAlive();
			detachGlyphnav();
		};
	});
</script>

	<ModeWatcher defaultMode="system" />
	<Toaster position="top-right" richColors closeButton />
	<SfxProvider />
	<TargetCursor
	hideDefaultCursor={false}
	hoverDuration={0.2}
	parallaxOn={true}
	spinDuration={2}
	targetSelector=".cursor-target" />
<GlassShatter />
<Revolver />
<Misc />

<div
	class="min-h-screen layout-gutter-bg antialiased selection:bg-primary/25 selection:text-primary transition-colors duration-200">
	<div
		class="max-w-6xl mx-auto border-grid-l border-grid-r min-h-screen flex flex-col bg-background text-foreground relative mb-16 md:mb-0 transition-colors duration-200">
		<NavBar user={data?.user} />

		<main id="main-content" class="grow w-full relative z-10">
			{@render children?.()}
		</main>

		<Footer />
	</div>

	<BottomNav />
</div>
