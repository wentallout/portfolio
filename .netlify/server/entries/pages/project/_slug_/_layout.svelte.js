import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
const MarkdownContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"/styles/markdown.css"}" data-svelte="svelte-rhv9i">`, ""}

<div class="${"markdown"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MarkdownContainer, "MarkdownContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
