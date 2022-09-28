import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../typescale.svx": () => import("../../../../chunks/typescale.js"), "../ux-portfolio.svx": () => import("../../../../chunks/ux-portfolio.js") }), `../${params.slug}.svx`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
}
export {
  load
};
