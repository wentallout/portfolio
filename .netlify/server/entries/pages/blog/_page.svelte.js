import {
	c as create_ssr_component,
	s as setContext,
	p as onDestroy,
	k as getContext,
	b as subscribe,
	v as validate_component,
	g as each
} from '../../../chunks/index3.js';
import { B as BlogListContainer, a as BlogCard } from '../../../chunks/BlogCard.js';
import { P as PageTitle } from '../../../chunks/PageTitle.js';
import { w as writable } from '../../../chunks/index2.js';
const Tabs_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: '.tabs.svelte-io3g42{min-height:100vh}',
	map: null
};
const TABS = {};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const tabs = [];
	const panels = [];
	const selectedTab = writable(null);
	const selectedPanel = writable(null);
	setContext(TABS, {
		registerTab: (tab) => {
			tabs.push(tab);
			selectedTab.update((current) => current || tab);
			onDestroy(() => {
				const i = tabs.indexOf(tab);
				tabs.splice(i, 1);
				selectedTab.update((current) =>
					current === tab ? tabs[i] || tabs[tabs.length - 1] : current
				);
			});
		},
		registerPanel: (panel) => {
			panels.push(panel);
			selectedPanel.update((current) => current || panel);
			onDestroy(() => {
				const i = panels.indexOf(panel);
				panels.splice(i, 1);
				selectedPanel.update((current) =>
					current === panel ? panels[i] || panels[panels.length - 1] : current
				);
			});
		},
		selectTab: (tab) => {
			const i = tabs.indexOf(tab);
			selectedTab.set(tab);
			selectedPanel.set(panels[i]);
		},
		selectedTab,
		selectedPanel
	});
	$$result.css.add(css$2);
	return `<div class="${'tabs svelte-io3g42'}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const TabList_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.tab-list.svelte-1egsl2i{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:var(--space-xl);width:100%}',
	map: null
};
const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `<div class="${'tab-list svelte-1egsl2i'}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const TabPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $selectedPanel, $$unsubscribe_selectedPanel;
	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);
	$$unsubscribe_selectedPanel = subscribe(selectedPanel, (value) => ($selectedPanel = value));
	registerPanel(panel);
	$$unsubscribe_selectedPanel();
	return `${$selectedPanel === panel ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
const Tab_svelte_svelte_type_style_lang = '';
const css = {
	code: 'button.svelte-1zrway{background:none;border:none;border-bottom:2px solid transparent;border-radius:0;color:var(--neutral-600);margin:0;padding:var(--space-2xs) var(--space-s);transition:var(--transition)}button.svelte-1zrway:hover{cursor:pointer}.selected.svelte-1zrway{border-bottom:2px solid var(--primary-500);color:var(--primary-500);font-weight:600}',
	map: null
};
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $selectedTab, $$unsubscribe_selectedTab;
	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
	$$unsubscribe_selectedTab = subscribe(selectedTab, (value) => ($selectedTab = value));
	registerTab(tab);
	$$result.css.add(css);
	$$unsubscribe_selectedTab();
	return `<button class="${['large-text svelte-1zrway', $selectedTab === tab ? 'selected' : '']
		.join(' ')
		.trim()}">${slots.default ? slots.default({}) : ``}
</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `${
		(($$result.head += `<!-- HEAD_svelte-hfp9t8_START -->${
			(($$result.title = `<title>Blog</title>`), '')
		}<!-- HEAD_svelte-hfp9t8_END -->`),
		'')
	}

${validate_component(PageTitle, 'PageTitle').$$render($$result, { pageTitle: 'Blog' }, {}, {})}

${validate_component(Tabs, 'Tabs').$$render(
	$$result,
	{},
	{},
	{
		default: () => {
			return `${validate_component(TabList, 'TabList').$$render(
				$$result,
				{},
				{},
				{
					default: () => {
						return `${validate_component(Tab, 'Tab').$$render(
							$$result,
							{},
							{},
							{
								default: () => {
									return `Fundamental`;
								}
							}
						)}
		${validate_component(Tab, 'Tab').$$render(
			$$result,
			{},
			{},
			{
				default: () => {
					return `Tips`;
				}
			}
		)}
		${validate_component(Tab, 'Tab').$$render(
			$$result,
			{},
			{},
			{
				default: () => {
					return `UX`;
				}
			}
		)}
		${validate_component(Tab, 'Tab').$$render(
			$$result,
			{},
			{},
			{
				default: () => {
					return `Color`;
				}
			}
		)}
		${validate_component(Tab, 'Tab').$$render(
			$$result,
			{},
			{},
			{
				default: () => {
					return `Typography`;
				}
			}
		)}
		${validate_component(Tab, 'Tab').$$render(
			$$result,
			{},
			{},
			{
				default: () => {
					return `Freebies`;
				}
			}
		)}`;
					}
				}
			)}

	${validate_component(TabPanel, 'TabPanel').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section>${validate_component(BlogListContainer, 'BlogListContainer').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${each(data.blogs, (blog) => {
								return `${
									blog.meta.categories.length
										? `${
												blog.meta.categories.includes('fundamental')
													? `${validate_component(BlogCard, 'BlogCard').$$render(
															$$result,
															{
																blogTitle: blog.meta.title,
																blogLink: blog.path,
																blogDate: blog.meta.date
															},
															{},
															{}
													  )}`
													: ``
										  }`
										: ``
								}`;
							})}`;
						}
					}
				)}</section>`;
			}
		}
	)}

	${validate_component(TabPanel, 'TabPanel').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section>${validate_component(BlogListContainer, 'BlogListContainer').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${each(data.blogs, (blog) => {
								return `${
									blog.meta.categories.length
										? `${
												blog.meta.categories.includes('tips')
													? `${validate_component(BlogCard, 'BlogCard').$$render(
															$$result,
															{
																blogTitle: blog.meta.title,
																blogLink: blog.path,
																blogDate: blog.meta.date
															},
															{},
															{}
													  )}`
													: ``
										  }`
										: ``
								}`;
							})}`;
						}
					}
				)}</section>`;
			}
		}
	)}

	${validate_component(TabPanel, 'TabPanel').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section>${validate_component(BlogListContainer, 'BlogListContainer').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${each(data.blogs, (blog) => {
								return `${
									blog.meta.categories.length
										? `${
												blog.meta.categories.includes('ux')
													? `${validate_component(BlogCard, 'BlogCard').$$render(
															$$result,
															{
																blogTitle: blog.meta.title,
																blogLink: blog.path,
																blogDate: blog.meta.date
															},
															{},
															{}
													  )}`
													: ``
										  }`
										: ``
								}`;
							})}`;
						}
					}
				)}</section>`;
			}
		}
	)}

	${validate_component(TabPanel, 'TabPanel').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section>${validate_component(BlogListContainer, 'BlogListContainer').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${each(data.blogs, (blog) => {
								return `${
									blog.meta.categories.length
										? `${
												blog.meta.categories.includes('color')
													? `${validate_component(BlogCard, 'BlogCard').$$render(
															$$result,
															{
																blogTitle: blog.meta.title,
																blogLink: blog.path,
																blogDate: blog.meta.date
															},
															{},
															{}
													  )}`
													: ``
										  }`
										: ``
								}`;
							})}`;
						}
					}
				)}</section>`;
			}
		}
	)}

	${validate_component(TabPanel, 'TabPanel').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section>${validate_component(BlogListContainer, 'BlogListContainer').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${each(data.blogs, (blog) => {
								return `${
									blog.meta.categories.length
										? `${
												blog.meta.categories.includes('typography')
													? `${validate_component(BlogCard, 'BlogCard').$$render(
															$$result,
															{
																blogTitle: blog.meta.title,
																blogLink: blog.path,
																blogDate: blog.meta.date
															},
															{},
															{}
													  )}`
													: ``
										  }`
										: ``
								}`;
							})}`;
						}
					}
				)}</section>`;
			}
		}
	)}

	${validate_component(TabPanel, 'TabPanel').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section>${validate_component(BlogListContainer, 'BlogListContainer').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${each(data.blogs, (blog) => {
								return `${
									blog.meta.categories.length
										? `${
												blog.meta.categories.includes('freebies')
													? `${validate_component(BlogCard, 'BlogCard').$$render(
															$$result,
															{
																blogTitle: blog.meta.title,
																blogLink: blog.path,
																blogDate: blog.meta.date
															},
															{},
															{}
													  )}`
													: ``
										  }`
										: ``
								}`;
							})}`;
						}
					}
				)}</section>`;
			}
		}
	)}`;
		}
	}
)}`;
});
export { Page as default };
