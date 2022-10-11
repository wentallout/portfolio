import { c as create_ssr_component, h as escape, v as validate_component, g as each } from "../../../../../chunks/index.js";
import { B as BlogListContainer, a as BlogCard } from "../../../../../chunks/BlogCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".result.svelte-1kj9dbv{margin-bottom:var(--space-m);font-weight:300;color:var(--neutral-700);font-family:'Recoleta Alt'}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<p class="${"result large-text svelte-1kj9dbv"}">Posts about <strong>${escape(data.category)}</strong> :</p>
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
