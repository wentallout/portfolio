import {
	c as create_ssr_component,
	d as add_attribute,
	h as escape,
	v as validate_component
} from './index3.js';
import { B as Button } from './Button.js';
import { F as Figma_logo } from './figma-logo.js';
const ProjectCard_svelte_svelte_type_style_lang = '';
const css = {
	code: '.project.svelte-16wofxr{background-color:var(--bg-400);border-radius:var(--border-radius);box-shadow:var(--box-shadow-1);display:flex;flex-direction:column;overflow-y:hidden;width:100%}.project__thumbnail.svelte-16wofxr{height:300px;width:300px}.info__project-name.svelte-16wofxr{color:var(--text-color);font-weight:600;line-height:normal;margin-bottom:var(--space-m)}.project__info.svelte-16wofxr{padding:var(--space-xl)}.info__section.svelte-16wofxr{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s);margin-bottom:var(--space-s)}.info__title.svelte-16wofxr{font-weight:500;max-width:200px;width:var(--space-xl)}.info__description.svelte-16wofxr{color:var(--text-color-low)}.info__btn.svelte-16wofxr{--min:15ch;--gap:var(--space-s);grid-gap:var(--gap);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--min)),1fr));margin-top:var(--space-m)}.btn__anchor.svelte-16wofxr{width:100%}@media(min-width:992px){.project.svelte-16wofxr{flex-direction:row}.project__thumbnail.svelte-16wofxr{width:40%}.project__info.svelte-16wofxr{width:60%}}',
	map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { linkToDetail = '' } = $$props;
	let { linkToFigma = '' } = $$props;
	let { projectName = '' } = $$props;
	let { what = '' } = $$props;
	let { who = '' } = $$props;
	let { result = '' } = $$props;
	let { thumbnail } = $$props;
	if ($$props.linkToDetail === void 0 && $$bindings.linkToDetail && linkToDetail !== void 0)
		$$bindings.linkToDetail(linkToDetail);
	if ($$props.linkToFigma === void 0 && $$bindings.linkToFigma && linkToFigma !== void 0)
		$$bindings.linkToFigma(linkToFigma);
	if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
		$$bindings.projectName(projectName);
	if ($$props.what === void 0 && $$bindings.what && what !== void 0) $$bindings.what(what);
	if ($$props.who === void 0 && $$bindings.who && who !== void 0) $$bindings.who(who);
	if ($$props.result === void 0 && $$bindings.result && result !== void 0)
		$$bindings.result(result);
	if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
		$$bindings.thumbnail(thumbnail);
	$$result.css.add(css);
	return `<div class="${'project svelte-16wofxr'}"><img class="${'project__thumbnail svelte-16wofxr'}"${add_attribute(
		'thumbnail',
		thumbnail,
		0
	)} alt="${'thumbnail'}">

	<div class="${'project__info svelte-16wofxr'}"><div class="${'info__project-name large-text svelte-16wofxr'}">${escape(
		projectName
	)}</div>

		<div class="${'info__section small-text svelte-16wofxr'}"><div class="${'info__title svelte-16wofxr'}">What</div>
			<div class="${'info__description svelte-16wofxr'}">${escape(what)}</div></div>

		<div class="${'info__section small-text svelte-16wofxr'}"><div class="${'info__title svelte-16wofxr'}">Who</div>
			<div class="${'info__description svelte-16wofxr'}">${escape(who)}</div></div>

		<div class="${'info__section small-text svelte-16wofxr'}"><div class="${'info__title svelte-16wofxr'}">Result</div>
			<div class="${'info__description svelte-16wofxr'}">${escape(result)}</div></div>

		<div class="${'info__btn svelte-16wofxr'}"><a class="${'btn__anchor svelte-16wofxr'}"${add_attribute(
		'href',
		linkToDetail,
		0
	)}>${validate_component(Button, 'Button').$$render(
		$$result,
		{
			label: 'Read',
			border: '1px solid var(--primary-500)',
			backgroundColor: 'var(--primary-500)',
			labelColor: 'var(--black)'
		},
		{},
		{}
	)}</a>

			<a class="${'btn__anchor svelte-16wofxr'}" rel="${'external noreferrer noopener'}" target="${'_blank'}"${add_attribute(
		'href',
		linkToFigma,
		0
	)}>${validate_component(Button, 'Button').$$render(
		$$result,
		{
			labelColor: 'var(--text-color)',
			label: 'Figma',
			border: '1px solid var(--text-color)'
		},
		{},
		{
			default: () => {
				return `${validate_component(Figma_logo, 'FigmaLogo').$$render($$result, {}, {}, {})}`;
			}
		}
	)}</a></div></div>
</div>`;
});
export { ProjectCard as P };
