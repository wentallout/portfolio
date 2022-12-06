import { c as create_ssr_component, h as escape, v as validate_component, g as each } from "../../../../../chunks/index.js";
import { B as BlogListContainer, a as BlogCard } from "../../../../../chunks/BlogCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".result.svelte-n4fp4h{font-family:var(--fancy-font);margin-bottom:var(--space-m);margin-top:0}.result.svelte-n4fp4h,.result__title.svelte-n4fp4h{color:var(--neutral-900)}.result__category.svelte-n4fp4h{color:var(--primary-500)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"result large-text svelte-n4fp4h"}"><span class="${"result__title svelte-n4fp4h"}">Posts about </span>
	<span class="${"result__category svelte-n4fp4h"}">${escape(data.category)}</span></div>
${validate_component(BlogListContainer, "BlogListContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.blogs, (blog) => {
        return `${validate_component(BlogCard, "BlogCard").$$render(
          $$result,
          {
            blogTitle: blog.meta.title,
            blogLink: blog.path,
            blogDate: blog.meta.date
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
