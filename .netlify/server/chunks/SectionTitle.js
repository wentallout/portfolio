import { c as create_ssr_component, g as escape } from "./index.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-title.svelte-1jppn37.svelte-1jppn37{display:flex;justify-content:left;align-items:center;font-family:'Blacker';margin-bottom:var(--space-s)}.section-icon.svelte-1jppn37.svelte-1jppn37{margin-right:var(--space-m)}.section-title.svelte-1jppn37 h2.svelte-1jppn37{color:var(--neutral-900)}.section-icon.svelte-1jppn37.svelte-1jppn37{display:flex;justify-content:left;align-items:center;padding:1rem;margin-right:var(--space-xs);background-color:var(--primary-200);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}",
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
  return `<div class="${"section-title svelte-1jppn37"}"><div class="${"section-icon svelte-1jppn37"}">${slots.default ? slots.default({ sectionIcon }) : ``}</div>
	<h2 class="${"large-text svelte-1jppn37"}">${escape(sectionTitle)}</h2>
</div>`;
});
export {
  SectionTitle as S
};
