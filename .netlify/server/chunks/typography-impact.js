import { c as create_ssr_component, v as validate_component } from './index3.js';
import { I as Image } from './Image.js';
const typoDesign = '/_app/immutable/assets/typoDesign-355e288b.webp';
const metadata = {
	title: 'Typography impact',
	date: '2022-11-05',
	categories: ['typography']
};
const Typography_impact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'typography-serves-functional-purpose'}"><a href="${'#typography-serves-functional-purpose'}">Typography serves functional purpose</a></h2>
<p>Appropriate typography choices create:</p>
<ul><li>Readability</li>
<li>Accessibility</li>
<li>Usability</li>
<li>Visual Balance</li></ul>
<p>All of which work together to form effective, understandable visual communication.</p>
<h2 id="${'typography-creates-emotional-impact'}"><a href="${'#typography-creates-emotional-impact'}">Typography creates emotional impact</a></h2>
<p>Look at these examples, what do you feel?</p>
${validate_component(Image, 'Image').$$render(
	$$result,
	{
		src: typoDesign,
		alt: 'strong typography design example'
	},
	{},
	{}
)}`;
});
export { Typography_impact as default, metadata };
