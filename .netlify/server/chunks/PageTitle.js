import { c as create_ssr_component, h as escape } from "./index3.js";
const PageTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: '.title.svelte-2b51zc{align-items:center;background:repeating-radial-gradient(circle at 0 0,transparent 0,#121212 40px),repeating-linear-gradient(#1e1e1e55,#1e1e1e);border-radius:var(--border-radius-light);display:flex;justify-content:center;margin-bottom:var(--space-3xl);overflow:hidden;position:relative;width:100%}.title.svelte-2b51zc:before{background:linear-gradient(0deg,var(--page-bg) 0,hsla(0,0%,7%,.5) 12%,hsla(0,0%,7%,.1) 30%,hsla(0,0%,7%,0) 40%)}.title.svelte-2b51zc:after,.title.svelte-2b51zc:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0}.title.svelte-2b51zc:after{background:linear-gradient(180deg,var(--page-bg) 0,hsla(0,0%,7%,.5) 12%,hsla(0,0%,7%,.1) 30%,hsla(0,0%,7%,0) 40%)}.title__text.svelte-2b51zc{color:var(--text-color);font-family:var(--fancy-font);padding-bottom:var(--space-xl);padding-top:var(--space-xl)}',
  map: null
};
const PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle = "pageTitle" } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  $$result.css.add(css);
  return `<div class="${"title svelte-2b51zc"}"><h1 class="${"title__text xxxl-text rainbow svelte-2b51zc"}">${escape(pageTitle)}</h1>
</div>`;
});
export {
  PageTitle as P
};
