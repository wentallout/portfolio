import { c as create_ssr_component, h as escape } from "./index.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-title.svelte-1742oho{margin-bottom:var(--space-m)}.section-title.svelte-1742oho,.title__icon.svelte-1742oho{align-items:center;display:flex;justify-content:left}.title__icon.svelte-1742oho{background-color:var(--text);-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);margin-right:var(--space-xs);padding:1rem}.title__text.svelte-1742oho{color:var(--text);font-family:var(--fancy-font);font-weight:600}",
  map: null
};
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionTitle = "" } = $$props;
  let sectionIcon = {
    color: "var(--neutral-900)",
    height: 32,
    width: 32
  };
  if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
    $$bindings.sectionTitle(sectionTitle);
  $$result.css.add(css);
  return `<div class="${"section-title  svelte-1742oho"}"><div class="${"title__icon svelte-1742oho"}">${slots.default ? slots.default({ sectionIcon }) : ``}</div>
	<h2 class="${"title__text xl-text svelte-1742oho"}">${escape(sectionTitle)}</h2>
</div>`;
});
export {
  SectionTitle as S
};
