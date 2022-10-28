import { c as create_ssr_component, d as add_attribute, h as escape } from "./index.js";
const BlogListContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".blogs.svelte-174aol1{display:flex;flex-direction:column;gap:var(--space-s);margin-bottom:var(--space-l);width:100%}",
  map: null
};
const BlogListContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"blogs svelte-174aol1"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const BlogCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".blog.svelte-okn31j{background-color:var(--bg);border-radius:var(--border-radius);box-shadow:var(--box-shadow);display:flex;flex-direction:column;padding:1rem 2rem;position:relative;transition:.3s;width:100%}.blog.svelte-okn31j:hover{box-shadow:var(--box-shadow-hover);color:var(--primary-500)}.blog__title.svelte-okn31j{font-weight:500}.blog__date.svelte-okn31j{align-items:center;border:1px solid var(--neutral-700);border-radius:var(--border-radius);color:var(--neutral-700);display:flex;flex-direction:row;font-weight:300;height:20px;justify-content:center;padding:4px 8px;width:-moz-fit-content;width:fit-content}",
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogLink = "" } = $$props;
  let { blogTitle = "blogTitle" } = $$props;
  let { blogDate = "blogDate" } = $$props;
  if ($$props.blogLink === void 0 && $$bindings.blogLink && blogLink !== void 0)
    $$bindings.blogLink(blogLink);
  if ($$props.blogTitle === void 0 && $$bindings.blogTitle && blogTitle !== void 0)
    $$bindings.blogTitle(blogTitle);
  if ($$props.blogDate === void 0 && $$bindings.blogDate && blogDate !== void 0)
    $$bindings.blogDate(blogDate);
  $$result.css.add(css);
  return `<a${add_attribute("href", blogLink, 0)}><div class="${"blog svelte-okn31j"}"><div class="${"blog__date xs-text svelte-okn31j"}">${escape(blogDate)}</div>
		<div class="${"blog__title base-text svelte-okn31j"}">${escape(blogTitle)}</div></div>
</a>`;
});
export {
  BlogListContainer as B,
  BlogCard as a
};
