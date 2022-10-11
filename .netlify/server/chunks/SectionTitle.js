import { c as create_ssr_component, h as escape } from "./index.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-title.svelte-x390l2.svelte-x390l2{display:flex;justify-content:left;align-items:center;font-family:'Recoleta Alt';font-weight:600;margin-bottom:var(--space-s)}.section-icon.svelte-x390l2.svelte-x390l2{margin-right:var(--space-m)}.section-title.svelte-x390l2 h2.svelte-x390l2{color:var(--primary-900)}.section-icon.svelte-x390l2.svelte-x390l2{display:flex;justify-content:left;align-items:center;padding:1rem;margin-right:var(--space-xs);background-color:var(--primary-200);-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}",
  map: null
};
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionTitle = "" } = $$props;
  let sectionIcon = {
    color: "var(--primary-600)",
    height: 32,
    width: 32
  };
  if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
    $$bindings.sectionTitle(sectionTitle);
  $$result.css.add(css);
  return `<div class="${"section-title svelte-x390l2"}"><div class="${"section-icon svelte-x390l2"}">${slots.default ? slots.default({ sectionIcon }) : ``}</div>
	<h2 class="${"xl-text svelte-x390l2"}">${escape(sectionTitle)}</h2>
</div>`;
});
export {
  SectionTitle as S
};
