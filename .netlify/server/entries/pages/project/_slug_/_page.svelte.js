import {
	c as create_ssr_component,
	h as escape,
	d as add_attribute,
	v as validate_component,
	m as missing_component
} from '../../../../chunks/index3.js';
import { C as ContentContainer } from '../../../../chunks/ContentContainer.js';
import { T as Time } from '../../../../chunks/Time.js';
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: '.project-name.svelte-1zl6ea{color:var(--text-color)}.info.svelte-1zl6ea{display:block}.project-date.svelte-1zl6ea{color:var(--text-color-low);display:block;font-weight:300}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css);
	return `${
		(($$result.head += `<!-- HEAD_svelte-kgl221_START -->${
			(($$result.title = `<title>${escape(data.title)}</title>`), '')
		}<meta property="${'og:title'}"${add_attribute(
			'content',
			data.title,
			0
		)}><!-- HEAD_svelte-kgl221_END -->`),
		'')
	}

<article class="${'info svelte-1zl6ea'}"><div class="${'small-text project-date svelte-1zl6ea'}">Updated: ${validate_component(
		Time,
		'Time'
	).$$render($$result, { relative: true, timestamp: data.date }, {}, {})}</div>
	<h1 class="${'project-name svelte-1zl6ea'}">${escape(data.title)}</h1>
	${validate_component(ContentContainer, 'ContentContainer').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${validate_component(
					data.content || missing_component,
					'svelte:component'
				).$$render($$result, {}, {}, {})}`;
			}
		}
	)}
</article>`;
});
export { Page as default };
