import { c as create_ssr_component, h as escape } from "./index.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-icon.svelte-7azw8q{display:flex;justify-content:left;align-items:center;border-radius:100%;padding:0.25rem;margin-right:var(--space-xs);background-color:var(--primary-200)}.section-title.svelte-7azw8q{display:flex;justify-content:left;align-items:center;margin-bottom:var(--space-s);font-weight:600;color:var(--neutral-900)}",
  map: null
};
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionTitle = "" } = $$props;
  if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
    $$bindings.sectionTitle(sectionTitle);
  $$result.css.add(css);
  return `<div class="${"section-title svelte-7azw8q"}"><div class="${"section-icon svelte-7azw8q"}">${slots.default ? slots.default({}) : ``}</div>
	<h2 class="${"large-text"}">${escape(sectionTitle)}</h2>
</div>`;
});
export {
  SectionTitle as S
};
