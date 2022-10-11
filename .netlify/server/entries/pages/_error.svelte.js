import { c as create_ssr_component, b as subscribe, h as escape, v as validate_component } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".status.svelte-saf4nn{color:var(--error)}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<h1 class="${"large-text status svelte-saf4nn"}">${escape($page.status)}</h1>
<h2 class="${"error-info mix-text"}">Oops! This is awkward...</h2>
<p>${escape($page.error.message)}</p>

<a href="${"/"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Go back",
      labelColor: "var(--neutral-900)",
      backgroundColor: "var(--primary-500)"
    },
    {},
    {}
  )}
</a>`;
});
export {
  Error as default
};
