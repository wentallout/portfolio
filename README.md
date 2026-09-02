<h1 id="portfolio">Portfolio</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bf37fa7-ec78-4efd-aa9a-1a18a4fc62e4/deploy-status)](https://app.netlify.com/sites/khoa-design/deploys)

![Package mgr · pnpm](https://www.shieldcn.dev/badge/Package_mgr-pnpm-F69220.svg?logo=pnpm&variant=branded&size=sm)
![Language · TypeScript](https://www.shieldcn.dev/badge/Language-TypeScript-3178C6.svg?logo=typescript&variant=branded&size=sm)
![Lint · ESLint](https://www.shieldcn.dev/badge/Lint-ESLint-4B32C3.svg?logo=eslint&variant=branded&size=sm)
![Format · Prettier](https://www.shieldcn.dev/badge/Format-Prettier-F7B93E.svg?logo=prettier&variant=branded&size=sm)
![Bundler · Vite](https://www.shieldcn.dev/badge/Bundler-Vite-646CFF.svg?logo=vite&variant=branded&size=sm)
![Framework · Svelte](https://www.shieldcn.dev/badge/Framework-Svelte-FF3E00.svg?logo=svelte&variant=branded&size=sm)
![Tests · Playwright](https://www.shieldcn.dev/badge/Tests-Playwright-2EAD33.svg?logo=playwright&variant=branded&size=sm)
![Hosting · Netlify](https://www.shieldcn.dev/badge/Hosting-Netlify-00AD9F.svg?logo=netlify&variant=branded&size=sm)

![GitHub](https://img.shields.io/github/license/wentallout/portfolio?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/wentallout/portfolio?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/wentallout/portfolio?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/wentallout/portfolio?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/wentallout/portfolio?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/wentallout/portfolio?style=for-the-badge)

![](https://api.checklyhq.com/v1/badges/checks/a53b93b2-8489-41a8-b1f2-a90ab0cab17a?style=flat&theme=dark&responseTime=true)

![Banner](https://raw.githubusercontent.com/wentallout/wentallout/773d77e9c040bd20e5002d41738139946d9bd85d/images/portfolio-banner.svg)

## ❓ What is this?

Personal portfolio + blog + project showcase built with **SvelteKit 3 + Svelte 5 Runes**, hosted on **Netlify**. Content is no longer flat `.svx` files — all blogs and projects are now stored in **Neon Postgres** via **Drizzle ORM** and managed through an internal **Studio CMS** (`/studio`) with **Neon Auth (Better Auth)** and **Cloudinary** for media.

Visit: [wentallout.io.vn](https://wentallout.io.vn)

---

## 💻 Developing

[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?style=for-the-badge&logo=stackblitz)](https://stackblitz.com/github/wentallout/portfolio)
[![Open in VSCode](https://img.shields.io/badge/Open%20in-VSCode-blue?style=for-the-badge&logo=visualstudiocode)](https://open.vscode.dev/wentallout/portfolio)

**Requirements:** Node `>=22.21.0`, pnpm `>=11` (`pnpm@11.14.0`)

```bash
pnpm install
cp .env.example .env   # fill DATABASE_URL + Cloudinary + Neon Auth vars
pnpm run dev           # http://localhost:1111
```

Other scripts:

```bash
pnpm run build              # vite build (adapter-netlify)
pnpm run preview
pnpm run check              # svelte-check
pnpm run lint / lint:fix
pnpm run format / format:fix
pnpm run test               # playwright e2e
pnpm run test:unit           # vitest browser (client)
pnpm run test:server         # vitest node (server)
pnpm run knip               # dead-code scan
```

### Environment

Copy `.env.example` and fill:

```
DATABASE_URL=postgresql://...                # Neon pooled URL
# optional unpooled for migrations:
DATABASE_URL_UNPOOLED=postgresql://...
CLOUDINARY_URL=cloudinary://<key>:<secret>@<cloud>
# or split: CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET

# Neon Auth / Better Auth (required for /studio)
NEON_AUTH_BASE_URL=
NEON_AUTH_JWKS_URL=
CMS_ADMIN_EMAIL=you@example.com              # comma-separated allowlist
CMS_PREVIEW_SECRET=random-32-hex             # HMAC for draft preview (?preview=...)
```

`src/env.ts` and `src/lib/server/cloudinary.ts:10` / `src/lib/server/auth.ts:3` document expected vars.

### Database & Migrations — schema lives in code (not in Neon console)

The **source of truth is `src/lib/server/db/schema.ts:14`**, not the Neon dashboard. You edit TypeScript there, then generate versioned SQL. Neon is just the hosted Postgres that runs it. No Neon MCP required for normal changes — the [Neon MCP](https://neon.com/docs/ai/mcp-server) is an *optional* helper for AI agents to run `run_sql` / `inspect` / `explain` against a branch.

```bash
# 1. Edit the schema (add table/column/index)
#    src/lib/server/db/schema.ts:14

# 2. Generate a migration from the diff
pnpm drizzle-kit generate
# -> creates drizzle/0001_*.sql + drizzle/meta/_journal.json:4

# 3. Review SQL (e.g. drizzle/0000_left_tenebrous.sql:1) and commit it

# 4. Apply to Neon
pnpm drizzle-kit migrate   # runs drizzle/*.sql in order
# or for quick dev iteration (no file, direct push):
pnpm drizzle-kit push
```

Config: `drizzle.config.ts:1` points `schema` at `src/lib/server/db/schema.ts` and `out` at `./drizzle`, using `DATABASE_URL_UNPOOLED ?? DATABASE_URL` from `src/env.ts:1`. Migrations are committed so deploys and teammates replay the same SQL.

Current schema (`src/lib/server/db/schema.ts:14`):

```
posts/projects — id (uuid), slug (unique), title, excerpt,
  contentJson (jsonb) / contentHtml / contentMarkdown,
  coverImageUrl, status enum('draft','published','archived'), publishedAt/scheduledAt,
  readingTime/wordCount, seoTitle/seoDescription/seoKeywords, ogImageUrl, featured, viewCount
categories/tags — id, slug, name
posts_to_tags, posts_to_categories, projects_to_tags, projects_to_categories — many-to-many
media — id, key, url, alt, width/height/bytes/mime, postId/projectId
profiles — id (Neon Auth subject), email, name, role (mirrors Neon Auth, gated by CMS_ADMIN_EMAIL)
```

One-off legacy imports:

```bash
pnpm exec tsx scripts/import-mdx.ts              # ~150 .svx -> Neon
pnpm exec tsx scripts/migrate-projects-to-cloudinary.ts
```

### How Neon works in this project

**Neon is a serverless Postgres** — the app never runs Postgres locally.

| Concept | How it's used here |
|---|---|
| **Project** | One Neon project holds all databases. `DATABASE_URL` (pooled) is the connection string from the Neon dashboard / Netlify env. |
| **Branches** | Git-like DB branches. `neon.ts:3` declares `auth: true`, preview buckets (`cms-media` public, `assets` private), and a policy: non-default branches auto-expire `ttl: "7d"` (`neon.ts:17`). Use `neon checkout <name>` locally or create via dashboard. |
| **Compute** | Autoscaling, scales to zero. No config needed — `@neondatabase/serverless` connects over HTTP. |
| **Driver** | `src/lib/server/db/client.ts:1` uses `neon()` (HTTP) + `drizzle-orm/neon-http` (`src/lib/server/db/client.ts:2`). `neonConfig.fetchEndpoint` (`src/lib/server/db/client.ts:6`) rewrites to `https://`. |
| **Pooled vs unpooled** | `DATABASE_URL` = pooled (for app + `src/lib/remotes/blogs.remote.ts:8` Remote Functions) — faster, good for serverless. `DATABASE_URL_UNPOOLED` = direct (for `drizzle-kit` migrations in `drizzle.config.ts:8`). If only one is set, the fallback works. |
| **Auth** | Managed by Neon Auth (Better Auth). JWKS verify at `src/lib/server/auth.ts:16`, session via `NEON_AUTH_BASE_URL` (`src/hooks.server.ts:99`). No passwords stored in this DB except `profiles` mirror. |
| **Storage** | Declared in `neon.ts:10` but region `ap-southeast-1` doesn't support Neon Object Storage yet — media falls back to **Cloudinary** (`src/lib/server/cloudinary.ts:10`). |

Typical flow:

```
code change (schema.ts) -> drizzle-kit generate -> SQL in drizzle/ -> migrate -> Neon branch updated
                \
                 +-> Remote Functions (getBlogs, getPostBySlug) -> neon() query -> Svelte component `await`
```

You *can* also inspect/tweak via the Neon MCP (`run_sql`, `get_database_tables`, `explain_sql_statement`, `prepare_database_migration`) or the Neon dashboard SQL editor, but that is for debugging — durable changes should go through `schema.ts` + a migration file so history is reproducible.

---

## 🧱 Tech Stack

| Layer | Choice |
|---|---|
| Framework | **SvelteKit `3.0.0-next.0`** + **Svelte `5.56.10`** (Runes `$state`/`$derived`/`$effect`) |
| Build | **Vite `8.2.2`** + `@sveltejs/vite-plugin-svelte` + `adapter-netlify` |
| Styling | **Tailwind CSS `4.3.3`** (`@tailwindcss/vite`), `tailwind-merge`, `tw-animate-css`, `bits-ui`, `shadcn-svelte` |
| Content | **Neon Postgres** + **Drizzle ORM `0.45.2`** + `@neondatabase/serverless` + `mdsvex` (rehype/remark pipeline retained) |
| Editor | **Tiptap `3.30.5`** (Edra) — slash commands, AI, tables, mermaid, math (KaTeX), media placeholders |
| Media | **Cloudinary `2.11.0`** via `src/lib/server/cloudinary.ts:10` |
| Auth | **Neon Auth / Better Auth** (`jose` JWT verify) — `src/lib/server/auth.ts:16`, `src/hooks.server.ts:99` |
| Security | `web-sentinel`, `Arcjet`, structured logger (`src/lib/server/logger.ts:1`) |
| Icons | `phosphor-svelte`, `@lucide/svelte`, `unplugin-icons` + `@iconify-json/ph` |
| Search | `MiniSearch` (client-side fuzzy), `reading-time`, `sanitize-html`, `marked` |
| Animations | `motion`, `gsap`, `ogl` / `three`, `glyphnav`, `Ballpit`/`Revolver`/`TargetCursor` |
| Tooling | TypeScript `6.0.3`, ESLint `10` + `eslint-plugin-svelte`, Prettier, Stylelint, Vitest `4` + Playwright `1.62` |

---

## 🤩 What makes this special?

- **Database-backed CMS** — `~150` legacy `routes/blogs/*.svx` and `routes/projects/*.svx` deleted in `fc151f8`; content now fetched from Neon via SvelteKit **Remote Functions** (`query` from `$app/server` in `src/lib/remotes/blogs.remote.ts:7`) with preview HMAC (`CMS_PREVIEW_SECRET`).
- **Studio CMS** at `/studio` — CRUD for posts/projects/media (`src/routes/studio/**`), guarded by `src/routes/studio/+layout.server.ts` + `hooks.server.ts:99`. Editor is `src/lib/components/cms/PostEditor.svelte:1` built on `src/lib/components/edra/**` (Tiptap + shadcn).
- **Playful interactions** — `Revolver.svelte` / `GlassShatter.svelte` / `Ballpit.svelte` / `TargetCursor.svelte` + `SfxProvider.svelte` + `glyphnav` page transitions (`src/routes/+layout.svelte:12`).
- **Image pipeline** — `vite-imagetools` auto-converts to `webp` with `loading="lazy"`; remote covers served via Cloudinary `cloudinaryUrl()` with `f_auto,q_auto`.
- **SEO & perf** — SSR out-of-the-box, `super-sitemap`, `SEO.svelte` + JSON-LD, RSS (`/rss.xml`), PWA manifest, `mode-watcher` dark mode.

---

## ⌨ Coding style

- HTML: Semantic + SEO-focused
- CSS: Tailwind + vanilla `layout.css` utilities — `text-sm` minimum (see `AGENTS.md:3`, `text-xs` is forbidden)
- JS: Svelte 5 Runes + TypeScript strict
- Data: **Remote Functions only** (`*.remote.ts` + `await` in components) — no `+page.server.ts` `load` for internal data per `AGENTS.md:4` (exceptions: `hooks.server.ts`, `rss.xml`/`sitemap.xml`, raw `+server.ts` endpoints)
- Lint: `eslint-plugin-svelte@3.23`, `knip` for unused code

## 💅 Styling & Design System

`100% Edge-to-Edge Gapless Blueprint Matrix Grid`

- **Visual Architecture**: Single-directional 1px `#262626` borders (`border-grid-r`, `border-grid-b`), centered 11px `+` intersection crosshairs (`grid-plus`), and 0 floating inset padding boxes.
- **Typography**: Primary copy and code in `Inter` + `JetBrains Mono Variable`, accent headings in `Gambarino`. `text-sm` (`14px`) minimum — no `text-xs`.
- **Centralized UX Copy**: `src/lib/constants/uxCopy.ts:1` + `labels.ts` / `personal.ts` / `faq.ts` — single source for `navItems`, `PAGE_TITLES`, `SECTION_TITLES`.
- **Reusable Utility Layer**: `src/routes/layout.css` (`.blueprint-card`, `.blueprint-section`, `.blueprint-header`, `.blueprint-input`, `.blueprint-pill`) + `src/lib/components/ui/**` (shadcn-svelte: `button`, `card`, `dialog`, `command`, `select`, etc.).
- **Responsive Layout**: Full-width project rows, gapless 3-column blog & resource cards with 16:9 media previews (`aspect-video`), and equal column height stretch (`items-stretch`).
- **Recent redesign** (`01341a4`, `4d58dd6`) — reworked color system, contrast fixes, archive of redundant components.

---

## 🗺 Sitemap

| Page | Path |
|---|---|
| Home | `/` |
| Projects | `/projects` |
| Project detail | `/projects/[slug]` (`+page.server.ts:1` fetches from DB) |
| Blogs | `/blogs` |
| Blog detail | `/blogs/[slug]` (Remote Function `getPostBySlug`) |
| Blogs by category | `/blogs/category/[category]` |
| Blogs by tag | `/blogs/tags/[tag]` |
| Resources | `/blogs/resource`, `/blogs/resource/tool`, `/blogs/resource/exp` |
| About | `/about` |
| Contact | `/contact` |
| Design System | `/design-system` |
| Studio (CMS) | `/studio` → `/studio/posts`, `/studio/projects`, `/studio/media`, `/studio/login` |
| API | `/api/blogs`, `/api/cms/*`, `/api/mcp`, `/api/log`, `/api/arcjet` |
| Feeds | `/rss.xml`, `/sitemap[[page]].xml`, `/manifest.webmanifest` |

---

## Main Features

⭐ Svelte 5 Runes (`$state`, `$derived`, `$effect`) & SvelteKit `3.0.0-next.0` (Vite 8, `remoteFunctions: true` in `vite.config.ts:62`)<br>
⭐ **Neon Postgres + Drizzle CMS** — `posts`/`projects`/`tags`/`categories`/`media` with `DATABASE_URL` pooled driver<br>
⭐ **Studio CMS** (`/studio`) — authenticated CRUD, preview via `?preview=<hmac>` signed with `CMS_PREVIEW_SECRET`<br>
⭐ **Edra / Tiptap Editor** — slash menu, AI commands, bubble menu, drag handle, callouts, code blocks (lowlight), tables, image/video/iframe, mermaid diagrams, math (KaTeX)<br>
⭐ **Cloudinary Media** — `CLOUDINARY_URL` uploads in `src/routes/api/cms/upload/+server.ts`, `media` table, fallback `inline/base64` when Neon storage unavailable<br>
⭐ **Neon Auth (Better Auth)** — JWKS verify (`src/lib/server/auth.ts:16`), mirrored cookies in `src/routes/+layout.svelte:34`, admin allowlist `CMS_ADMIN_EMAIL`<br>
⭐ 100% Edge-to-Edge Gapless Blueprint Matrix Design System<br>
⭐ SEO & SSR with `super-sitemap` + RSS + JSON-LD + `sanitize-html`<br>
⭐ Remote Functions data layer (`src/lib/remotes/blogs.remote.ts:7`) — `getBlogs`, `getBlogsByTag`, `getPostBySlug` with `zod` validation<br>
⭐ Dark mode (`mode-watcher`), PWA offline, `vite-imagetools` webp, lazy loading<br>
⭐ Icons: Phosphor + Lucide via `unplugin-icons`<br>
⭐ Search: MiniSearch client-side fuzzy + pagination (`src/routes/blogs/+page.svelte:39`)<br>
⭐ Comments: Giscus (`BlogComments.svelte`)<br>
⭐ Security: `web-sentinel` probe blocking (`src/hooks.server.ts:16`), structured `x-request-id` logging, `Link` headers for agent discovery, `Accept: text/markdown` negotiation<br>
⭐ Fun: Revolver gun, glass shatter, target cursor, ball pit, haptics (`web-haptics`), SFX (`src/lib/stores/sfx.svelte.ts:1`)<br>
⭐ Agent-ready: **WebMCP / ModelContext** tools (`search_blogs`, `get_projects`, `navigate` in `src/routes/+layout.svelte:114`) + `/.well-known/api-catalog` + MCP server at `/api/mcp`<br>
⭐ Responsive, PWA, sharp blueprint inputs, Sonner toasts

---

## 🗄 CMS & Content Model

**Schema** `src/lib/server/db/schema.ts:14`:

```
posts/projects — id, slug (unique), title, excerpt, contentJson/contentHtml/contentMarkdown,
  coverImageUrl, status (draft|published|archived), publishedAt/scheduledAt,
  readingTime/wordCount, seoTitle/seoDescription/seoKeywords, ogImageUrl, featured, viewCount
categories/tags — id, slug, name, description
posts_to_tags / posts_to_categories (+ projects equivalents) — join tables
media — id, key, url, alt, width/height/bytes/mime, postId/projectId
profiles — id (auth subject), email, name, role
```

- Blogs list via `getBlogs()` (`src/lib/remotes/blogs.remote.ts:7` — SQL with `array_agg` tags).
- Single post via `getPostBySlug({ slug, preview })` — enforces `published` unless valid HMAC.
- Studio routes call `src/lib/server/cms/posts.ts` / `preview.ts` / `sanitize.ts` and REST endpoints under `src/routes/api/cms/**` (posts, projects, media, upload).

---

## 🔌 API Routes

| Endpoint | Purpose |
|---|---|
| `GET /api/blogs` | JSON list for ModelContext + legacy clients |
| `POST/GET /api/cms/posts` (+ `/[id]`) | Studio CRUD (auth required) |
| `POST/GET /api/cms/projects` (+ `/[id]`) | Studio CRUD |
| `POST /api/cms/upload` | Cloudinary upload |
| `GET /api/cms/media` | Media library |
| `POST /api/mcp` | MCP server |
| `POST /api/log` | Client log ingestion |
| `POST /api/arcjet` | Bot protection |
| `GET /rss.xml`, `GET /sitemap[[page]].xml` | Feeds (cannot be Remote Functions — raw `+server.ts`) |

---

## 🚀 Deployment

- **Netlify** via `@sveltejs/adapter-netlify` (`vite.config.ts:54`, `edge: false`).
- Set env vars in Netlify dashboard (same as `.env.example`).
- `DATABASE_URL` must be Neon pooled; `DATABASE_URL_UNPOOLED` for `drizzle-kit`.
- Checkly badge monitors uptime (`api.checklyhq.com`).

---

## Blogging Features

- Write in **Edra (Tiptap)** — WYSIWYG with markdown import, slash commands, AI assists, mermaid + KaTeX math, drag-handle, bubble menu
- `rehype`/`remark` pipeline kept for legacy: `rehype-slug`, `rehype-autolink-headings`, `rehype-external-links`, `remark-gfm`, `remark-sectionize`
- Filter by categories & tags (#hashtag) via `MiniSearch`
- Table of Contents (`svelte-toc`), code highlighting (`lowlight` + `prism-themes`)
- Reading time + word count auto-computed on save
- Comments via [Giscus](https://giscus.app) (`src/lib/components/blogs/BlogComments.svelte:1`)
- SEO checklist: https://app.notion.com/p/SEO-AI-Visibility-Audit-Prompt-Library-3c1f96bab4f281e49d3dd0f5a5196344
- SFX: https://uppbeat.io/contributors/gfx-sounds?type=sfx

## License

[Published under MIT License](https://github.com/wentallout/portfolio/blob/master/LICENSE.md)

[⬆ Back to Top](#portfolio)
