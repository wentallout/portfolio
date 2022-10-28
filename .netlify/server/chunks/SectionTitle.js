import { c as create_ssr_component, h as escape } from "./index.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-title.svelte-yeguad.svelte-yeguad{align-items:center;display:flex;justify-content:left;margin-bottom:var(--space-s)}.section-icon.svelte-yeguad.svelte-yeguad{margin-right:var(--space-m)}.section-title.svelte-yeguad h2.svelte-yeguad{color:var(--text);font-family:var(--fancy-font);font-weight:600}.section-icon.svelte-yeguad.svelte-yeguad{align-items:center;background-color:var(--neutral-900);-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);display:flex;justify-content:left;margin-right:var(--space-xs);padding:1rem}",
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
  return `<div class="${"section-title svelte-yeguad"}"><div class="${"section-icon svelte-yeguad"}">${slots.default ? slots.default({ sectionIcon }) : ``}</div>
	<h2 class="${"xl-text svelte-yeguad"}">${escape(sectionTitle)}</h2>
</div>`;
});
export {
  SectionTitle as S
};
