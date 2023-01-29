import { c as create_ssr_component, b as subscribe, h as escape, v as validate_component } from "../../chunks/index3.js";
import { B as Button } from "../../chunks/Button.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-1spbfp3{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;padding:var(--space-l)}.back.svelte-1spbfp3{width:100%}.error__image.svelte-1spbfp3{aspect-ratio:1/1}.status.svelte-1spbfp3{color:var(--error);font-size:calc(var(--space-xl));font-weight:600}.message.svelte-1spbfp3{color:var(--text-color-low);display:inline-block;font-weight:300}.error__detail.svelte-1spbfp3{align-items:center;display:inline-flex;flex-direction:row;gap:var(--space-s);justify-content:center}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"error svelte-1spbfp3"}"><h1 class="${"status svelte-1spbfp3"}">${escape($page.status)} ${escape($page.error.message)}</h1>
	<div class="${"error__detail svelte-1spbfp3"}"><p class="${"message small-text svelte-1spbfp3"}">Oops! Something unexpected happened.</p></div>
	<a class="${"back svelte-1spbfp3"}" href="${"/"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Back to Home",
      labelColor: "var(--bg)",
      backgroundColor: "var(--primary-500)"
    },
    {},
    {}
  )}</a>

	<img class="${"error__image svelte-1spbfp3"}" width="${"auto"}" height="${"500px"}" src="${"/images/error.gif"}" alt="${""}">
</div>`;
});
export {
  Error as default
};
