import { c as create_ssr_component } from './index3.js';
const metadata = {
	title: 'How to make good shadows',
	date: '2023-1-22',
	categories: ['tips']
};
const Shadow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'figma'}"><a href="${'#figma'}">Figma</a></h2>
<p>Go to ‘drop shadow’</p>
<p>X: 0 Y:4 B: 20 S:0</p>
<p>Opacity: #000 8%</p>`;
});
export { Shadow as default, metadata };
