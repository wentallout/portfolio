import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../best-ux-books.svx": () => import("../../../../chunks/best-ux-books.js"), "../calculate-typography-values.svx": () => import("../../../../chunks/calculate-typography-values.js"), "../case-study.svx": () => import("../../../../chunks/case-study.js"), "../gestalt.svx": () => import("../../../../chunks/gestalt.js"), "../grids.svx": () => import("../../../../chunks/grids.js"), "../how-to-ask-for-design-feedback.svx": () => import("../../../../chunks/how-to-ask-for-design-feedback.js"), "../logo-design.svx": () => import("../../../../chunks/logo-design.js"), "../my-fav-colors-tool.svx": () => import("../../../../chunks/my-fav-colors-tool.js"), "../polish.svx": () => import("../../../../chunks/polish.js"), "../portfolio.svx": () => import("../../../../chunks/portfolio.js"), "../project-organization.svx": () => import("../../../../chunks/project-organization.js"), "../resolution-pt-px.svx": () => import("../../../../chunks/resolution-pt-px.js"), "../sharp-axe-method.svx": () => import("../../../../chunks/sharp-axe-method.js"), "../stock-images.svx": () => import("../../../../chunks/stock-images.js"), "../the-art-of-thinking-clearly.svx": () => import("../../../../chunks/the-art-of-thinking-clearly.js"), "../typescale.svx": () => import("../../../../chunks/typescale.js"), "../typography-impact.svx": () => import("../../../../chunks/typography-impact.js"), "../ui-kit.svx": () => import("../../../../chunks/ui-kit.js"), "../ux-research.svx": () => import("../../../../chunks/ux-research.js"), "../ux-vs-ui.svx": () => import("../../../../chunks/ux-vs-ui.js"), "../wth-is-wcag.svx": () => import("../../../../chunks/wth-is-wcag.js") }), `../${params.slug}.svx`);
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
