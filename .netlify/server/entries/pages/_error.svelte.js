import { c as create_ssr_component, b as subscribe, h as escape, v as validate_component } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-124dn6u{background-color:var(--bg);display:flex;flex-direction:row;flex-wrap:wrap;padding:var(--space-m)}.status.svelte-124dn6u{color:var(--error);font-weight:600}.error-message.svelte-124dn6u{color:var(--neutral-600);font-weight:300}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"error svelte-124dn6u"}"><div class="${"error__block"}"><h1 class="${"xxxl-text status svelte-124dn6u"}">${escape($page.status)}</h1>
		<h2 class="${"error__info base-text"}">Oops! This is awkward...</h2>
		<p class="${"error-message small-text svelte-124dn6u"}">${escape($page.error.message)}</p>
		<a href="${"/"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Go back",
      labelColor: "var(--text)",
      backgroundColor: "var(--primary-500)"
    },
    {},
    {}
  )}</a></div>
	<img class="${"error__image"}" width="${"500"}" height="${"500"}" src="${"/images/error.gif"}" alt="${""}">
</div>`;
});
export {
  Error as default
};
