import { c as create_ssr_component } from "./index.js";
const markdown = "";
const MarkdownContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"markdown"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  MarkdownContainer as M
};
