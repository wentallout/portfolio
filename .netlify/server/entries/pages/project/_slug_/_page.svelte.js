import { c as create_ssr_component, g as each, f as add_attribute, h as escape, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
const Toc_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".toc.svelte-5oycvf ul.svelte-5oycvf{display:flex;width:100%;flex-direction:column;margin:0}.toc.svelte-5oycvf li.svelte-5oycvf::before{display:none}.toc.svelte-5oycvf a.svelte-5oycvf{font-weight:400;font-style:normal;margin-bottom:var(--space-s);background-color:transparent;padding:0}.toc__title.svelte-5oycvf.svelte-5oycvf{font-family:'Recoleta Alt';font-weight:600;font-size:var(--font-size-base);margin-bottom:var(--space-s)}.toc.svelte-5oycvf.svelte-5oycvf{display:flex;flex-direction:column;width:100%;min-height:250px;height:-moz-fit-content;height:fit-content;overflow-y:auto;overflow-x:hidden;max-width:80rem;border-radius:var(--border-radius);padding:var(--space-s);border:0.5px solid var(--neutral-400);margin-bottom:var(--space-l)}.toc.svelte-5oycvf li.svelte-5oycvf{margin:0}",
  map: null
};
const Toc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headingList = [];
  $$result.css.add(css$1);
  return `<div class="${"toc svelte-5oycvf"}"><div class="${"toc__title base-text svelte-5oycvf"}">Table of Content</div>
	<ul class="${"svelte-5oycvf"}">${each(headingList, (item) => {
    return `<li class="${"svelte-5oycvf"}"><a${add_attribute("href", "#" + item.innerHTML, 0)} class="${"svelte-5oycvf"}">${escape(headingList.indexOf(item) + ". " + item.innerHTML)}</a>
			</li>`;
  })}</ul>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-5hcacy{display:block}.project-date.svelte-5hcacy{display:block;font-weight:300;color:var(--neutral-700)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)} data-svelte="svelte-kgl221">`, ""}

<article class="${"info svelte-5hcacy"}"><h1 class="${"xl-text"}">${escape(data.title)}</h1>
	<p class="${"small-text project-date svelte-5hcacy"}">Published: ${escape(data.date)} by Nguyen Dang Khoa</p>
	${validate_component(Toc, "Toc").$$render($$result, {}, {}, {})}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
