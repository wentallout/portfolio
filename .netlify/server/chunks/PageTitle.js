import { c as create_ssr_component, h as escape } from "./index3.js";
const PageTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title.svelte-1aj1ab6{align-items:center;display:flex;flex-direction:column;gap:var(--space-s);justify-content:center;margin-bottom:var(--space-2xl);overflow:hidden;position:relative}.line.svelte-1aj1ab6{background:url(/images/bg_line.png) repeat-x 0 0;filter:invert(1);height:6px;width:100%}.title__text.svelte-1aj1ab6{color:var(--text-color);font-family:var(--fancy-font)}",
  map: null
};
const PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle = "pageTitle" } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  $$result.css.add(css);
  return `<div class="${"title svelte-1aj1ab6"}"><h1 class="${"xxxl-text title__text svelte-1aj1ab6"}">${escape(pageTitle)}</h1>
	<div class="${"line svelte-1aj1ab6"}"></div>
</div>`;
});
export {
  PageTitle as P
};
