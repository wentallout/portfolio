import { c as create_ssr_component, f as subscribe, h as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".status.svelte-1tzocur{color:var(--error)}.btn-back.svelte-1tzocur{background-color:var(--primary-500);color:var(--neutral-900)}.btn-back.svelte-1tzocur:hover{background-color:var(--primary-600)}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<h1 class="${"large-text status svelte-1tzocur"}">${escape($page.status)}</h1>
<h2 class="${"error-info mix-text"}">Oops! This is awkward...</h2>
<p>${escape($page.error.message)}</p>

<a class="${"btn btn-back svelte-1tzocur"}" href="${"/"}">Go back</a>`;
});
export {
  Error as default
};
