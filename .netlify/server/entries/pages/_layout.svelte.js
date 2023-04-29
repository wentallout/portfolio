import {
	c as create_ssr_component,
	d as add_attribute,
	v as validate_component,
	e as spread,
	f as escape_object,
	g as each,
	h as escape,
	j as null_to_empty,
	b as subscribe
} from '../../chunks/index3.js';
import {
	L as Linkedin_logo,
	P as Phone,
	E as Envelope,
	I as Instagram_logo
} from '../../chunks/instagram-logo.js';
import { E as ExLink } from '../../chunks/ExLink.js';
import { w as website, n as navItems } from '../../chunks/config.js';
import { p as page, n as navigating } from '../../chunks/stores.js';
import NProgress from 'nprogress';
const SocialButtons_svelte_svelte_type_style_lang = '';
const css$9 = {
	code: '.social-links.svelte-9taofn{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s)}',
	map: null
};
const SocialButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { style = '' } = $$props;
	if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
	$$result.css.add(css$9);
	return `<div${add_attribute(
		'style',
		style,
		0
	)} class="${'social-links svelte-9taofn'}">${validate_component(ExLink, 'ExLink').$$render(
		$$result,
		{
			href: 'https://www.linkedin.com/in/wentallout'
		},
		{},
		{
			default: () => {
				return `${validate_component(Linkedin_logo, 'LinkedinLogo').$$render(
					$$result,
					{
						class: 'icon',
						height: '32',
						width: '32',
						color: 'var(--text-color)'
					},
					{},
					{}
				)}`;
			}
		}
	)}
	${validate_component(ExLink, 'ExLink').$$render(
		$$result,
		{ href: 'tel:+84929066331' },
		{},
		{
			default: () => {
				return `${validate_component(Phone, 'Phone').$$render(
					$$result,
					{
						class: 'icon',
						height: '32',
						width: '32',
						color: 'var(--text-color)'
					},
					{},
					{}
				)}`;
			}
		}
	)}
	${validate_component(ExLink, 'ExLink').$$render(
		$$result,
		{ href: 'mailto:wentallout@gmail.com' },
		{},
		{
			default: () => {
				return `${validate_component(Envelope, 'Envelope').$$render(
					$$result,
					{
						class: 'icon',
						height: '32',
						width: '32',
						color: 'var(--text-color)'
					},
					{},
					{}
				)}`;
			}
		}
	)}
	${validate_component(ExLink, 'ExLink').$$render(
		$$result,
		{
			href: 'https://www.instagram.com/wentallout'
		},
		{},
		{
			default: () => {
				return `${validate_component(Instagram_logo, 'InstagramLogo').$$render(
					$$result,
					{
						class: 'icon',
						height: '32',
						width: '32',
						color: 'var(--text-color)'
					},
					{},
					{}
				)}`;
			}
		}
	)}
</div>`;
});
const Yin_yang_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M140 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm92 48A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-92 48a12 12 0 1 0-12 12a12 12 0 0 0 12-12Zm32-92a44 44 0 0 0-44-44a88 88 0 0 0-46.9 162.4A51.1 51.1 0 0 1 76 180a52 52 0 0 1 52-52a44 44 0 0 0 44-44Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Cover_svelte_svelte_type_style_lang = '';
const css$8 = {
	code: '.yinyang{animation:svelte-5kot30-rotate 3s linear infinite;filter:drop-shadow(0 0 10px var(--primary-500))}@keyframes svelte-5kot30-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.cover__logo.svelte-5kot30{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:var(--transition);z-index:1}.cover__logo.svelte-5kot30:hover{filter:brightness(1.2)}.cover.svelte-5kot30{background-color:var(--bg-500);height:300px;position:relative}.cover.svelte-5kot30,.cover__btn.svelte-5kot30{display:flex;width:100%}.cover__btn.svelte-5kot30{bottom:var(--space-s);justify-content:flex-end;left:0;padding-right:1rem;position:absolute}.cover.svelte-5kot30:after{background:linear-gradient(0deg,var(--page-bg) 0,rgba(0,0,0,.5) 12%,rgba(0,0,0,.1) 30%,transparent 40%);bottom:0;content:"";pointer-events:none;right:0}.cover.svelte-5kot30:after,.video.svelte-5kot30{left:0;position:absolute;top:0}.video.svelte-5kot30{filter:brightness(50%);height:100%;-o-object-fit:cover;object-fit:cover;width:100%}',
	map: null
};
const Cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let videoEle;
	$$result.css.add(css$8);
	return `<div class="${'cover svelte-5kot30'}"><video class="${'video svelte-5kot30'}" autoplay muted loop${add_attribute(
		'this',
		videoEle,
		0
	)}><source src="${'/videos/city.mp4'}" type="${'video/mp4'}"></video>

	<a href="${'/'}" class="${'cover__logo svelte-5kot30'}">${validate_component(
		Yin_yang_fill,
		'YinYang'
	).$$render(
		$$result,
		{
			class: 'yinyang',
			width: '72',
			height: '72',
			color: 'var(--primary-500)'
		},
		{},
		{}
	)}</a>

	<div class="${'cover__btn svelte-5kot30'}">${validate_component(
		SocialButtons,
		'SocialButtons'
	).$$render($$result, { style: 'flex-direction:column' }, {}, {})}</div>
</div>`;
});
const SkipLink_svelte_svelte_type_style_lang = '';
const css$7 = {
	code: '.skip-link.svelte-1miwuht{align-items:center;background-color:var(--primary-500);color:var(--bg-500);display:flex;font-weight:600;justify-content:center;left:0;opacity:.9;padding:var(--space-s);position:fixed;right:0;top:0;transition:translate .15s ease-in-out;transition:background-color .5s;translate:0 -100%;z-index:11}.skip-link.svelte-1miwuht:hover{background-color:var(--primary-400)}.skip-link.svelte-1miwuht:focus{outline:none;translate:0}',
	map: null
};
const SkipLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$7);
	return `<a class="${'skip-link svelte-1miwuht'}" href="${'#main-content'}">Skip to main content </a>`;
});
const PWA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const { themeColor } = website;
	return `${
		(($$result.head += `<!-- HEAD_svelte-12k4fzg_START --><meta name="${'theme-color'}"${add_attribute(
			'content',
			themeColor,
			0
		)}><!-- HEAD_svelte-12k4fzg_END -->`),
		'')
	}`;
});
const Caret_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M208 168a8.5 8.5 0 0 1-5.7-2.3L128 91.3l-74.3 74.4a8.1 8.1 0 0 1-11.4-11.4l80-80a8.1 8.1 0 0 1 11.4 0l80 80a8.1 8.1 0 0 1 0 11.4a8.5 8.5 0 0 1-5.7 2.3Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const BackToTop_svelte_svelte_type_style_lang = '';
const css$6 = {
	code: '.bck2top.svelte-1c25yb2{align-items:center;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:var(--primary-500);bottom:var(--space-s);-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);display:flex;height:56px;justify-content:center;line-height:normal;opacity:1;position:fixed;right:var(--space-s);transition:opacity .3s,visibility .3s;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:56px;z-index:var(--z-index-max)}@media(min-width:768px){.bck2top.svelte-1c25yb2{height:64px;width:64px}}@media(hover:hover){.bck2top.svelte-1c25yb2:hover{cursor:pointer;filter:brightness(1.2);transform:scale(1.2);transition:transform .3s}}.bck2top.hidden.svelte-1c25yb2{opacity:0;visibility:hidden}',
	map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { showOnPx = 150 } = $$props;
	if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
		$$bindings.showOnPx(showOnPx);
	$$result.css.add(css$6);
	return `

<div class="${['bck2top svelte-1c25yb2', 'hidden'].join(' ').trim()}">${validate_component(
		Caret_up,
		'CaretUp'
	).$$render(
		$$result,
		{
			width: '24',
			height: '24',
			color: 'var(--black)'
		},
		{},
		{}
	)}
</div>`;
});
const Marquee_svelte_svelte_type_style_lang = '';
const css$5 = {
	code: '.container.svelte-1w66zxy.svelte-1w66zxy{font-size:var(--font-size-small);font-weight:400;line-height:normal;max-width:100vw;position:relative;width:100%}.marquee.svelte-1w66zxy.svelte-1w66zxy{--gap:var(--space-3xl);background-color:var(--bg-400);color:var(--primary-500);overflow:hidden;padding:var(--space-xs) 0;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.marquee.svelte-1w66zxy.svelte-1w66zxy,.marquee__content.svelte-1w66zxy.svelte-1w66zxy{display:flex;gap:var(--gap)}.marquee__content.svelte-1w66zxy.svelte-1w66zxy{animation:svelte-1w66zxy-scroll 20s linear infinite;animation-direction:reverse;flex-shrink:0;justify-content:space-around;min-width:100%}.marquee.svelte-1w66zxy:hover .marquee__content.svelte-1w66zxy{animation-play-state:paused}@keyframes svelte-1w66zxy-scroll{0%{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--gap)))}}',
	map: null
};
const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$5);
	return `<div class="${'container svelte-1w66zxy'}"><div class="${'marquee svelte-1w66zxy'}"><ul class="${'marquee__content svelte-1w66zxy'}"><li>User-centered design</li>
			<li>Usability</li>
			<li>Information Architecture</li>
			<li>Interaction Design</li>
			<li>User Testing</li>
			<li>Accessibility</li>
			<li>Responsive Design</li>
			<li>Visual design</li>
			<li>Content strategy</li>
			<li>Prototyping</li></ul>

		<ul class="${'marquee__content svelte-1w66zxy'}" aria-hidden="${'true'}"><li>User-centered design</li>
			<li>Usability</li>
			<li>Information Architecture</li>
			<li>Interaction Design</li>
			<li>User Testing</li>
			<li>Accessibility</li>
			<li>Responsive Design</li>
			<li>Visual design</li>
			<li>Content strategy</li>
			<li>Prototyping</li></ul></div>
</div>`;
});
const Footer_svelte_svelte_type_style_lang = '';
const css$4 = {
	code: '.other-info.svelte-1t0qdhn.svelte-1t0qdhn{color:var(--text-color-low);margin-top:var(--space-s);-webkit-user-select:none;-moz-user-select:none;user-select:none}.secret.svelte-1t0qdhn.svelte-1t0qdhn{color:transparent;transition:var(--transition)}.other-info.svelte-1t0qdhn:hover+.secret.svelte-1t0qdhn{color:var(--primary-500)}footer.svelte-1t0qdhn.svelte-1t0qdhn{align-items:flex-start;background-color:var(--bg-400);background-image:linear-gradient(135deg,var(--bg-500) 25%,transparent 25%),linear-gradient(225deg,var(--bg-500) 25%,transparent 25%),linear-gradient(45deg,var(--bg-500) 25%,transparent 25%),linear-gradient(315deg,var(--bg-500) 25%,var(--bg-400) 25%);background-position:40px 0,40px 0,0 0,0 0;background-repeat:repeat;background-size:40px 40px;display:flex;flex-direction:column;justify-content:center;max-width:100vw;padding:var(--space-2xl) var(--space-xs)}footer.svelte-1t0qdhn.svelte-1t0qdhn:after{background:linear-gradient(0deg,var(--page-bg) 0,hsla(0,0%,7%,.5) 12%,hsla(0,0%,7%,.1) 30%,hsla(0,0%,7%,0) 40%);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.footer-container.svelte-1t0qdhn.svelte-1t0qdhn{color:var(--text-color);display:flex;flex-direction:column;font-weight:300}@media(min-width:768px){footer.svelte-1t0qdhn.svelte-1t0qdhn{padding:var(--space-xl) var(--page-padding)}}.nav-list.svelte-1t0qdhn.svelte-1t0qdhn{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:left;margin:0;margin-bottom:var(--space-l)}.nav-list-item.svelte-1t0qdhn.svelte-1t0qdhn{display:flex;padding-left:0;padding-right:var(--space-xs)}.nav-list-item.svelte-1t0qdhn a.svelte-1t0qdhn{font-weight:500;transition:.3s}.nav-list-item.svelte-1t0qdhn a.svelte-1t0qdhn:hover{color:var(--primary-500)}footer.svelte-1t0qdhn.svelte-1t0qdhn{position:relative}',
	map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$4);
	return `${validate_component(Marquee, 'Marquee').$$render($$result, {}, {}, {})}
<footer class="${'svelte-1t0qdhn'}"><div class="${'footer-container small-text svelte-1t0qdhn'}"><ul class="${'nav-list svelte-1t0qdhn'}">${each(
		navItems,
		(navItem) => {
			return `<li class="${'nav-list-item svelte-1t0qdhn'}"><a${add_attribute(
				'href',
				navItem.path,
				0
			)} class="${'svelte-1t0qdhn'}">${escape(navItem.title)}</a>
				</li>`;
		}
	)}</ul>

		${validate_component(SocialButtons, 'SocialButtons').$$render($$result, {}, {}, {})}

		<div class="${'other-info small-text svelte-1t0qdhn'}">Copyright © 2022-2023 - All Rights Reserved.</div>
		<div class="${'secret small-text svelte-1t0qdhn'}">I declare war on anybody standing in the way of what I dream for.
		</div></div>
</footer>`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M205.7 194.3a8.1 8.1 0 0 1 0 11.4a8.2 8.2 0 0 1-11.4 0L128 139.3l-66.3 66.4a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l66.4-66.3l-66.4-66.3a8.1 8.1 0 0 1 11.4-11.4l66.3 66.4l66.3-66.4a8.1 8.1 0 0 1 11.4 11.4L139.3 128Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const VanishingHeader_svelte_svelte_type_style_lang = '';
const css$3 = {
	code: 'div.svelte-bfhcfu{position:fixed;top:0;transition:transform .1s linear;width:100%;z-index:10}.show.svelte-bfhcfu{transform:translateY(0)}.hide.svelte-bfhcfu{transform:translateY(-100%)}',
	map: null
};
const VanishingHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { duration = '300ms' } = $$props;
	let { offset = 0 } = $$props;
	let { tolerance = 0 } = $$props;
	let headerClass = 'show';
	let y = 0;
	let lastY = 0;
	function deriveClass(y2, dy) {
		if (y2 < offset) {
			return 'show';
		}
		if (Math.abs(dy) <= tolerance) {
			return headerClass;
		}
		if (dy < 0) {
			return 'hide';
		}
		return 'show';
	}
	function updateClass(y2) {
		const dy = lastY - y2;
		lastY = y2;
		return deriveClass(y2, dy);
	}
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
		$$bindings.duration(duration);
	if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
		$$bindings.offset(offset);
	if ($$props.tolerance === void 0 && $$bindings.tolerance && tolerance !== void 0)
		$$bindings.tolerance(tolerance);
	$$result.css.add(css$3);
	headerClass = updateClass(y);
	return `

<div class="${escape(null_to_empty(headerClass), true) + ' svelte-bfhcfu'}">${
		slots.default ? slots.default({}) : ``
	}
</div>`;
});
const Header_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: '.active-page.svelte-1jvp8nn.svelte-1jvp8nn{color:var(--primary-500)!important}.nav-list__item.svelte-1jvp8nn.svelte-1jvp8nn{transition:var(--transition)}.nav-list.svelte-1jvp8nn:hover .nav-list__item.svelte-1jvp8nn:not(:hover),.overlay-content.svelte-1jvp8nn:hover .overlay-item.svelte-1jvp8nn:not(:hover){opacity:.6}.nav.svelte-1jvp8nn.svelte-1jvp8nn{display:flex;font-size:var(--font-size-base);font-weight:500;transition:var(--transition);width:100%}.nav.svelte-1jvp8nn.svelte-1jvp8nn,.nav-scrolldown.svelte-1jvp8nn.svelte-1jvp8nn{color:var(--text-color)}.nav-scrolldown.svelte-1jvp8nn.svelte-1jvp8nn{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.7)!important}.nav-list.svelte-1jvp8nn.svelte-1jvp8nn{display:flex;flex-direction:row;margin:0;width:100%}.nav-list__item.svelte-1jvp8nn.svelte-1jvp8nn{display:none}.hamburger.svelte-1jvp8nn.svelte-1jvp8nn{cursor:pointer;display:flex;justify-content:center;max-width:100vw;padding:var(--space-xs);width:100vw}@media(min-width:768px){.nav.svelte-1jvp8nn.svelte-1jvp8nn{padding:0 var(--page-padding)}.nav-list__item.svelte-1jvp8nn.svelte-1jvp8nn{align-items:center;display:flex;justify-content:center;line-height:1;width:100%}.hamburger.svelte-1jvp8nn.svelte-1jvp8nn{display:none}}.item.svelte-1jvp8nn.svelte-1jvp8nn{align-items:center;display:flex;height:100%;justify-content:center;padding:var(--space-s);transition:var(--transition);width:100%}.overlay.svelte-1jvp8nn.svelte-1jvp8nn{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.9);font-weight:300;height:0;left:0;overflow-y:hidden;position:fixed;top:0;transition:.2s;width:100%;z-index:var(--z-index-max)}.overlay-content.svelte-1jvp8nn.svelte-1jvp8nn{flex-direction:column;justify-content:center;position:relative;top:60px}.overlay-content.svelte-1jvp8nn.svelte-1jvp8nn,.overlay-item.svelte-1jvp8nn.svelte-1jvp8nn{align-items:center;display:flex;width:100%}.overlay-item.svelte-1jvp8nn.svelte-1jvp8nn{color:var(--neutral-200);font-weight:600;height:var(--scroll-padding);outline:1px solid transparent;padding:var(--space-l) 0;padding-left:var(--page-padding);padding-right:var(--page-padding);transition:var(--transition)}.overlay-item.svelte-1jvp8nn.svelte-1jvp8nn:focus,.overlay-item.svelte-1jvp8nn.svelte-1jvp8nn:hover{background:var(--black)}.closebtn.svelte-1jvp8nn.svelte-1jvp8nn{align-items:center;background-color:var(--primary-500);cursor:pointer;display:flex;height:var(--scroll-padding);justify-content:center;position:absolute;top:0;width:100%}@media screen and (max-height:450px){.overlay.svelte-1jvp8nn.svelte-1jvp8nn{overflow-y:auto}}',
	map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	let navOverlayEle;
	let headerEle;
	$$result.css.add(css$2);
	$$unsubscribe_page();
	return `

${validate_component(VanishingHeader, 'VanishingHeader').$$render(
	$$result,
	{
		duration: '350ms',
		offset: 50,
		tolerance: 5
	},
	{},
	{
		default: () => {
			return `<header${add_attribute('this', headerEle, 0)}><nav class="${['nav svelte-1jvp8nn', '']
				.join(' ')
				.trim()}"><ul class="${'nav-list svelte-1jvp8nn'}">${each(navItems, (navItem) => {
				return `<li class="${[
					'nav-list__item svelte-1jvp8nn',
					$page.url.pathname === `${navItem.path}` ? 'active-page' : ''
				]
					.join(' ')
					.trim()}"><a class="${'item svelte-1jvp8nn'}"${add_attribute(
					'href',
					navItem.path,
					0
				)}>${escape(navItem.title)}</a>
					</li>`;
			})}

				<li class="${'hamburger svelte-1jvp8nn'}">${validate_component(List, 'List').$$render(
				$$result,
				{
					color: 'var(--text-color)',
					width: '32',
					height: '32'
				},
				{},
				{}
			)}</li></ul></nav></header>`;
		}
	}
)}

<div class="${'overlay svelte-1jvp8nn'}"${add_attribute(
		'this',
		navOverlayEle,
		0
	)}><div class="${'closebtn svelte-1jvp8nn'}">${validate_component(X, 'X').$$render(
		$$result,
		{
			color: 'var(--primary-900)',
			width: '32',
			height: '32'
		},
		{},
		{}
	)}</div>
	<div class="${'overlay-content svelte-1jvp8nn'}">${each(navItems, (navItem) => {
		return `<a class="${[
			'overlay-item xl-text svelte-1jvp8nn',
			$page.url.pathname === `${navItem.path}` ? 'active-page' : ''
		]
			.join(' ')
			.trim()}"${add_attribute('href', navItem.path, 0)}>${escape(navItem.title)}</a>`;
	})}
		<div class="${'overlay-item svelte-1jvp8nn'}">${validate_component(
		SocialButtons,
		'SocialButtons'
	).$$render($$result, {}, {}, {})}</div></div>
</div>`;
});
const Breadcrumb_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.breadcrumb.svelte-1q6c9w8{margin-bottom:var(--space-l);margin-top:var(--space-xl)}.breadcrumb__unclickable.svelte-1q6c9w8{color:var(--text-color-low);display:inline-block;font-weight:300;pointer-events:none}.breadcrumb__clickable.svelte-1q6c9w8{color:var(--accent-300);display:inline-flex;font-weight:300}.breadcrumb__clickable.svelte-1q6c9w8:hover{color:var(--primary-500)}',
	map: null
};
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { path } = $$props;
	var crumbs;
	if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
	$$result.css.add(css$1);
	{
		{
			const tokens = path.split('/').filter((t) => t !== '');
			let tokenPath = '';
			crumbs = tokens.map((t) => {
				tokenPath += '/' + t;
				return {
					label: t.replace('-', ' '),
					href: tokenPath
				};
			});
			crumbs.unshift({ label: 'home', href: '/' });
		}
	}
	return `<nav aria-label="${'breadcrumb'}" id="${'breadcrumb'}" class="${'breadcrumb base-text svelte-1q6c9w8'}">${each(
		crumbs,
		(c, i) => {
			return `${
				i == crumbs.length - 1
					? `${
							c.label !== 'home'
								? `<div class="${'breadcrumb__unclickable svelte-1q6c9w8'}">${escape(c.label)}
				</div>`
								: ``
					  }`
					: `<a class="${'breadcrumb__clickable svelte-1q6c9w8'}"${add_attribute(
							'href',
							c.href,
							0
					  )}>${escape(c.label)}</a> / `
			}`;
		}
	)}
</nav>`;
});
const sanitize = '';
const global = '';
const weird = '';
const atropos_min = '';
const nprogress = '';
const _layout_svelte_svelte_type_style_lang = '';
const css = {
	code: '.page-container.svelte-1bbsrv2{background:var(--page-bg)}.main-content.svelte-1bbsrv2{display:flex;flex-direction:column;min-height:100vh;padding:var(--space-l) 1rem;position:relative;z-index:1}.main-content.svelte-1bbsrv2:before{background:url(/images/bg_decor_flower_l.png),url(/images/bg_decor_flower_r.png);background-position:top var(--space-3xl) left 0,top var(--space-3xl) right 0;background-repeat:no-repeat;filter:grayscale(100%);left:0;top:0}.main-content.svelte-1bbsrv2:after,.main-content.svelte-1bbsrv2:before{content:"";height:100%;position:absolute;width:100%;z-index:-1}.main-content.svelte-1bbsrv2:after{background:url(/images/bg_decor_line_l.png),url(/images/bg_decor_line_r.png);background-position:bottom var(--space-xl) left 0,bottom var(--space-xl) right 0;background-repeat:no-repeat;bottom:0;right:0}@media(max-width:991px){.main-content.svelte-1bbsrv2:after,.main-content.svelte-1bbsrv2:before{display:none}}@media(min-width:768px){.main-content.svelte-1bbsrv2{padding:var(--space-l) var(--page-padding)}}',
	map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $navigating, $$unsubscribe_navigating;
	let $page, $$unsubscribe_page;
	$$unsubscribe_navigating = subscribe(navigating, (value) => ($navigating = value));
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	let { data } = $$props;
	NProgress.configure({
		minimum: 0.1,
		showSpinner: true,
		trickle: true,
		easing: 'ease',
		speed: 500
	});
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css);
	{
		{
			if ($navigating) {
				NProgress.start();
			}
			if (!$navigating) {
				NProgress.done();
			}
		}
	}
	$$unsubscribe_navigating();
	$$unsubscribe_page();
	return `${
		(($$result.head += `<!-- HEAD_svelte-ser1xn_START --><meta name="${'google-site-verification'}" content="${'jDcuv7ulyNCJGJg0K24h9h6T_YqP9l5TBbv2DWOHh-w'}"><!-- HEAD_svelte-ser1xn_END -->`),
		'')
	}

${validate_component(SkipLink, 'SkipLink').$$render($$result, {}, {}, {})}
${validate_component(PWA, 'PWA').$$render($$result, {}, {}, {})}
${validate_component(Cover, 'Cover').$$render($$result, {}, {}, {})}
<div class="${'page-container svelte-1bbsrv2'}">${validate_component(
		BackToTop,
		'BackToTop'
	).$$render($$result, {}, {}, {})}
	${validate_component(Header, 'Header').$$render($$result, {}, {}, {})}

	<main class="${'main-content svelte-1bbsrv2'}" id="${'main-content'}">${validate_component(
		Breadcrumb,
		'Breadcrumb'
	).$$render($$result, { path: $page.url.pathname }, {}, {})}
			${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, 'Footer').$$render($$result, {}, {}, {})}
</div>`;
});
export { Layout as default };
