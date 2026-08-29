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

## 💻 Developing

[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?style=for-the-badge&logo=stackblitz)](https://stackblitz.com/github/wentallout/portfolio)
[![Open in VSCode](https://img.shields.io/badge/Open%20in-VSCode-blue?style=for-the-badge&logo=visualstudiocode)](https://open.vscode.dev/wentallout/portfolio)

1. Install dependencies with `pnpm install`
2. Start a development server:

```bash
pnpm run dev
```

## ❓ What is this?

This is a portfolio/blog built using SvelteKit. Hosted on Netlify.

Visit: [wentallout.io.vn](https://wentallout.io.vn)

## 🤩 What makes this special?

A website made with SvelteKit is just incredibly fast even compared to other framework-based websites like React/Next/Vue and has great SEO out-of-the-box. You won't need a backend or CMS though, the blog posts are just markdown files you can store on your computer (see `routes/blogs`).

All imported images are automatically converted to `webp` and lazy loaded to optimize performance.

Visitors can also comment on your blogs using GitHub discussion (you might want to customize `Comments.svelte` component so that it works on your repo)

## ⌨ Coding style

- HTML: Semantic and SEO-focused
- CSS: Vanilla CSS with BEM naming scheme
- JS: VanillaJS/Svelte
- [eslint-plugin-svelte](https://sveltejs.github.io/eslint-plugin-svelte/user-guide)

## 💅 Styling & Design System

`100% Edge-to-Edge Gapless Blueprint Matrix Grid`

- **Visual Architecture**: Single-directional 1px `#262626` borders (`border-grid-r`, `border-grid-b`), centered 11px `+` intersection crosshairs (`grid-plus`), and 0 floating inset padding boxes.
- **Typography**: Primary copy and code in `Inter`, accent headings in `Gambarino`. Zero `font-mono` overrides.
- **Centralized UX Copy**: Centralized navigation, page titles, and section headers in `src/lib/constants/uxCopy.js`.
- **Reusable Utility Layer**: Predefined CSS utility classes in `layout.css` (`.blueprint-card`, `.blueprint-section`, `.blueprint-header`, `.blueprint-input`, `.blueprint-pill`).
- **Responsive Layout**: Full-width project rows, gapless 3-column blog & resource cards with 16:9 media previews (`aspect-video`), and equal column height stretch (`items-stretch`).

## 🗺 Sitemap

| page     | path      |
| -------- | --------- |
| Home     | /         |
| Projects | /projects |
| Blogs    | /blogs    |
| About    | /about    |
| Contact  | /contact  |

Slug

- /projects/`[slug]`
- /blogs/`[slug]`

## Main Features

⭐ Svelte 5 Runes (`$state`, `$derived`, `$effect`) & SvelteKit 2.55+

⭐ 100% Edge-to-Edge Gapless Blueprint Matrix Design System

⭐ SEO & Out-of-the-Box SSR with `super-sitemap`

⭐ Responsive & PWA Offline Support

⭐ Centralized UX Copy & Navigation System (`src/lib/constants/uxCopy.js`)

⭐ Dark Mode Blueprint Styling

⭐ Dynamic Self-Contained Header Rows (`PageTitle.svelte`, `SectionTitle.svelte`)

⭐ Font Optimization: Local `InterVariable` WebP/WOFF2 font loading

⭐ Icons: Phosphor icons (`unplugin-icons` / `ph`)

⭐ Image Optimization: Compressed & converted into `webp` using `vite-imagetools` with `loading="lazy"`

⭐ Routing: Filesystem-based router with smooth `svelte/transition` page transitions

⭐ RSS Feed (`/rss.xml`)

⭐ Haptic Feedback System (`haptics.ts`)

⭐ Working Netlify Contact Form with sharp blueprint inputs

---

## Blogging Features

- Use markdown to write blogs via [mdsvex](https://github.com/pngwn/MDsveX)
- Filter by categories & tags (#hashtag)
- Markdown extensions via `rehype` and `remark`
- Automatic Table of Contents
- Code Syntax Highlighting via [prism-themes](https://github.com/PrismJS/prism-themes)
- MiniSearch client-side fuzzy search & pagination
- Comments via [Giscus](https://giscus.app)

## License

[Published under MIT License](https://github.com/wentallout/portfolio/blob/master/LICENSE.md)

[⬆ Back to Top](#portfolio)

