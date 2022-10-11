import { c as create_ssr_component, f as add_attribute, h as escape } from "./index.js";
const BlogListContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".blogs.svelte-1gxuvq4{display:flex;flex-direction:column;gap:var(--space-s);width:100%;margin-bottom:var(--space-l)}",
  map: null
};
const BlogListContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"blogs svelte-1gxuvq4"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const BlogCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".blog.svelte-epw8jt{display:flex;flex-direction:column;width:100%;border-radius:var(--border-radius);border:var(--border);padding:1rem 2rem}.blog.svelte-epw8jt:hover{border:var(--border-hover)}.blog__title.svelte-epw8jt{font-weight:500}.blog__date.svelte-epw8jt{font-weight:300;color:var(--neutral-800)}",
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
  return `<a${add_attribute("href", blogLink, 0)}><div class="${"blog svelte-epw8jt"}"><div class="${"blog__title base-text svelte-epw8jt"}">${escape(blogTitle)}</div>
		<div class="${"blog__date small-text svelte-epw8jt"}">${escape(blogDate)}</div></div>
</a>`;
});
export {
  BlogListContainer as B,
  BlogCard as a
};
