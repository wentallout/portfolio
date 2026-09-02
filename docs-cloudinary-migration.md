# Cloudinary Migration for Projects (Neon has no file storage yet)

**Why:** `archive/projects/*.svx` images were inlined as `data:image/png;base64` into Neon `projects.content_html` (5-14 MB per row). This caused Neon 507 "response too large" when fetching all projects, plus `reza` had a broken Svelte tag `<Image src={thumbnail}>` left uncompiled. Neon Object Storage is not available, so we migrate to Cloudinary per your request.

Research: `cloudinary` v2 SDK (`CLOUDINARY_URL` env) + `svelte-cloudinary` `CldImage` for frontend optimization (see `src/lib/server/cloudinary.ts:1`).

## Current state after hotfix

- `/projects/reza` thumbnail fixed: patched Neon row to replace `<Image loading="eager" src={thumbnail}>` with `<img src="data:image/jpeg;base64,...">` and set `cover_image_url` for it. Page returns 200 at http://localhost:1111/projects/reza (14 MB HTML still heavy).
- Other 4 projects still bloated: `dev-portfolio` 5.0 MB, `nvault` 4.9 MB, `super-tab-manager` 12.9 MB (all `data:image`), `stock-grabber` 258 B with no images. All `cover_image_url` are `NULL` except `reza` now fixed.

## Setup (one-time)

1. Create account at https://cloudinary.com/console → Settings → API Keys → copy `Cloud name`, `API Key`, `API Secret`
2. Add to `D:\OfficialProjects\portfolio\.env`:
```
CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
```
   (or split `CLOUDINARY_CLOUD_NAME`/`API_KEY`/`API_SECRET`)
3. Ensure `src/lib/server/cloudinary.ts:1` is deployed (already committed in code).

## Migrate (uploads + DB patch)

Dry run (shows what will be uploaded without touching DB/Cloudinary):
```bash
pnpm tsx scripts/migrate-projects-to-cloudinary.ts
```

Apply (uploads local files in `src/lib/assets/images/projects/*` to `portfolio/projects/<slug>/<file>` and patches Neon `projects` rows: replaces `<Image src={var}>` with `<img src="https://res.cloudinary.com/<cloud>/...">`, generates new HTML via `marked`, sets `cover_image_url` to thumbnail):
```bash
pnpm tsx scripts/migrate-projects-to-cloudinary.ts --apply
pnpm tsx scripts/migrate-projects-to-cloudinary.ts --apply --verbose
```

After apply, HTML drops from ~12 MB to ~3 KB per project (URLs instead of base64), 507 error disappears, `reza` fully fixed, `stock-grabber` gets thumbnail cover, all `cover_image_url` become Cloudinary URLs (use for OG image, list page if you switch `ProjectList.svelte` from static imports to DB covers later).

## Frontend usage

- Server upload: `import { uploadToCloudinary, cloudinaryUrl } from '#lib/server/cloudinary.js'` (see `src/lib/server/cloudinary.ts:28`)
- Client optimized image: `svelte-cloudinary` `CldImage` (already installed):
```svelte
<script>import { CldImage } from 'svelte-cloudinary';</script>
<CldImage src="portfolio/projects/reza/thumbnail" width={800} height={600} alt="Reza" sizes="100vw" />
```
  Applies `f_auto`+`q_auto` automatically per docs.

## Next after migration

- Verify: http://localhost:1111/projects/reza , /projects/dev-portfolio etc
- Optionally update `src/lib/sections/projects/ProjectList.svelte:1` to load covers from DB (`SELECT cover_image_url FROM projects`) instead of hardcoded static imports, for single source of truth.
- Remove `data:image` fallback once Cloudinary verified.
