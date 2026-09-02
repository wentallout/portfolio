# CMS Migration Plan — Markdown → Hand-Made Neon CMS (Edra + shadcn-svelte)

> Single-file plan per user request. Focus: blogs first via Edra shadcn, Neon as backend. Scope expanded per Q&A.

## Decisions (User Q&A — Aug 31 2026)

1. Hidden admin path: `/studio` (not `/admin` — avoids `hooks.server.ts:76` web-sentinel `pathname.prefix '/wp-admin'` noise; real guard is JWT anyway).
2. Auth: Neon Auth OAuth **Google only**, single admin (you). No public registration. Allowlist via env `CMS_ADMIN_EMAIL` (open-source safe, not hardcoded).
3. Markdown files: keep `src/routes/blogs/*.svx` + `src/routes/projects/*.svx` after DB import as fallback. Public loaders dual-read `DB first → FS fallback` behind flag. Delete only after manual verification.
4. Storage format (future-proof): Tiptap JSON source of truth `content_json jsonb` + derived `content_html text` (sanitized, served public) + `content_markdown text` (export/compat). Edra ctx7: `onUpdate → editor.getJSON()/getHTML()`.
5. Scope: blogs + projects in same engine (two tables sharing categories/tags/media).
6. Images: Neon Object Storage bucket `cms-media` `public_read` (add in `neon.ts:12` alongside `assets:private`), presigned upload via `EdraEditorProps.onFileSelect/onDropOrPaste`.
7. SEO: improve existing pipeline (`SEO.svelte:23`, `OpenGraph`, `SchemaOrg`, `sitemap[[page]].xml`, `rss.xml`) — wire props fully, no pipeline rewrite.
8. Workflow: `draft` / `published` / `scheduled (scheduled_at)` + preview `?preview=token` for unpublished.
9. Styling: leave Edra vendored styles untouched (exempt from `AGENTS.md:3` `text-sm` rule for `src/lib/components/edra/**`).

## 1) Audit (Evidence — file:line)

- **Framework:** SvelteKit 3 + Svelte 5 Runes + Vite 8 + pnpm 11.14 (`package.json:1`), `adapter-netlify`, Tailwind 4 via `@tailwindcss/vite` + `@plugin '@tailwindcss/typography'` (`src/routes/layout.css`), `shadcn-svelte ^1.5.1` style `lyra` (`components.json:1`) but only `DottedBackground.svelte` exists under `ui/`.
- **Blogs FS:** `src/lib/utils/blogs.ts:15` `import.meta.glob('/src/routes/blogs/*.svx')` → `BlogMeta {title,date,categories,tags}`, ~120 `.svx` (e.g. `8pt-grid.svx:2` frontmatter `title/date/categories`). `src/routes/blogs/[slug]/+page.ts:6` `import('../${slug}.svx')` dynamic, `src/routes/api/blogs/+server.ts:4` sorted JSON, `src/routes/blogs/+page.svelte` MiniSearch + `DarkPaginationNav` 42/page. Projects same pattern `src/lib/utils/projects.ts`.
- **DB unused:** No `drizzle/*`/`prisma/*` (`package.json:99` has none). `DATABASE_URL` + `DATABASE_URL_UNPOOLED` + `NEON_AUTH_*` in `.env:4`, `.neon:3` `icy-rain-92356204` `production`, `neon.ts:3` `defineConfig({auth:true, preview:{buckets:{assets:{access:"private"}}}, branch: ttl "7d"})`. Never imported in `src/`.
- **Auth infra ready, unused:** `src/app.d.ts` `Locals.user` typed, `src/hooks.server.ts:76` only `web-sentinel` + Link headers + `text/markdown` negotiation — no JWT verify. Well-known JWKS `static/.well-known/jwks.json` present.
- **No editor/admin:** `glob **/*admin*` 0, no `tiptap` deps, no upload endpoint. Images via `vite-imagetools` webp + `src/lib/components/common/Image.svelte:3`.
- **SEO pipeline:** `SEO.svelte:108` composes `OpenGraph`+`Twitter`+`SchemaOrg` (`serializeSchema` in `seo.ts:3`), `sitemap[[page]].xml/+server.ts` via `super-sitemap` + `getBlogSlugs()`, `rss.xml`, `robots.txt` blocks AI bots. Blog pages underuse props (only `title`).
- **Constraints:** `AGENTS.md:3` bans `text-xs` → exempt vendored edra only.

## 2) Target Architecture

```
Browser
 ├─ Public: /, /blogs, /blogs/[slug], /blogs/category/[cat], /projects, /projects/[slug] (DB-backed SSR, FS fallback)
 │    └─ renders sanitized HTML in MarkdownContainer/BlogContainer prose
 ├─ Hidden: /studio
 │    ├─ /studio/login (Neon Auth Google OAuth)
 │    ├─ /(admin)/studio/+layout.server.ts guard (JWT verify via NEON_AUTH_JWKS_URL + env CMS_ADMIN_EMAIL allowlist, Arcjet rate-limit)
 │    ├─ /studio (dashboard: counts, drafts, recent)
 │    ├─ /studio/posts, /studio/posts/new, /studio/posts/[id]/edit (Edra shadcn)
 │    ├─ /studio/projects, /studio/projects/[id]/edit (extended fields)
 │    └─ /studio/media, /studio/settings
 └─ API: /api/cms/posts, /api/cms/projects, /api/cms/media, /api/upload (presigned)
Neon
 ├─ Postgres neondb — Drizzle ORM + drizzle-kit, driver @neondatabase/serverless (neon-http for Netlify), migrations via DATABASE_URL_UNPOOLED
 ├─ Auth — Neon Auth (Google OAuth), JWT verify in hooks.server.ts via jose + JWKS_URL → event.locals.user/role
 └─ Object Storage — bucket cms-media public_read (neon.ts) branching with DB
Edra — shadcn flavor `src/lib/components/edra/shadcn` via `pnpm dlx edra@next init shadcn`, content JSON+HTML persisted onUpdate, files via onFileSelect/onDropOrPaste → POST /api/upload → presigned URL → Neon Storage
```

## 3) Data Model (Drizzle — `src/lib/server/db/schema.ts`)

```ts
// enums
status: pgEnum('post_status', ['draft','published','archived'])
entryType optional if polymorphic, else separate tables

posts: id uuid pk, slug text unique indexed (^[a-z0-9-]+$), title text not null, excerpt text, content_json jsonb not null, content_html text not null, content_markdown text, cover_image_url text, cover_image_alt text, status post_status default draft, published_at timestamptz, scheduled_at timestamptz, author_id text (auth subject), reading_time int, word_count int, seo_title text, seo_description text, seo_keywords text[], canonical_url text, og_image_url text, noindex boolean default false, featured boolean default false, view_count int default 0, created_at timestamptz default now(), updated_at timestamptz

projects: id uuid pk, slug unique, title, excerpt, content_json jsonb, content_html text, content_markdown, cover_image_url/alt, status, published_at, scheduled_at, author_id, repo_url text, demo_url text, tech_stack text[] (or jsonb), featured, seo_* same as posts, created_at, updated_at

categories: id uuid pk, slug unique, name, description, created_at
tags: id uuid pk, slug unique, name, created_at
posts_to_categories: post_id fk, category_id fk, pk composite
posts_to_tags: post_id fk, tag_id fk
projects_to_categories / projects_to_tags: same for projects
media: id uuid pk, key text, url text, alt, width int, height int, bytes int, mime text, post_id/ProjectId nullable fk, uploaded_by text, created_at
revisions: id uuid pk, entry_type enum, entry_id uuid, content_json jsonb, content_html text, created_by, created_at  // defer to v1.1 if cut scope

indexes: posts.slug unique, posts(status,published_at desc), projects.same, GIN seo_keywords optional
```

Env: `DATABASE_URL` (pooled http), `DATABASE_URL_UNPOOLED` (migrations), `NEON_AUTH_BASE_URL/JWKS_URL`, `CMS_ADMIN_EMAIL`, `CMS_PREVIEW_SECRET`.

Neon config diff (`neon.ts`):
```ts
preview: { buckets: { assets:{access:"private"}, "cms-media":{access:"public_read"} } }
```

## 4) Phased Execution

### Phase 0 — Tooling (30 min)
- Deps: `drizzle-orm drizzle-kit @neondatabase/serverless zod uuid reading-time sanitize-html jose` (verify via `pnpm add -D` vs deps).
- `drizzle.config.ts` (schema `./src/lib/server/db/schema.ts`, out `./drizzle`, driver `neon-http`, dbCredentials `url: DATABASE_URL_UNPOOLED`).
- `pnpm dlx shadcn-svelte add button command dropdown-menu input popover separator tabs textarea tooltip sonner` then `pnpm dlx edra@next init shadcn` (ctx7 `/tsuzat/edra` docs). Confirm `tailwind-typography` present (yes). Leave edra styles as-is.
- Scripts: `db:generate`, `db:migrate`, `db:studio` optional.

### Phase 1 — DB + Storage + Import
- Inspect: `Neon_get_database_tables`, `Neon_list_storage_buckets`.
- DDL: use `Neon_prepare_database_migration` on temp branch (ttl 7d), test with `Neon_run_sql` + `Neon_inspect_database`, then `Neon_complete_database_migration` (apply). Never DDL on production directly.
- Create bucket `cms-media` public_read via `Neon_create_storage_bucket` (or update `neon.ts` then apply).
- Seed: `scripts/import-mdx.ts` — glob `src/routes/blogs/*.svx` + `projects/*.svx`, parse frontmatter (title/date/categories/tags), body → sanitize → generate `content_html` (via hast), `content_json` (initial Tiptap JSON via placeholder or html→json convert; editable on first open), `slug` from filename, `word_count/reading_time`, `published_at=date`, `status=published` for dated entries, import via drizzle batch.

### Phase 2 — Auth + Hidden Studio Shell
- Provision Neon Auth Google provider (Dashboard or `Neon_provision_neon_auth` stack). Configure redirect `.../studio/callback`.
- `src/hooks.server.ts` enhance: `jose.createRemoteJWKSet(NEON_AUTH_JWKS_URL)` verify `Authorization: Bearer` or cookie `neon_auth_token`, set `event.locals.user={id,email,name}`, `event.locals.role = email===CMS_ADMIN_EMAIL ? 'admin' : 'none'`.
- `src/routes/(admin)/studio/+layout.server.ts`: `if !locals.user redirect /studio/login`; `if locals.user.email !== CMS_ADMIN_EMAIL error 403`. Rate-limit via `@arcjet/sveltekit` (already installed).
- Routes: `(admin)/studio/+layout.svelte` (Sidebar + sonner), `login/+page.svelte` (Neon Auth Google button), `+page.svelte` dashboard (counts: drafts/published/scheduled, recent 5).
- `src/routes/studio/login` alias? Keep `/studio/login` inside admin group with public access (layout with `+layout.server.ts` bypass).

### Phase 3 — Editor + CMS CRUD
- `src/lib/server/cms/posts.ts` + `projects.ts`: CRUD, `slugify()` (`title→kebab`), unique slug check (suffix `-2`), zod schemas (title 3-120, slug regex, seo_description 50-160, excerpt 0-280), sanitize `content_html` (allow h2-h4, p, a, img, code, pre, blockquote, ul/ol, table), compute `word_count/readingTime`.
- `src/lib/components/cms/*`: `PostForm.svelte`, `SeoPanel.svelte` (char counters), `SlugInput.svelte` (auto+edit), `MediaPicker.svelte`, `StatusBadge.svelte`.
- Edra page `studio/posts/[id]/edit/+page.svelte`: 
  ```svelte
  <script lang="ts">
    import { EdraEditor, EdraToolBar, EdraDragHandleExtended } from '#lib/components/edra/shadcn/index.js';
    let editor=$state<Editor>(); let content=$state<Content>(data.post.content_json);
    function onUpdate(){ const json=editor?.getJSON(); const html=editor?.getHTML(); debouncedSave(json,html) }
    async function onFileSelect(file:string){ /* file is blob url */ return file }
    async function onDropOrPaste(file:File){ const {url}=await fetch('/api/upload',{method:'POST', body:JSON.stringify({name:file.name, type:file.type, size:file.size})}).then(r=>r.json()); await fetch(url,{method:'PUT', body:file}); return url.split('?')[0] }
  </script>
  ```
  Persist `content_json + content_html + content_markdown` on Save/Publish. Custom `getHandlePaste` in `src/lib/components/edra/utils.ts` with size limit (ctx7 `getHandlePaste(editor,5)`).
- `src/routes/api/upload/+server.ts`: validate mime `image/*` size <5MB, create presigned PUT via `Neon_presign_storage_object` for bucket `cms-media`, return `{url, publicUrl}`.
- List views server-paginated `GET /api/cms/posts?q=&status=&page=&type=blog|project` — keep UX parity with `blogs/+page.svelte` MiniSearch (prefix fuzzy) but server-driven.

### Phase 4 — Public Rendering Migration (Dual-Read)
- New `src/routes/blogs/+page.server.ts` (or update) + `[slug]/+page.server.ts` (migrate from `+page.ts` import): `select from posts where slug && (status=published OR (preview token valid))`. If miss → fallback `import('../${slug}.svx')` (compat). Same for `projects`.
- `src/routes/api/blogs/+server.ts` → DB `select ... order published_at desc` with query params `limit/offset/category/tag`. Map to `{meta,path}` compat shim to avoid `+page.svelte` rewrite; deprecate after.
- Render `{@html sanitizedHtml}` in `MarkdownContainer`/`BlogContainer` (`prose dark:prose-invert max-w-none` already). `svelte-toc` headingSelector still works on rendered HTML. `BlogInfo.svelte` uses `published_at` + `Intl.DateTimeFormat`.
- Keep `fetchMarkdownBlogs` as `fetchMarkdownBlogsFallback` for transition.

### Phase 5 — SEO Full Wiring
- `Blog/Project` pages: `<SEO article=true datePublished={published_at} lastUpdated={updated_at} metadescription={seo_description||excerpt} ogImage={og_image_url||cover_image_url} breadcrumbs=[{Home,'/'},{Blogs,'/blogs'},{title}] timeToRead={reading_time} />`. Honor `noindex`, `canonicalUrl`.
- `sitemap[[page]].xml/+server.ts`: query DB published slugs for `/blogs/[slug]` + `/projects/[slug]` (replaces `getBlogSlugs()`). Keep `super-sitemap`.
- `rss.xml/+server.ts`: DB query, `guid=slug`, `pubDate=published_at RFC822`, `description=excerpt`.
- Category/tag routes: DB filter `join posts_to_categories` + `tags`.

### Phase 6 — Polish & Hardening
- Revisions (optional v1.1), soft-delete, view_count increment (beacon), Netlify `Cache-Control: public, max-age=60, s-maxage=300` + purge on publish (`revalidateTag` pattern or build hook).
- Tests: `vitest --project=server` (CRUD, slugify, sanitize, auth guard), `playwright` (login→create draft→preview→publish→public 200).
- Knip/stylelint pass, `svelte-check`. Remove fallback flags only after verification.

## 5) File Tree (New / Modified)

```
drizzle.config.ts
drizzle/migrations/*
src/lib/server/db/client.ts
src/lib/server/db/schema.ts
src/lib/server/db/index.ts
src/lib/server/cms/posts.ts
src/lib/server/cms/projects.ts
src/lib/server/cms/media.ts
src/lib/server/cms/seo.ts
src/lib/server/auth.ts                // jose JWKS verify
src/routes/(admin)/studio/
  +layout.server.ts                   // guard
  +layout.svelte
  login/+page.svelte
  +page.svelte                        // dashboard
  posts/+page.server.ts +page.svelte
  posts/new/+page.server.ts +page.svelte
  posts/[id]/edit/+page.server.ts +page.svelte
  projects/** similar
  media/+page.server.ts +page.svelte
src/routes/api/cms/** + api/upload/+server.ts
src/routes/blogs/[slug]/+page.server.ts  // DB first
src/routes/api/blogs/+server.ts       // DB
src/routes/sitemap[[page]].xml/+server.ts // DB
src/routes/rss.xml/+server.ts         // DB
src/lib/components/edra/shadcn/*      // vendored, exempt text-xs
src/lib/components/cms/*              // form panels
scripts/import-mdx.ts
neon.ts                               // add cms-media bucket
src/env.ts                           // CMS_ADMIN_EMAIL
src/hooks.server.ts                   // JWT verify
```

## 6) Verification

- `pnpm svelte-check` 0 errors, `pnpm lint` pass, `pnpm test:all` (vitest) CRUD + guard tests green.
- `pnpm build` succeeds, Netlify preview branch with TTL 7d shows `/studio` 302→login unauth, 200 auth, create draft → preview token → publish → `/blogs/<slug>` 200 with correct `SEO` meta (view source).
- `curl /sitemap.xml` lists DB slugs, `/rss.xml` valid XML, `/api/blogs` paginated JSON.

## 7) Risks

- Google OAuth misconfig → login loop → mitigate: local `.env` test with `NEON_AUTH_*` JWKS fetch dry-run.
- Env allowlist leak → if missing, deny-all (safe default); document in `README` not to commit email.
- Private bucket 403 images → `cms-media` must be `public_read`; verify `presign` URL expiry.
- Slug collision on import (120 files) → suffix `-2` + warn log.
- Tiptap JSON/html drift vs `prose` CSS → visual QA on 3 sample posts pre-migrate.
- Branch DDL drift → always temp branch `prepare_database_migration` workflow.

---
*Plan generated Aug 31 2026. Next: Phase 0 tooling.*
