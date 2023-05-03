# Khoa's Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bf37fa7-ec78-4efd-aa9a-1a18a4fc62e4/deploy-status)](https://app.netlify.com/sites/khoa-design/deploys)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/wentallout/portfolio)

[Open in Visual Studio Code](https://open.vscode.dev/wentallout/portfolio)

## 💻 Developing

1. Install dependencies with `npm install` (or `pnpm install` or `yarn`)
2. Start a development server:

```bash
npm run dev
```

---

## ❓ What is this?

This is a portfolio/blog built using SvelteKit. Hosted on Netlify.

My portfolio URL: [wentallout.tech](https://wentallout.tech)

## 🤩 What makes this special?

A website made with SvelteKit is just incredibly fast even compared to other framework-based websites like React/Next/Vue and has great SEO out-of-the-box. You won't need a backend or CMS though, the blog posts are just markdown files you can store on your computer (see `routes/blog`).

All imported images are automatically converted to `webp` and lazy loaded to optimize loading speed.

Visitors can also comment on your blogs using GitHub discussion (you might want to customize `Comments.svelte` component so that it works on your repo)

---

## 💅 Styling

`src/lib/styles`

- `reset.css` custom CSS Reset by [joshwcomeau](https://www.joshwcomeau.com/css/custom-css-reset/)
- `global.css` global styles and importing all other css files
- `spacing.css` spacing for `margin`, `padding` and the whole page layout in general [utopia.fyi](https://utopia.fyi/)
- `typography.css` typography-related stuff like `font-size`, `line-height`, `letter-spacing`, `font-weight`
- `color.css` CSS variables for text colors, border colors, background colors

---

## 🏆 Progress

### Pages

✅ Home

❌ Project: can add more projects

✅ Blog

✅ Resource

✅ Contact

### Features

✅ SEO 100/100

✅ Responsive

✅ Dark/Light Mode Toggle

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

✅ Blogs

- Use markdown to write blogs [mdsvex](https://github.com/pngwn/MDsveX)
- use `categories` (#hashtag) to filter blogs
- multiple markdown-related plugins installed: `rehype` and `remark`

✅ RSS

✅ Contact Form

- Netlify Form

---

✅ Blog: Automatic Table of Contents

✅ Blog: Code Highlight

- Choose a theme: [prism-themes](https://github.com/PrismJS/prism-themes) then paste into `styles/prism.css`

✅ Blog: Search

✅ Blog: Tags/Categories

✅ Blog: Pagination

✅ Blog: Comment [Giscus](https://giscus.app)

---

## 🎓 Svelte checklist

Learn Svelte here: https://learn.svelte.dev/tutorial

### Part 1: Basic Svelte

- ✅ Introduction
- ✅ Reactivity
  - `Updating arrays and objects`
- ✅ Props
  - remember `spread props`
- ✅ Logic
  - `keyed each` and `await`
- Events
  - `inline handlers` is bad, don't use
  - `Component events` -> can't understand
- Bindings
- Lifecycle
- Stores

### Part 2: Advanced Svelte

- Motion
- Transitions
- Animations
- Actions
- Advanced bindings
- Classes and styles
- Component composition
- Context API
- Special elements
- Module context
- Miscellaneous
- ✅ Next steps

### Part 3: Basic SvelteKit

- ✅ Introduction
- Routing
- Loading data
- Headers and cookies
- Shared modules
- Forms
- API routes
- Stores
- ✅ Errors and redirects

### Part 4: Advanced SvelteKit

- Hooks
- ✅ Page options
- ✅ Link options
  - `data-sveltekit-preload-data`
  - `data-sveltekit-reload`
- Advanced routing
- Advanced loading
- Environment variables
- ✅ Conclusion
