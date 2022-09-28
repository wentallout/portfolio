import { c as create_ssr_component, f as each, b as add_attribute, g as escape, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
const Toc_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".toc.svelte-1milhxr ul.svelte-1milhxr{display:flex;width:100%;flex-direction:column;margin:0}.toc.svelte-1milhxr li.svelte-1milhxr::before{content:''}.toc.svelte-1milhxr li a.svelte-1milhxr{font-weight:400;font-style:normal}.toc__title.svelte-1milhxr.svelte-1milhxr{margin-bottom:var(--space-s);padding:4px;border-radius:var(--border-radius);background-color:var(--neutral-200)}.toc.svelte-1milhxr.svelte-1milhxr{display:flex;width:100%;height:300px;overflow-y:auto;overflow-x:hidden;max-width:80rem;border-radius:var(--border-radius);padding:var(--space-s);border:0.5px solid var(--neutral-400);margin-bottom:var(--space-l)}",
  map: null
};
const Toc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headingList = [];
  $$result.css.add(css$1);
  return `<div class="${"toc svelte-1milhxr"}"><ul class="${"svelte-1milhxr"}"><div class="${"toc__title base-text svelte-1milhxr"}">Table of Content</div>
		${each(headingList, (item) => {
    return `<li class="${"svelte-1milhxr"}"><a${add_attribute("href", "#" + item.innerHTML, 0)} class="${"svelte-1milhxr"}">${escape(headingList.indexOf(item) + ". " + item.innerHTML)}</a>
			</li>`;
  })}</ul>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-1n3j5a9{display:block}.date.svelte-1n3j5a9{display:block;font-weight:300}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(data.title)}</title>`, ""}`, ""}

<article class="${"info svelte-1n3j5a9"}"><h1 class="${"large-text"}">${escape(data.title)}</h1>
	<span class="${"small-text date svelte-1n3j5a9"}">Published: ${escape(data.date)}</span>
	${validate_component(Toc, "Toc").$$render($$result, {}, {}, {})}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
