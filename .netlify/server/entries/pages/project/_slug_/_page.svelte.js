import { c as create_ssr_component, h as escape, d as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
import { E as End } from "../../../../chunks/End.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-148raym{display:block}.project-title.svelte-148raym{text-transform:capitalize}.project-date.svelte-148raym{color:var(--neutral-700);display:block;font-weight:300}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-kgl221_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-kgl221_END -->`, ""}

<article class="${"info svelte-148raym"}"><h1 class="${"xl-text project-title svelte-148raym"}">${escape(data.title)}</h1>
	<p class="${"small-text project-date svelte-148raym"}">Published: ${escape(data.date)}</p>
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
	${validate_component(End, "End").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
