import { c as create_ssr_component, h as escape } from "./index.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-title.svelte-1ljblx1.svelte-1ljblx1{align-items:center;display:flex;justify-content:left;margin-bottom:var(--space-s)}.section-title.svelte-1ljblx1 h2.svelte-1ljblx1{font-family:var(--fancy-font);font-weight:600}.title__icon.svelte-1ljblx1.svelte-1ljblx1{align-items:center;background-color:var(--text);-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);display:flex;justify-content:left;margin-right:var(--space-xs);padding:1rem}.title__text.svelte-1ljblx1.svelte-1ljblx1{color:var(--text)}",
  map: null
};
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionTitle = "" } = $$props;
  let sectionIcon = {
    color: "var(--neutral-100)",
    height: 32,
    width: 32
  };
  if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
    $$bindings.sectionTitle(sectionTitle);
  $$result.css.add(css);
  return `<div class="${"section-title  svelte-1ljblx1"}"><div class="${"title__icon svelte-1ljblx1"}">${slots.default ? slots.default({ sectionIcon }) : ``}</div>
	<h2 class="${"title__text xl-text svelte-1ljblx1"}">${escape(sectionTitle)}</h2>
</div>`;
});
export {
  SectionTitle as S
};
