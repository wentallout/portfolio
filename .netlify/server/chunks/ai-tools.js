import { c as create_ssr_component } from './index3.js';
const metadata = {
	title: 'AI Design Tools',
	date: '2023-01-28T00:00:00.000Z',
	categories: ['freebies']
};
const Ai_tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'all-in-one'}"><a href="${'#all-in-one'}">All-in-one</a></h2>
<p>This one awesome website will leads you to amazing tools</p>
<p>-<a href="${'https://aidesignresource.com/'}" rel="${'nofollow noopener noreferrer external'}" target="${'_blank'}">AI Design Resource</a></p>
<h2 id="${'list'}"><a href="${'#list'}">List</a></h2>
<ul><li><a href="${'https://www.stockai.com'}" rel="${'nofollow noopener noreferrer external'}" target="${'_blank'}">StockAI</a></li>
<li><a href="${'https://www.craiyon.com'}" rel="${'nofollow noopener noreferrer external'}" target="${'_blank'}">Craiyon</a> - generate images from text</li></ul>`;
});
export { Ai_tools as default, metadata };
