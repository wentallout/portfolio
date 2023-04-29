import { c as create_ssr_component, h as escape } from './index3.js';
const SectionTitle_svelte_svelte_type_style_lang = '';
const css = {
	code: '.section-title.svelte-lnic8p{gap:var(--space-s);margin-bottom:var(--space-xl)}.section-title.svelte-lnic8p,.title__icon.svelte-lnic8p{align-items:center;display:flex;justify-content:left}.title__icon.svelte-lnic8p{background-color:var(--bg-400);-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);padding:var(--space-s)}.title__text.svelte-lnic8p{color:var(--text-color);font-family:var(--fancy-font)}',
	map: null
};
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { sectionTitle = '' } = $$props;
	let sectionIcon = {
		color: 'var(--text-color)',
		height: 24,
		width: 24
	};
	if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
		$$bindings.sectionTitle(sectionTitle);
	$$result.css.add(css);
	return `<div class="${'section-title svelte-lnic8p'}"><div class="${'title__icon svelte-lnic8p'}">${
		slots.default ? slots.default({ sectionIcon }) : ``
	}</div>
	<h2 class="${'title__text xl-text svelte-lnic8p'}">${escape(sectionTitle)}</h2>
</div>`;
});
export { SectionTitle as S };
