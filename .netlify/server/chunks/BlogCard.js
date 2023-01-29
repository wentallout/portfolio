import { c as create_ssr_component, d as add_attribute, v as validate_component, h as escape } from "./index3.js";
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
  code: '.blog.svelte-1ms5me2.svelte-1ms5me2{background-color:var(--bg);border:1px solid transparent;border-radius:var(--border-radius-light);box-shadow:var(--box-shadow);display:flex;flex-direction:column;height:144px;overflow:hidden;padding:var(--space-s) var(--space-m);position:relative;width:100%}.blog.svelte-1ms5me2.svelte-1ms5me2,.blog.svelte-1ms5me2.svelte-1ms5me2:before{transition:var(--transition)}.blog.svelte-1ms5me2.svelte-1ms5me2:before{animation:rainbowTextAni 2s linear infinite alternate;background-size:contain;background:-webkit-linear-gradient(92deg,#95d7e3,#eb76ff);content:"";height:100%;opacity:0;position:absolute;right:0;top:0;width:var(--space-m);z-index:2}.blog.svelte-1ms5me2.svelte-1ms5me2:hover:before{background-color:var(--primary-500);opacity:1}.blog.svelte-1ms5me2.svelte-1ms5me2:hover{border:1px solid var(--primary-500);box-shadow:var(--box-shadow-hover)}.blog.svelte-1ms5me2:hover .blog__title.svelte-1ms5me2{color:var(--primary-500)}.blog.svelte-1ms5me2:hover .blog__date.svelte-1ms5me2{color:var(--text-color-low)}.blog__title.svelte-1ms5me2.svelte-1ms5me2{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-color);display:-webkit-box;font-weight:500;overflow:hidden;text-overflow:ellipsis;z-index:3}.blog__date.svelte-1ms5me2.svelte-1ms5me2{align-items:center;color:var(--text-color-low);display:flex;flex-direction:row;font-weight:400;justify-content:left;z-index:3}',
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
  return `<a${add_attribute("href", blogLink, 0)} class="${"blog svelte-1ms5me2"}"><div class="${"blog__date xs-text svelte-1ms5me2"}">${validate_component(Time, "Time").$$render($$result, { timestamp: blogDate }, {}, {})}</div>
	<div class="${"blog__title base-text svelte-1ms5me2"}">${escape(blogTitle)}</div>
</a>`;
});
export {
  BlogListContainer as B,
  BlogCard as a
};
