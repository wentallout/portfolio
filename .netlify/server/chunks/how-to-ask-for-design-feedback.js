import { c as create_ssr_component, v as validate_component } from './index3.js';
import { I as Image } from './Image.js';
const designFeedback = '/_app/immutable/assets/design-feedback-655e4871.webp';
const metadata = {
	title: 'How to ask for design feedback',
	date: '2022-11-24',
	categories: ['tips']
};
const How_to_ask_for_design_feedback = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<h2 id="${'template'}"><a href="${'#template'}">template</a></h2>
${validate_component(Image, 'Image').$$render($$result, { src: designFeedback }, {}, {})}`;
	}
);
export { How_to_ask_for_design_feedback as default, metadata };
