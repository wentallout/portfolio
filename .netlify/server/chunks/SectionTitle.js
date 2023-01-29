import { c as create_ssr_component, h as escape } from "./index3.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-title.svelte-1fnmfav{margin-bottom:var(--space-m)}.section-title.svelte-1fnmfav,.title__icon.svelte-1fnmfav{align-items:center;display:flex;justify-content:left}.title__icon.svelte-1fnmfav{margin-right:var(--space-xs);padding:1rem}.title__text.svelte-1fnmfav{color:var(--primary-500);font-family:var(--fancy-font);font-weight:600}",
  map: null
};
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionTitle = "" } = $$props;
  let sectionIcon = {
    color: "var(--primary-500)",
    height: 32,
    width: 32
  };
  if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
    $$bindings.sectionTitle(sectionTitle);
  $$result.css.add(css);
  return `<div class="${"section-title svelte-1fnmfav"}"><div class="${"title__icon svelte-1fnmfav"}">${slots.default ? slots.default({ sectionIcon }) : ``}</div>
	<h2 class="${"title__text xxl-text svelte-1fnmfav"}">${escape(sectionTitle)}</h2>
</div>`;
});
export {
  SectionTitle as S
};
