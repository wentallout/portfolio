import { c as create_ssr_component, h as escape, d as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
import { E as End } from "../../../../chunks/End.js";
import { T as Time } from "../../../../chunks/Time.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-7czyqg{display:block}.project-title.svelte-7czyqg{color:var(--brand-color);text-transform:capitalize}.project-date.svelte-7czyqg{color:var(--text-low);display:block;font-weight:300}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-kgl221_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-kgl221_END -->`, ""}

<article class="${"info svelte-7czyqg"}"><h1 class="${"xl-text project-title svelte-7czyqg"}">${escape(data.title)}</h1>
	<p class="${"small-text project-date svelte-7czyqg"}">Updated: ${validate_component(Time, "Time").$$render($$result, { relative: true, timestamp: data.date }, {}, {})}</p>
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
	${validate_component(End, "End").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
