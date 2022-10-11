import { j as json } from "../../../../chunks/index2.js";
const fetchMarkdownBlogs = async () => {
  const allBlogFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/best-ux-books.svx": () => import("../../../../chunks/best-ux-books.js"), "/src/routes/blog/gestalt.svx": () => import("../../../../chunks/gestalt.js"), "/src/routes/blog/typescale.svx": () => import("../../../../chunks/typescale.js"), "/src/routes/blog/typography-best-patterns.svx": () => import("../../../../chunks/typography-best-patterns.js"), "/src/routes/blog/ux-portfolio.svx": () => import("../../../../chunks/ux-portfolio.js"), "/src/routes/blog/ux-vs-ui.svx": () => import("../../../../chunks/ux-vs-ui.js") });
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
