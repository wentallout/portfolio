import { c as create_ssr_component, e as spread, f as escape_object, v as validate_component, g as each, h as escape } from "../../../../chunks/index.js";
import { S as SectionTitle } from "../../../../chunks/SectionTitle.js";
const Folder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M216 72h-84.7L104 44.7A15.9 15.9 0 0 0 92.7 40H40a16 16 0 0 0-16 16v144.6A15.4 15.4 0 0 0 39.4 216h177.5a15.2 15.2 0 0 0 15.1-15.1V88a16 16 0 0 0-16-16ZM92.7 56l16 16H40V56ZM216 200H40V88h176Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".category.svelte-1nf1547{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s)}.category__link.svelte-1nf1547{background-color:var(--bg);border-radius:var(--border-radius-light);color:var(--accent-500);padding:var(--space-xs);transition:.3s;width:-moz-fit-content;width:fit-content}.category__link.svelte-1nf1547:hover{background-color:var(--neutral-900);color:var(--accent-300);text-decoration:underline}",
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
  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Category" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Folder, "Folder").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

<div class="${"category svelte-1nf1547"}">${each(categories, (category) => {
    return `<a class="${"category__link svelte-1nf1547"}" href="${"/blog/category/" + escape(category, true)}">${escape(category)}</a>`;
  })}
</div>`;
});
export {
  Page as default
};
