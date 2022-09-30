import { c as create_ssr_component, g as escape } from "./index.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-title.svelte-izn6fw.svelte-izn6fw{display:flex;justify-content:left;align-items:center;margin-bottom:var(--space-s);font-family:'Aux Mono';text-transform:uppercase}.section-title.svelte-izn6fw h2.svelte-izn6fw{color:var(--neutral-900)}.section-icon.svelte-izn6fw.svelte-izn6fw{display:flex;justify-content:left;align-items:center;padding:1rem;margin-right:var(--space-xs);background-color:var(--primary-200);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}",
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
  return `<div class="${"section-title svelte-izn6fw"}"><div class="${"section-icon svelte-izn6fw"}">${slots.default ? slots.default({ sectionIcon }) : ``}</div>
	<h2 class="${"large-text svelte-izn6fw"}">${escape(sectionTitle)}</h2>
</div>`;
});
export {
  SectionTitle as S
};
