import { c as create_ssr_component, h as escape } from "./index.js";
const PageTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1umip7q-bg-move{50%{background-position:top}}.overlay.svelte-1umip7q{background-color:rgba(0,0,0,.5);height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.title.svelte-1umip7q{-webkit-margin-start:50%;align-items:center;animation:svelte-1umip7q-bg-move 5s infinite;background:url(/images/bg-title.jpg) rgba(0,0,0,.5);background-position:100% 100%;background-repeat:no-repeat;background-size:cover;border-radius:var(--border-radius-light);display:flex;filter:grayscale(100%);justify-content:center;margin-inline-start:50%;margin-bottom:var(--space-l);position:relative;transform:translateX(-50%);width:100%}.title__text.svelte-1umip7q{color:var(--text);font-family:var(--fancy-font);padding-bottom:var(--space-xl);padding-top:var(--space-xl);text-align:center;text-shadow:0 0 6px rgba(0,0,0,.7)}",
  map: null
};
const PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle = "pageTitle" } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  $$result.css.add(css);
  return `<div class="${"title svelte-1umip7q"}"><div class="${"overlay svelte-1umip7q"}"></div>
	<h1 class="${"title__text xxl-text svelte-1umip7q"}">${escape(pageTitle)}</h1>
</div>`;
});
export {
  PageTitle as P
};
