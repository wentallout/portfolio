import { c as create_ssr_component } from "./index.js";
const MarkdownContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"/styles/markdown.css"}" data-svelte="svelte-rhv9i">`, ""}

<div class="${"markdown"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  MarkdownContainer as M
};
