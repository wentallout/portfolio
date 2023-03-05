import { j as json } from "../../../../chunks/index.js";
const fetchMarkdownBlogs = async () => {
  const allBlogFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/6c.svx": () => import("../../../../chunks/6c.js"), "/src/routes/blog/ai-tools.svx": () => import("../../../../chunks/ai-tools.js"), "/src/routes/blog/atomic-habits.svx": () => import("../../../../chunks/atomic-habits.js"), "/src/routes/blog/best-ux-books.svx": () => import("../../../../chunks/best-ux-books.js"), "/src/routes/blog/calculate-typography-values.svx": () => import("../../../../chunks/calculate-typography-values.js"), "/src/routes/blog/case-study.svx": () => import("../../../../chunks/case-study.js"), "/src/routes/blog/color-scheme.svx": () => import("../../../../chunks/color-scheme.js"), "/src/routes/blog/dont-use-pure-black-and-white.svx": () => import("../../../../chunks/dont-use-pure-black-and-white.js"), "/src/routes/blog/figma-plugins.svx": () => import("../../../../chunks/figma-plugins.js"), "/src/routes/blog/fluency.svx": () => import("../../../../chunks/fluency.js"), "/src/routes/blog/free-3d.svx": () => import("../../../../chunks/free-3d.js"), "/src/routes/blog/free-colors.svx": () => import("../../../../chunks/free-colors.js"), "/src/routes/blog/free-fonts.svx": () => import("../../../../chunks/free-fonts.js"), "/src/routes/blog/free-icons.svx": () => import("../../../../chunks/free-icons.js"), "/src/routes/blog/free-illustrations.svx": () => import("../../../../chunks/free-illustrations.js"), "/src/routes/blog/free-images-videos.svx": () => import("../../../../chunks/free-images-videos.js"), "/src/routes/blog/free-mockups.svx": () => import("../../../../chunks/free-mockups.js"), "/src/routes/blog/free-music.svx": () => import("../../../../chunks/free-music.js"), "/src/routes/blog/free-tools.svx": () => import("../../../../chunks/free-tools.js"), "/src/routes/blog/gestalt.svx": () => import("../../../../chunks/gestalt.js"), "/src/routes/blog/grids.svx": () => import("../../../../chunks/grids.js"), "/src/routes/blog/how-to-ask-for-design-feedback.svx": () => import("../../../../chunks/how-to-ask-for-design-feedback.js"), "/src/routes/blog/inspiration.svx": () => import("../../../../chunks/inspiration.js"), "/src/routes/blog/logo-design.svx": () => import("../../../../chunks/logo-design.js"), "/src/routes/blog/my-fav-colors-tool.svx": () => import("../../../../chunks/my-fav-colors-tool.js"), "/src/routes/blog/personal-brand.svx": () => import("../../../../chunks/personal-brand.js"), "/src/routes/blog/polish.svx": () => import("../../../../chunks/polish.js"), "/src/routes/blog/portfolio.svx": () => import("../../../../chunks/portfolio.js"), "/src/routes/blog/project-organization.svx": () => import("../../../../chunks/project-organization.js"), "/src/routes/blog/questions-to-ask-customer-before-design.svx": () => import("../../../../chunks/questions-to-ask-customer-before-design.js"), "/src/routes/blog/resolution-pt-px.svx": () => import("../../../../chunks/resolution-pt-px.js"), "/src/routes/blog/resume.svx": () => import("../../../../chunks/resume.js"), "/src/routes/blog/shadow.svx": () => import("../../../../chunks/shadow.js"), "/src/routes/blog/sharp-axe-method.svx": () => import("../../../../chunks/sharp-axe-method.js"), "/src/routes/blog/the-art-of-thinking-clearly.svx": () => import("../../../../chunks/the-art-of-thinking-clearly.js"), "/src/routes/blog/typescale.svx": () => import("../../../../chunks/typescale.js"), "/src/routes/blog/typography-impact.svx": () => import("../../../../chunks/typography-impact.js"), "/src/routes/blog/ui-kit.svx": () => import("../../../../chunks/ui-kit.js"), "/src/routes/blog/ux-guides-frameworks.svx": () => import("../../../../chunks/ux-guides-frameworks.js"), "/src/routes/blog/ux-vs-ui.svx": () => import("../../../../chunks/ux-vs-ui.js"), "/src/routes/blog/ux.svx": () => import("../../../../chunks/ux.js"), "/src/routes/blog/what-is-wcag.svx": () => import("../../../../chunks/what-is-wcag.js") });
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
