import { c as create_ssr_component, v as validate_component } from './index3.js';
import { I as Image } from './Image.js';
const projectOrganization = '/_app/immutable/assets/projectOrganization-9bf5fb23.webp';
const metadata = {
	title: 'Project Organization',
	date: '2022-10-12',
	categories: ['fundamental']
};
const Project_organization = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'folder-structure'}"><a href="${'#folder-structure'}">folder structure</a></h2>
${validate_component(Image, 'Image').$$render($$result, { src: projectOrganization }, {}, {})}`;
});
export { Project_organization as default, metadata };
