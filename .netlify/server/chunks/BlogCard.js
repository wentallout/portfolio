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
  code: '.blog.svelte-ikkj36.svelte-ikkj36{background-color:#1e1e1e;border:1px solid transparent;border-radius:var(--border-radius-light);box-shadow:var(--box-shadow);display:flex;flex-direction:column;height:140px;overflow:hidden;padding:var(--space-s) var(--space-m);position:relative;transition:.3s;width:100%}.blog.svelte-ikkj36.svelte-ikkj36:before{background:url(/images/bg_pattern_rhombus_beta.webp) repeat top/32px 55px;content:"";height:100%;opacity:0;position:absolute;right:0;top:0;transition:.3s;width:var(--space-m);z-index:2}.blog.svelte-ikkj36.svelte-ikkj36:hover:before{background-color:var(--primary-600);opacity:1}@media(min-width:768px){.blog.svelte-ikkj36.svelte-ikkj36{width:40%}}.blog.svelte-ikkj36.svelte-ikkj36:hover{background-color:var(--neutral-900);border:1px solid var(--primary-600);box-shadow:var(--box-shadow-hover)}.blog.svelte-ikkj36:hover .blog__title.svelte-ikkj36{color:var(--primary-600)}.blog.svelte-ikkj36:hover .blog__date.svelte-ikkj36{color:var(--text-low)}.blog__title.svelte-ikkj36.svelte-ikkj36{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text);display:-webkit-box;font-weight:500;overflow:hidden;text-overflow:ellipsis;z-index:3}.blog__date.svelte-ikkj36.svelte-ikkj36{align-items:center;color:var(--text-low);display:flex;flex-direction:row;font-weight:400;justify-content:left;z-index:3}',
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
  return `<a${add_attribute("href", blogLink, 0)} class="${"blog svelte-ikkj36"}"><div class="${"blog__date xs-text svelte-ikkj36"}">${validate_component(Time, "Time").$$render($$result, { timestamp: blogDate }, {}, {})}</div>
	<div class="${"blog__title base-text svelte-ikkj36"}">${escape(blogTitle)}</div>
</a>`;
});
export {
  BlogListContainer as B,
  BlogCard as a
};
