import { c as create_ssr_component } from './index3.js';
const metadata = {
	title: 'Case Study',
	date: '2022-12-05T00:00:00.000Z',
	categories: ['fundamental']
};
const Case_study = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'purpose-of-a-case-study'}"><a href="${'#purpose-of-a-case-study'}">Purpose of a case Study</a></h2>
<ul><li>understand the way you work </li>
<li>understand your design process</li>
<li>understand your thought process </li>
<li>to gauge your skillset </li>
<li>understand how your designs have translated into real impact </li></ul>
<h2 id="${'what-platform'}"><a href="${'#what-platform'}">What platform?</a></h2>
<ul><li>behance</li>
<li>notion</li>
<li>your own website</li></ul>
<h2 id="${'how-many'}"><a href="${'#how-many'}">How many?</a></h2>
<ul><li>your best 3</li>
<li>begin: just 2
make sure it’s relevant to the job</li></ul>
<h2 id="${'common-mistakes'}"><a href="${'#common-mistakes'}">Common mistakes</a></h2>
<ul><li>showing only the end design is SUPER WRONG -&gt; you need to show your design process in detail. What makes you choose this component, why you use the pattern, color, font types</li>
<li>case study not tailored to the role.</li>
<li>No problem statement mentioned. Example: trying to improve the customer experience cuz people keeps quitting the app </li>
<li>Spelling error, alignment, spacing, blurry images.</li></ul>`;
});
export { Case_study as default, metadata };
