import {
	c as create_ssr_component,
	b as subscribe,
	h as escape,
	v as validate_component
} from '../../chunks/index3.js';
import { B as Button } from '../../chunks/Button.js';
import { p as page } from '../../chunks/stores.js';
const _error_svelte_svelte_type_style_lang = '';
const css = {
	code: '.error.svelte-r4nf1u{align-items:center;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;padding:var(--space-l)}.error__image.svelte-r4nf1u{height:240px;width:240px}.status.svelte-r4nf1u{color:var(--error);font-family:Fancy;font-weight:600;text-align:center;text-shadow:0 0 80px var(--error)}.message.svelte-r4nf1u{color:var(--text-color-low);display:inline-block;font-weight:300}.error__detail.svelte-r4nf1u{align-items:center;display:flex;flex-direction:row;gap:var(--space-s);justify-content:center;margin-bottom:var(--space-m)}',
	map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	$$result.css.add(css);
	$$unsubscribe_page();
	return `<div class="${'error svelte-r4nf1u'}"><img class="${'error__image svelte-r4nf1u'}" width="${'240'}" height="${'240'}" src="${'/images/error.gif'}" alt="${''}">
	<h1 class="${'status xxxl-text svelte-r4nf1u'}">${escape($page.status)} ${escape(
		$page.error.message
	)}</h1>
	<div class="${'error__detail svelte-r4nf1u'}"><p class="${'message small-text svelte-r4nf1u'}">Oops! Something unexpected happened.</p></div>

	<div><a rel="${'external'}" href="${'/'}">${validate_component(Button, 'Button').$$render(
		$$result,
		{
			label: 'Back to Home',
			labelColor: 'var(--bg-500)',
			backgroundColor: 'var(--primary-500)'
		},
		{},
		{}
	)}</a></div>
</div>`;
});
export { Error as default };
