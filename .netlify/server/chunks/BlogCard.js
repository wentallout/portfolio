import { c as create_ssr_component, d as add_attribute, v as validate_component, h as escape } from "./index.js";
import { T as Time } from "./Time.js";
const BlogListContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".blogs.svelte-edii0k{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s);margin-bottom:var(--space-l);width:100%}",
  map: null
};
const BlogListContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"blogs svelte-edii0k"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const BlogCard_svelte_svelte_type_style_lang = "";
const css = {
  code: '.blog.svelte-no9u0b.svelte-no9u0b{background-color:var(--bg);border:1px solid transparent;border-radius:var(--border-radius);box-shadow:var(--box-shadow);display:flex;flex-direction:column;height:140px;overflow:hidden;padding:var(--space-s) var(--space-m);position:relative;transition:.3s;width:100%}.blog.svelte-no9u0b.svelte-no9u0b:before{background:url(/images/bg_pattern_rhombus_beta.webp) repeat top/32px 55px;content:"";height:100%;opacity:0;position:absolute;right:0;top:0;transition:.3s;width:var(--space-m);z-index:2}.blog.svelte-no9u0b.svelte-no9u0b:hover:before{background-color:var(--primary-500);opacity:1}@media(min-width:768px){.blog.svelte-no9u0b.svelte-no9u0b{width:40%}}.blog.svelte-no9u0b.svelte-no9u0b:hover{background-color:var(--neutral-900);border:1px solid var(--primary-500);box-shadow:var(--box-shadow-hover)}.blog.svelte-no9u0b:hover .blog__title.svelte-no9u0b{color:var(--primary-500)}.blog.svelte-no9u0b:hover .blog__date.svelte-no9u0b{color:var(--neutral-100)}.blog__title.svelte-no9u0b.svelte-no9u0b{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text);display:-webkit-box;font-weight:500;overflow:hidden;text-overflow:ellipsis;z-index:3}.blog__date.svelte-no9u0b.svelte-no9u0b{align-items:center;color:var(--neutral-800);display:flex;flex-direction:row;font-weight:400;justify-content:left;z-index:3}',
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogLink = "" } = $$props;
  let { blogTitle = "blogTitle" } = $$props;
  let { blogDate = "" } = $$props;
  if ($$props.blogLink === void 0 && $$bindings.blogLink && blogLink !== void 0)
    $$bindings.blogLink(blogLink);
  if ($$props.blogTitle === void 0 && $$bindings.blogTitle && blogTitle !== void 0)
    $$bindings.blogTitle(blogTitle);
  if ($$props.blogDate === void 0 && $$bindings.blogDate && blogDate !== void 0)
    $$bindings.blogDate(blogDate);
  $$result.css.add(css);
  return `<a${add_attribute("href", blogLink, 0)} class="${"blog svelte-no9u0b"}"><div class="${"blog__date xs-text svelte-no9u0b"}">${validate_component(Time, "Time").$$render($$result, { timestamp: blogDate }, {}, {})}</div>
	<div class="${"blog__title base-text svelte-no9u0b"}">${escape(blogTitle)}</div>
</a>`;
});
export {
  BlogListContainer as B,
  BlogCard as a
};
