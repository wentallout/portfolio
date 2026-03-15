<h1 id="portfolio">Portfolio</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bf37fa7-ec78-4efd-aa9a-1a18a4fc62e4/deploy-status)](https://app.netlify.com/sites/khoa-design/deploys)

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

1. Install dependencies with `npm install` (or `pnpm install` or `yarn`)
2. Start a development server:

```bash
npm run dev
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
- Linting optimized for aesthetics: alphabetical style [perfectionist.dev](https://perfectionist.dev/)
- [eslint-plugin-svelte](https://sveltejs.github.io/eslint-plugin-svelte/user-guide)

## 💅 Styling

`src/styles`

- `reset.css` custom CSS Reset by [joshwcomeau](https://www.joshwcomeau.com/css/custom-css-reset/)
- `global.css` global styles and importing all other css files
- `spacing.css` spacing for `margin`, `padding` and the whole page layout in general. Check out [utopia.fyi](https://utopia.fyi/) for more information about this spacing system.
- `typography.css` typography-related stuff like `font-size`, `line-height`, `letter-spacing`, `font-weight`
- `color.css` text colors, border colors, background colors (2 color schemes: `light` and `dark`)
- `animation.css` for anything animate.

## 🗺 Sitemap

| page     | path      |
| -------- | --------- |
| Home     | /         |
| Projects | /projects |
| Blogs    | /blogs    |
| Contact  | /contact  |

Slug

- /projects/`[slug]`
- /blogs/`[slug]`

## Main Features

⭐ SEO

- [SSR](https://kit.svelte.dev/docs/seo#out-of-the-box-ssr)
- [sitemap](https://github.com/jasongitmail/super-sitemap)

⭐ Responsive

⭐ PWA: Works OFFLINE

⭐ Dark/Light Mode Toggle Button

⭐ Dynamic Breadcrumb (`Breadcrumb.svelte`)

⭐ Font Optimization

- Self-host: [Google Web Font Helper](https://gwfh.mranftl.com/fonts)
- font-family: [Inter](https://rsms.me/inter/). [Read more about Inter](https://beautifulwebtype.com/inter)
- Subset: [Subset Variable Font Guide](https://barrd.dev/article/create-a-variable-font-subset-for-smaller-file-size/)
- Reduce Font CLS (Cumulative Layout Shift): [Automatic font matching](https://deploy-preview-15--upbeat-shirley-608546.netlify.app/perfect-ish-font-fallback)

⭐ Icons

- `unplugin-icons`
- Icon family: [phosphoricons](https://phosphoricons.com/)
- [Browse phosphor icons](https://icon-sets.iconify.design/ph)

⭐ Images

- Compressed and Converted into `webp` using`vite-imagetools`
- `loading = 'lazy'`

⭐ Routing: built-in [filesystem-based router](https://kit.svelte.dev/docs/routing)

⭐ Page Transition Animation

- `svelte/transiton`
- [nprogress](https://www.npmjs.com/package/nprogress)

⭐ RSS

⭐ [Haptics](https://haptics.lochie.me) (work in progress)

⭐ Working Contact Form (need Netlify setup)

---

## Blogging Features

- Use markdown to write blogs [mdsvex](https://github.com/pngwn/MDsveX)
- use `categories` (#hashtag) to filter blogs
- multiple markdown-related plugins installed: `rehype` and `remark`

⭐ Blogs: Automatic Table of Contents

⭐ Blogs: Code Highlight [prism-themes](https://github.com/PrismJS/prism-themes)

⭐ Blogs: Search, Pagination

⭐ Blogs: Categories/Tags

⭐ Blogs: Prev/Next Button

⭐ Blogs: Comment using [Giscus](https://giscus.app)

## Background inspired by

[bg.ibelick.com](https://bg.ibelick.com)

## Todo

💡 [Splash screen](https://www.sveltevietnam.dev/en/blog/20231220-behind-the-screen-progressive-splashscreen)

## Stat

![Alt](https://repobeats.axiom.co/api/embed/c17a64a1c0a63ba6cef6618f14b3e39fdf67eb3f.svg 'Repobeats analytics image')

Featured on: [portfolioshub.com](https://www.portfolioshub.com)

## License

[Published under MIT License](https://github.com/wentallout/portfolio/blob/master/LICENSE.md)

[⬆ Back to Top](#portfolio)
