import { c as create_ssr_component, h as escape, d as add_attribute, g as each, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
import { E as End } from "../../../../chunks/End.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-1y4ebxf{display:block}.date.svelte-1y4ebxf{display:block;margin:0}.category.svelte-1y4ebxf,.date.svelte-1y4ebxf{color:var(--neutral-700);font-weight:300}.category.svelte-1y4ebxf{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s);justify-content:flex-start}.category__link.svelte-1y4ebxf{display:inline-block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-kgl221_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-kgl221_END -->`, ""}

<article class="${"info svelte-1y4ebxf"}"><h1 class="${"xl-text"}">${escape(data.title)}</h1>
	<p class="${"small-text date svelte-1y4ebxf"}">Published: ${escape(data.date)}</p>

	${data.categories.length ? `<div class="${"category svelte-1y4ebxf"}"><div>Categories:</div>
			${each(data.categories, (category) => {
    return `<a class="${"category__link svelte-1y4ebxf"}" href="${"/blog/category/" + escape(category, true)}">${escape(category)}
				</a>`;
  })}</div>` : ``}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}

	${validate_component(End, "End").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
