import { c as create_ssr_component } from './index3.js';
const metadata = {
	title: 'Portfolio DOs and DONTs',
	date: '2022-09-20',
	categories: ['tips', 'portfolio']
};
const Portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'do'}"><a href="${'#do'}">DO</a></h2>
<ul><li>Make sure your portfolio is a custom responsive website, not a PDF or PNG. <strong>Don’t bother with Behance, Dribbble</strong></li>
<li>Show your work: Whiteboard, sketches, personas, task/process flows, wireframes, etc.</li>
<li>Show your low-fidelity: demonstrate the iteration, the thinking, not the final product. Show the cycles of assumption and validation.</li>
<li>Show you can write: simply and clearly. Don’t use big words, jargon. Make sure you spellcheck everything.</li>
<li>Focus your narratives and case studies on the work you really want to be doing.</li></ul>
<h2 id="${'dont'}"><a href="${'#dont'}">DON’T</a></h2>
<ul><li>Make a PDF portfolio -&gt; people don’t like downloading stuff.</li>
<li>Only show images of the final UI. This should be the last thing on your page.</li>
<li>Only show high-fidelity stuff.</li>
<li>Poor grammar, typos.</li>
<li>Spend too much time talking about technical skills: Illustrator, Photoshop, etc.</li></ul>`;
});
export { Portfolio as default, metadata };
