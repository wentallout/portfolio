import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../best-ux-books.svx": () => import("../../../../chunks/best-ux-books.js"), "../gestalt.svx": () => import("../../../../chunks/gestalt.js"), "../project-organization.svx": () => import("../../../../chunks/project-organization.js"), "../sharp-axe-method.svx": () => import("../../../../chunks/sharp-axe-method.js"), "../typescale.svx": () => import("../../../../chunks/typescale.js"), "../typography-best-patterns.svx": () => import("../../../../chunks/typography-best-patterns.js"), "../ux-portfolio.svx": () => import("../../../../chunks/ux-portfolio.js"), "../ux-vs-ui.svx": () => import("../../../../chunks/ux-vs-ui.js") }), `../${params.slug}.svx`);
  const content = post.default;
  const { title, date, categories } = post.metadata;
  return {
    content,
    title,
    date,
    categories
  };
}
export {
  load
};
