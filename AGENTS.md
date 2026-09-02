# Project Rules

- Text sizing: `text-xs` is not allowed. Always use `text-sm` (`14px` / `0.875rem`) or larger. NEVER use extra small sizes (`text-xs`, `text-[10px]`, `font-size-2xs`, etc.) across UI components and typography.
- Data loading: Strictly use SvelteKit Remote Functions (`query`/`form`/`command`/`prerender` from `$app/server` in `*.remote.ts` files with `await` in components) for all data fetching and mutations. Do not use `+page.server.ts`/`+layout.server.ts` `load` functions or `fetch('/api/...')` for internal data — only leave `*.server.ts` files behind when they cannot be replaced (e.g., `hooks.server.ts`, redirects, XML endpoints like `rss.xml`/`sitemap.xml`, or raw `+server.ts` API routes that must stay as external HTTP endpoints).
