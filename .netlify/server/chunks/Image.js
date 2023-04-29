import {
	c as create_ssr_component,
	v as validate_component,
	d as add_attribute
} from './index3.js';
import { E as ExLink } from './ExLink.js';
/* empty css                                     */ const css = {
	code: '.lazy-img.svelte-iev208{opacity:0}',
	map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { src = '' } = $$props;
	let { width } = $$props;
	let { height } = $$props;
	let { loading = 'lazy' } = $$props;
	let { alt = 'alt' } = $$props;
	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
	if ($$props.height === void 0 && $$bindings.height && height !== void 0)
		$$bindings.height(height);
	if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
		$$bindings.loading(loading);
	if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
	$$result.css.add(css);
	return `${validate_component(ExLink, 'ExLink').$$render(
		$$result,
		{ href: src, 'aria-label': alt },
		{},
		{
			default: () => {
				return `<img class="${'lazy-img svelte-iev208'}"${add_attribute(
					'width',
					width,
					0
				)}${add_attribute('height', height, 0)}${add_attribute(
					'loading',
					loading,
					0
				)} decoding="${'async'}"${add_attribute('alt', alt, 0)}>`;
			}
		}
	)}`;
});
export { Image as I };
