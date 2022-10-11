import { c as create_ssr_component, g as each, h as escape } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".category.svelte-yc5quf{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s)}.category__link.svelte-yc5quf{padding:var(--space-xs);border-radius:var(--border-radius);width:-moz-fit-content;width:fit-content;background-color:var(--neutral-200);border:1px solid transparent;color:var(--accent-500)}.category__link.svelte-yc5quf:hover{border:1px solid var(--accent-500);color:var(--accent-300)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let categories = [];
  data.blogs.forEach((blog) => {
    if (blog.meta.categories.length) {
      blog.meta.categories.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    }
  });
  categories.sort();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"category svelte-yc5quf"}">${each(categories, (category) => {
    return `<a class="${"category__link svelte-yc5quf"}" href="${"/blog/category/" + escape(category, true)}">${escape(category)}</a>`;
  })}
</div>`;
});
export {
  Page as default
};
