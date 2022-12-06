import { j as json } from "../../../../chunks/index2.js";
const fetchMarkdownBlogs = async () => {
  const allBlogFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/best-ux-books.svx": () => import("../../../../chunks/best-ux-books.js"), "/src/routes/blog/calculate-typography-values.svx": () => import("../../../../chunks/calculate-typography-values.js"), "/src/routes/blog/case-study.svx": () => import("../../../../chunks/case-study.js"), "/src/routes/blog/gestalt.svx": () => import("../../../../chunks/gestalt.js"), "/src/routes/blog/grids.svx": () => import("../../../../chunks/grids.js"), "/src/routes/blog/how-to-ask-for-design-feedback.svx": () => import("../../../../chunks/how-to-ask-for-design-feedback.js"), "/src/routes/blog/logo-design.svx": () => import("../../../../chunks/logo-design.js"), "/src/routes/blog/my-fav-colors-tool.svx": () => import("../../../../chunks/my-fav-colors-tool.js"), "/src/routes/blog/polish.svx": () => import("../../../../chunks/polish.js"), "/src/routes/blog/portfolio.svx": () => import("../../../../chunks/portfolio.js"), "/src/routes/blog/project-organization.svx": () => import("../../../../chunks/project-organization.js"), "/src/routes/blog/resolution-pt-px.svx": () => import("../../../../chunks/resolution-pt-px.js"), "/src/routes/blog/sharp-axe-method.svx": () => import("../../../../chunks/sharp-axe-method.js"), "/src/routes/blog/stock-images.svx": () => import("../../../../chunks/stock-images.js"), "/src/routes/blog/the-art-of-thinking-clearly.svx": () => import("../../../../chunks/the-art-of-thinking-clearly.js"), "/src/routes/blog/typescale.svx": () => import("../../../../chunks/typescale.js"), "/src/routes/blog/typography-impact.svx": () => import("../../../../chunks/typography-impact.js"), "/src/routes/blog/ui-kit.svx": () => import("../../../../chunks/ui-kit.js"), "/src/routes/blog/ux-research.svx": () => import("../../../../chunks/ux-research.js"), "/src/routes/blog/ux-vs-ui.svx": () => import("../../../../chunks/ux-vs-ui.js"), "/src/routes/blog/wth-is-wcag.svx": () => import("../../../../chunks/wth-is-wcag.js") });
  const iterableBlogFiles = Object.entries(allBlogFiles);
  const allBlogs = await Promise.all(
    iterableBlogFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const blogPath = path.slice(11, -4);
      return {
        meta: metadata,
        path: blogPath
      };
    })
  );
  return allBlogs;
};
const GET = async () => {
  const allBlogs = await fetchMarkdownBlogs();
  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return json(sortedBlogs);
};
export {
  GET
};
