import { c as create_ssr_component, h as escape, d as add_attribute, v as validate_component, g as each, m as missing_component } from "../../../../chunks/index3.js";
import { B as BlogTag } from "../../../../chunks/BlogTag.js";
import { E as End } from "../../../../chunks/End.js";
import { T as Time } from "../../../../chunks/Time.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".blog-tag.svelte-1bbkocg:after{content:none!important}.date.svelte-1bbkocg,.info.svelte-1bbkocg{display:block}.date.svelte-1bbkocg{margin:0}.category__title.svelte-1bbkocg,.date.svelte-1bbkocg{color:var(--text-color-low)}.category__title.svelte-1bbkocg{display:inline}.category.svelte-1bbkocg{color:var(--text-color-low);gap:var(--space-xs);margin:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-kgl221_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-kgl221_END -->`, ""}

<article class="${"info svelte-1bbkocg"}"><h1 class="${"rainbow"}">${escape(data.title)}</h1>
	<div class="${"date small-text svelte-1bbkocg"}">Published: ${validate_component(Time, "Time").$$render($$result, { relative: true, timestamp: data.date }, {}, {})}</div>

	${data.categories.length ? `<div class="${"category svelte-1bbkocg"}"><div class="${"category__title svelte-1bbkocg"}">Categories:</div>
			${each(data.categories, (category) => {
    return `<a class="${"blog-tag svelte-1bbkocg"}" href="${"/blog/category/" + escape(category, true)}">${validate_component(BlogTag, "BlogTag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(category)}
					`;
      }
    })}
				</a>`;
  })}</div>` : ``}

	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}

	${validate_component(End, "End").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
