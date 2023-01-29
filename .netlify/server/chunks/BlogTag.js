import { c as create_ssr_component } from "./index3.js";
const BlogTag_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tag.svelte-17jalfo{background:var(--bg);border-radius:var(--border-radius);color:var(--text-color-low);display:inline-block;font-weight:500;line-height:normal;padding:var(--space-3xs) var(--space-2xs);transition:var(--transition);width:-moz-fit-content;width:fit-content}.tag.svelte-17jalfo:hover{background:var(--primary-500);color:var(--black)}",
  map: null
};
const BlogTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"small-text tag svelte-17jalfo"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  BlogTag as B
};
