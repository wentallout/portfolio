![GitHub](https://img.shields.io/github/license/wentallout/portfolio?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/wentallout/portfolio?style=for-the-badge)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/wentallout/portfolio?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/wentallout/portfolio?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/wentallout/portfolio?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/wentallout/portfolio?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/wentallout/portfolio?style=for-the-badge)

# Khoa's Portfolio [![Netlify Status](https://api.netlify.com/api/v1/badges/7bf37fa7-ec78-4efd-aa9a-1a18a4fc62e4/deploy-status)](https://app.netlify.com/sites/khoa-design/deploys)

[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?style=for-the-badge&logo=stackblitz)](https://stackblitz.com/github/wentallout/portfolio)
[![Open in VSCode](https://img.shields.io/badge/Open%20in-VSCode-blue?style=for-the-badge&logo=visualstudiocode)](https://open.vscode.dev/wentallout/portfolio)

## 💻 Developing

1. Install dependencies with `npm install` (or `pnpm install` or `yarn`)
2. Start a development server:

```bash
npm run dev
```

## ❓ What is this?

This is a portfolio/blog built using SvelteKit. Hosted on Netlify.

My portfolio URL: [wentallout.tech](https://wentallout.tech)

## 🤩 What makes this special?

A website made with SvelteKit is just incredibly fast even compared to other framework-based websites like React/Next/Vue and has great SEO out-of-the-box. You won't need a backend or CMS though, the blog posts are just markdown files you can store on your computer (see `routes/blog`).

All imported images are automatically converted to `webp` and lazy loaded to optimize performance.

Visitors can also comment on your blogs using GitHub discussion (you might want to customize `Comments.svelte` component so that it works on your repo)

## 💅 Styling

`src/lib/styles`

- `reset.css` custom CSS Reset by [joshwcomeau](https://www.joshwcomeau.com/css/custom-css-reset/)
- `global.css` global styles and importing all other css files
- `spacing.css` spacing for `margin`, `padding` and the whole page layout in general [utopia.fyi](https://utopia.fyi/)
- `typography.css` typography-related stuff like `font-size`, `line-height`, `letter-spacing`, `font-weight`
- `color.css` text colors, border colors, background colors (2 color schemes: `light` and `dark`)

## 🗺 Sitemap

| page     | path      |
| -------- | --------- |
| Home     | /         |
| Project  | /project  |
| Blog     | /blog     |
| Resource | /resource |
| Contact  | /contact  |

## Features

✅ SEO 100/100

✅ Responsive

✅ Dark/Light Mode Toggle Button

✅ Fonts

- Self-hosted + Subset using [glyphhanger](https://www.npmjs.com/package/glyphhanger)
- font-family: [Inter](https://rsms.me/inter/)

✅ Images

- Compressed and Converted into `webp` using`vite-imagetools`
- `loading = 'lazy'`

✅ Routing

✅ Page Transition

- Fly Effect from `svelte/transiton`
- [nprogress](https://www.npmjs.com/package/nprogress)

✅ RSS

✅ Contact Form

---

### 👉 Blogs

- Use markdown to write blogs [mdsvex](https://github.com/pngwn/MDsveX)
- use `categories` (#hashtag) to filter blogs
- multiple markdown-related plugins installed: `rehype` and `remark`

✅ Blog: Automatic Table of Contents

✅ Blog: Code Highlight

- Choose a theme: [prism-themes](https://github.com/PrismJS/prism-themes) then paste into `styles/prism.css`

✅ Blog: Search

✅ Blog: Tags/Categories

✅ Blog: Pagination

✅ Blog: Comment [Giscus](https://giscus.app)
