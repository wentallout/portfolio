import { c as create_ssr_component, h as escape, f as add_attribute, g as each, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-mapz57{display:block}.date.svelte-mapz57{display:block;font-weight:300;color:var(--neutral-700);margin:0}.category.svelte-mapz57{font-weight:300;color:var(--neutral-700);display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:center;gap:var(--space-s)}.category__link.svelte-mapz57{display:inline-block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)} data-svelte="svelte-kgl221">`, ""}

<article class="${"info svelte-mapz57"}"><h1 class="${"xl-text"}">${escape(data.title)}</h1>
	<p class="${"small-text date svelte-mapz57"}">Published: ${escape(data.date)} by Nguyen Dang Khoa</p>

	${data.categories.length ? `<div class="${"category svelte-mapz57"}"><div>Categories:</div>
			${each(data.categories, (category) => {
    return `<a class="${"category__link svelte-mapz57"}" href="${"/blog/category/" + escape(category, true)}">${escape(category)}
				</a>`;
  })}</div>` : ``}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
