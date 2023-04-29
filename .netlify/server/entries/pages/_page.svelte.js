import {
	c as create_ssr_component,
	h as escape,
	v as validate_component,
	l as createEventDispatcher,
	d as add_attribute,
	o as compute_rest_props,
	p as onDestroy,
	e as spread,
	q as escape_attribute_value,
	f as escape_object
} from '../../chunks/index3.js';
import { P as ProjectCard } from '../../chunks/ProjectCard.js';
import { E as ExLink } from '../../chunks/ExLink.js';
import {
	S as SEO,
	f as featuredImageSrc,
	o as ogImageSrc,
	a as ogSquareImageSrc,
	t as twitterImageSrc
} from '../../chunks/SEO.js';
import { w as website } from '../../chunks/config.js';
const HomeSectionTitle_svelte_svelte_type_style_lang = '';
const css$5 = {
	code: '.home-section.svelte-10xxtlu{color:var(--text-color);font-family:var(--fancy-font);margin-bottom:var(--space-xl)}',
	map: null
};
const HomeSectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { title: title2 = '' } = $$props;
	let { extraClass = '' } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
	if ($$props.extraClass === void 0 && $$bindings.extraClass && extraClass !== void 0)
		$$bindings.extraClass(extraClass);
	$$result.css.add(css$5);
	return `<h2 class="${
		'home-section xl-text ' + escape(extraClass, true) + ' svelte-10xxtlu'
	}">${escape(title2)}</h2>`;
});
const Featured_svelte_svelte_type_style_lang = '';
const css$4 = {
	code: '.featured.svelte-1619pk2{display:flex;flex-direction:column}',
	map: null
};
const Featured = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$4);
	return `<section><div class="${'featured svelte-1619pk2'}"><a href="${'/project'}">${validate_component(
		HomeSectionTitle,
		'HomeSectionTitle'
	).$$render(
		$$result,
		{
			title: 'Featured projects',
			extraClass: 'rainbow'
		},
		{},
		{}
	)}</a>

		<div class="${'projects'}">${validate_component(ProjectCard, 'ProjectCard').$$render(
		$$result,
		{
			projectName: 'Reza - Restaurant Reservation App',
			linkToDetail: 'project/reza',
			linkToFigma:
				'https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=2%3A9&t=a8W16CMSWgxzoLKB-1',
			what: 'Reza is an app that lets people book restaurant tables easily.',
			who: 'Age 18-30, busy office workers or tourists visiting a new city.',
			result: 'Persona, User Flow, Wireframe, Prototype'
		},
		{},
		{}
	)}</div></div>
</section>`;
});
const Saos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { animation = 'none' } = $$props;
	let { animation_out = 'none; opacity: 0' } = $$props;
	let { once = false } = $$props;
	let { top = 0 } = $$props;
	let { bottom = 0 } = $$props;
	let { css_observer = '' } = $$props;
	let { css_animation = '' } = $$props;
	const dispatch = createEventDispatcher();
	let observing = true;
	const countainer = `__saos-${Math.random()}__`;
	if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
		$$bindings.animation(animation);
	if ($$props.animation_out === void 0 && $$bindings.animation_out && animation_out !== void 0)
		$$bindings.animation_out(animation_out);
	if ($$props.once === void 0 && $$bindings.once && once !== void 0) $$bindings.once(once);
	if ($$props.top === void 0 && $$bindings.top && top !== void 0) $$bindings.top(top);
	if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
		$$bindings.bottom(bottom);
	if ($$props.css_observer === void 0 && $$bindings.css_observer && css_observer !== void 0)
		$$bindings.css_observer(css_observer);
	if ($$props.css_animation === void 0 && $$bindings.css_animation && css_animation !== void 0)
		$$bindings.css_animation(css_animation);
	{
		dispatch('update', { observing });
	}
	return `<div${add_attribute('id', countainer, 0)}${add_attribute(
		'style',
		css_observer,
		0
	)}>${`<div style="${
		'animation: ' + escape(animation, true) + '; ' + escape(css_animation, true)
	}">${slots.default ? slots.default({}) : ``}</div>`}</div>`;
});
const SaosContainer_svelte_svelte_type_style_lang = '';
const css$3 = {
	code: '@keyframes fade-in{0%{opacity:0}to{opacity:1}}',
	map: null
};
const SaosContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { once = true } = $$props;
	let { animation = 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;' } = $$props;
	if ($$props.once === void 0 && $$bindings.once && once !== void 0) $$bindings.once(once);
	if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
		$$bindings.animation(animation);
	$$result.css.add(css$3);
	return `${validate_component(Saos, 'Saos').$$render(
		$$result,
		{ once, animation },
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const fpt = '/_app/immutable/assets/fpt-3c33bfe5.webp';
const nashtech = '/_app/immutable/assets/nashtech-93cf1358.webp';
const MyClients_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: '.clients.svelte-1fcocjw{align-items:flex-start;flex-direction:column;width:100%}.clients.svelte-1fcocjw,.clients__logo.svelte-1fcocjw{display:flex;justify-content:center}.clients__logo.svelte-1fcocjw{align-items:center;flex-direction:row;flex-wrap:wrap;gap:var(--space-m)}.logo.svelte-1fcocjw{aspect-ratio:1/1;filter:grayscale();height:160px;transition:var(--transition);width:160px}.logo.svelte-1fcocjw:hover{filter:none}',
	map: null
};
const MyClients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$2);
	return `${validate_component(SaosContainer, 'SaosContainer').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section><div class="${'clients svelte-1fcocjw'}">${validate_component(
					HomeSectionTitle,
					'HomeSectionTitle'
				).$$render($$result, { title: 'Worked at' }, {}, {})}
			<div class="${'clients__logo svelte-1fcocjw'}">${validate_component(ExLink, 'ExLink').$$render(
					$$result,
					{ href: 'https://www.fpt-software.com' },
					{},
					{
						default: () => {
							return `<img class="${'logo svelte-1fcocjw'}" loading="${'lazy'}" decoding="${'async'}"${add_attribute(
								'src',
								fpt,
								0
							)} alt="${'FPT Software'}">`;
						}
					}
				)}

				${validate_component(ExLink, 'ExLink').$$render(
					$$result,
					{ href: 'https://nashtechglobal.com' },
					{},
					{
						default: () => {
							return `<img class="${'logo svelte-1fcocjw'}" loading="${'lazy'}" decoding="${'async'}"${add_attribute(
								'src',
								nashtech,
								0
							)} alt="${'NashTech'}">`;
						}
					}
				)}</div></div></section>`;
			}
		}
	)}`;
});
const SVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { src = '' } = $$props;
	let { alt = '' } = $$props;
	let { width } = $$props;
	let { height } = $$props;
	let { style = '' } = $$props;
	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
	if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
	if ($$props.height === void 0 && $$bindings.height && height !== void 0)
		$$bindings.height(height);
	if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
	return `<img${add_attribute('src', src, 0)}${add_attribute('width', width, 0)}${add_attribute(
		'height',
		height,
		0
	)}${add_attribute('style', style, 0)} loading="${'lazy'}" decoding="${'async'}" alt="${
		'SVG ' + escape(alt, true)
	}">`;
});
const frontend = '/_app/immutable/assets/frontend-8f9110d0.svg';
const navigation = '/_app/immutable/assets/navigation-54f2c665.svg';
const interactive = '/_app/immutable/assets/interactive-3178016c.svg';
const graphicDesign = '/_app/immutable/assets/graphicDesign-674b0dc6.svg';
const Atropos_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		'class',
		'scaleClass',
		'rotateClass',
		'innerClass',
		'eventsEl',
		'alwaysActive',
		'activeOffset',
		'shadowOffset',
		'shadowScale',
		'duration',
		'rotate',
		'rotateTouch',
		'rotateXMax',
		'rotateYMax',
		'rotateXInvert',
		'rotateYInvert',
		'stretchX',
		'stretchY',
		'stretchZ',
		'commonOrigin',
		'shadow',
		'highlight'
	]);
	let { class: className = '' } = $$props;
	let { scaleClass = '' } = $$props;
	let { rotateClass = '' } = $$props;
	let { innerClass = '' } = $$props;
	let { eventsEl = void 0 } = $$props;
	let { alwaysActive = void 0 } = $$props;
	let { activeOffset = void 0 } = $$props;
	let { shadowOffset = void 0 } = $$props;
	let { shadowScale = void 0 } = $$props;
	let { duration = void 0 } = $$props;
	let { rotate = void 0 } = $$props;
	let { rotateTouch = void 0 } = $$props;
	let { rotateXMax = void 0 } = $$props;
	let { rotateYMax = void 0 } = $$props;
	let { rotateXInvert = void 0 } = $$props;
	let { rotateYInvert = void 0 } = $$props;
	let { stretchX = void 0 } = $$props;
	let { stretchY = void 0 } = $$props;
	let { stretchZ = void 0 } = $$props;
	let { commonOrigin = true } = $$props;
	let { shadow = true } = $$props;
	let { highlight = true } = $$props;
	createEventDispatcher();
	let elRef = null;
	const cls = (...args) => {
		return args.filter((c) => !!c).join(' ');
	};
	onDestroy(() => {});
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.scaleClass === void 0 && $$bindings.scaleClass && scaleClass !== void 0)
		$$bindings.scaleClass(scaleClass);
	if ($$props.rotateClass === void 0 && $$bindings.rotateClass && rotateClass !== void 0)
		$$bindings.rotateClass(rotateClass);
	if ($$props.innerClass === void 0 && $$bindings.innerClass && innerClass !== void 0)
		$$bindings.innerClass(innerClass);
	if ($$props.eventsEl === void 0 && $$bindings.eventsEl && eventsEl !== void 0)
		$$bindings.eventsEl(eventsEl);
	if ($$props.alwaysActive === void 0 && $$bindings.alwaysActive && alwaysActive !== void 0)
		$$bindings.alwaysActive(alwaysActive);
	if ($$props.activeOffset === void 0 && $$bindings.activeOffset && activeOffset !== void 0)
		$$bindings.activeOffset(activeOffset);
	if ($$props.shadowOffset === void 0 && $$bindings.shadowOffset && shadowOffset !== void 0)
		$$bindings.shadowOffset(shadowOffset);
	if ($$props.shadowScale === void 0 && $$bindings.shadowScale && shadowScale !== void 0)
		$$bindings.shadowScale(shadowScale);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
		$$bindings.duration(duration);
	if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
		$$bindings.rotate(rotate);
	if ($$props.rotateTouch === void 0 && $$bindings.rotateTouch && rotateTouch !== void 0)
		$$bindings.rotateTouch(rotateTouch);
	if ($$props.rotateXMax === void 0 && $$bindings.rotateXMax && rotateXMax !== void 0)
		$$bindings.rotateXMax(rotateXMax);
	if ($$props.rotateYMax === void 0 && $$bindings.rotateYMax && rotateYMax !== void 0)
		$$bindings.rotateYMax(rotateYMax);
	if ($$props.rotateXInvert === void 0 && $$bindings.rotateXInvert && rotateXInvert !== void 0)
		$$bindings.rotateXInvert(rotateXInvert);
	if ($$props.rotateYInvert === void 0 && $$bindings.rotateYInvert && rotateYInvert !== void 0)
		$$bindings.rotateYInvert(rotateYInvert);
	if ($$props.stretchX === void 0 && $$bindings.stretchX && stretchX !== void 0)
		$$bindings.stretchX(stretchX);
	if ($$props.stretchY === void 0 && $$bindings.stretchY && stretchY !== void 0)
		$$bindings.stretchY(stretchY);
	if ($$props.stretchZ === void 0 && $$bindings.stretchZ && stretchZ !== void 0)
		$$bindings.stretchZ(stretchZ);
	if ($$props.commonOrigin === void 0 && $$bindings.commonOrigin && commonOrigin !== void 0)
		$$bindings.commonOrigin(commonOrigin);
	if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
		$$bindings.shadow(shadow);
	if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0)
		$$bindings.highlight(highlight);
	return `<div${spread(
		[
			{
				class: escape_attribute_value(cls('atropos', className))
			},
			escape_object($$restProps)
		],
		{}
	)}${add_attribute('this', elRef, 0)}><span${add_attribute(
		'class',
		cls('atropos-scale', scaleClass),
		0
	)}><span${add_attribute('class', cls('atropos-rotate', rotateClass), 0)}><span${add_attribute(
		'class',
		cls('atropos-inner', innerClass),
		0
	)}>${slots.default ? slots.default({}) : ``}
        ${
					highlight || typeof highlight === 'undefined'
						? `<span class="${'atropos-highlight'}"></span>`
						: ``
				}</span>
      ${slots.rotate ? slots.rotate({}) : ``}
      ${
				shadow || typeof shadow === 'undefined' ? `<span class="${'atropos-shadow'}"></span>` : ``
			}</span>
    ${slots.scale ? slots.scale({}) : ``}</span>
  ${slots.root ? slots.root({}) : ``}</div>`;
});
const Atropos = Atropos_svelte;
const MyTools_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.section__svg.svelte-z96dtp{opacity:.1;position:absolute;right:-10%;top:0}.section__text.svelte-z96dtp{text-align:left;width:100%}.tool.svelte-z96dtp{align-items:flex-start;justify-content:center}.block__section.svelte-z96dtp,.tool.svelte-z96dtp{display:flex;flex-direction:column}.block__section.svelte-z96dtp{align-items:center;background-color:var(--bg-400);border-radius:var(--border-radius);box-shadow:var(--box-shadow-1);overflow:hidden;padding:var(--space-l);position:relative}@media(min-width:992px){.block__section.svelte-z96dtp{align-items:flex-start}}.tool__block.svelte-z96dtp{--min:20ch;grid-gap:var(--space-s);align-content:center;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--min)),1fr));justify-content:center;width:100%}.block__title.svelte-z96dtp{color:var(--text-color);font-weight:600;margin-bottom:var(--space-2xs);margin-top:var(--space-m)}.block__text.svelte-z96dtp{color:var(--text-color-low);font-weight:400;margin:0}',
	map: null
};
const MyTools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `${validate_component(SaosContainer, 'SaosContainer').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section><div class="${'tool svelte-z96dtp'}">${validate_component(
					HomeSectionTitle,
					'HomeSectionTitle'
				).$$render($$result, { title: 'My tools' }, {}, {})}

			<div class="${'tool__block svelte-z96dtp'}">${validate_component(Atropos, 'Atropos').$$render(
					$$result,
					{ rotateTouch: 'scroll-y' },
					{},
					{
						default: () => {
							return `<div class="${'block__section svelte-z96dtp'}"><div class="${'section__svg svelte-z96dtp'}">${validate_component(
								SVG,
								'SVG'
							).$$render(
								$$result,
								{
									width: '120',
									height: '120',
									src: navigation,
									alt: 'navigation'
								},
								{},
								{}
							)}</div>
						<div class="${'section__text svelte-z96dtp'}"><h3 class="${'block__title base-text svelte-z96dtp'}">Prototyping</h3>
							<p class="${'block__text small-text svelte-z96dtp'}">Figma</p>
							<p class="${'block__text small-text svelte-z96dtp'}">Adobe XD</p>
							<p class="${'block__text small-text svelte-z96dtp'}">Sketch</p></div></div>`;
						}
					}
				)}

				${validate_component(Atropos, 'Atropos').$$render(
					$$result,
					{ rotateTouch: 'scroll-y' },
					{},
					{
						default: () => {
							return `<div class="${'block__section svelte-z96dtp'}"><div class="${'section__svg svelte-z96dtp'}">${validate_component(
								SVG,
								'SVG'
							).$$render(
								$$result,
								{
									width: '120',
									height: '120',
									src: graphicDesign,
									alt: 'graphic design'
								},
								{},
								{}
							)}</div>
						<div class="${'section__text svelte-z96dtp'}"><h3 class="${'block__title base-text svelte-z96dtp'}">Design</h3>
							<p class="${'block__text small-text svelte-z96dtp'}">Illustrator</p>
							<p class="${'block__text small-text svelte-z96dtp'}">Photoshop</p>
							<p class="${'block__text small-text svelte-z96dtp'}">Canva</p></div></div>`;
						}
					}
				)}

				${validate_component(Atropos, 'Atropos').$$render(
					$$result,
					{ rotateTouch: 'scroll-y' },
					{},
					{
						default: () => {
							return `<div class="${'block__section svelte-z96dtp'}"><div class="${'section__svg svelte-z96dtp'}">${validate_component(
								SVG,
								'SVG'
							).$$render(
								$$result,
								{
									width: '120',
									height: '120',
									src: interactive,
									alt: 'interactive'
								},
								{},
								{}
							)}</div>
						<div class="${'section__text svelte-z96dtp'}"><h3 class="${'block__title base-text svelte-z96dtp'}">Motion</h3>
							<p class="${'block__text small-text svelte-z96dtp'}">Lottie</p>
							<p class="${'block__text small-text svelte-z96dtp'}">Three.js</p>
							<p class="${'block__text small-text svelte-z96dtp'}">CSS Animations</p></div></div>`;
						}
					}
				)}

				${validate_component(Atropos, 'Atropos').$$render(
					$$result,
					{ rotateTouch: 'scroll-y' },
					{},
					{
						default: () => {
							return `<div class="${'block__section svelte-z96dtp'}"><div class="${'section__svg svelte-z96dtp'}">${validate_component(
								SVG,
								'SVG'
							).$$render(
								$$result,
								{
									width: '120',
									height: '120',
									src: frontend,
									alt: 'frontend'
								},
								{},
								{}
							)}</div>
						<div class="${'section__text svelte-z96dtp'}"><h3 class="${'block__title base-text svelte-z96dtp'}">Frontend</h3>
							<p class="${'block__text small-text svelte-z96dtp'}">HTML, CSS, JS</p>
							<p class="${'block__text small-text svelte-z96dtp'}">Bootstrap, Material</p>
							<p class="${'block__text small-text svelte-z96dtp'}">React, SvelteKit</p></div></div>`;
						}
					}
				)}</div></div></section>`;
			}
		}
	)}`;
});
const AboutMe_svelte_svelte_type_style_lang = '';
const css = {
	code: '.about.svelte-ahnk3g{align-items:flex-start;flex-direction:column;justify-content:center}.about.svelte-ahnk3g,.about__block.svelte-ahnk3g{display:flex;width:100%}.about__block.svelte-ahnk3g{align-items:center;flex-direction:row;flex-wrap:wrap}.block__title.svelte-ahnk3g{color:var(--text-color);font-weight:600}.desc.svelte-ahnk3g{display:flex;flex-direction:column;gap:var(--space-l);max-width:var(--text-width)}.block__text.svelte-ahnk3g{color:var(--text-color-low);font-weight:400}.block.svelte-ahnk3g{display:flex;flex-direction:column;gap:var(--space-xs)}',
	map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `${validate_component(SaosContainer, 'SaosContainer').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `<section><div class="${'about svelte-ahnk3g'}">${validate_component(
					HomeSectionTitle,
					'HomeSectionTitle'
				).$$render($$result, { title: 'About me' }, {}, {})}
			<div class="${'about__block svelte-ahnk3g'}"><div class="${'desc svelte-ahnk3g'}"><div class="${'block svelte-ahnk3g'}"><div class="${'block__title base-text svelte-ahnk3g'}">Education &amp; Background</div>
						<div class="${'block__text small-text svelte-ahnk3g'}">I spent about a year working as a full-stack developer, but eventually I found my true
							passion in UI/UX design. I&#39;m currently focusing on UX design, which involves finding
							ways to make the user experience better through research, flow development, and
							wireframing. It&#39;s really rewarding to be able to use my skills to solve problems and
							improve people&#39;s experiences.
						</div></div>
					<div class="${'block svelte-ahnk3g'}"><div class="${'block__title base-text svelte-ahnk3g'}">Thought Process</div>
						<div class="${'block__text small-text svelte-ahnk3g'}">I use industry guidelines and proven UX frameworks to tackle unique project
							challenges. The process includes discovery, prototyping, and user testing while
							collaborating with stakeholders to achieve successful outcomes.
						</div></div></div></div></div></section>`;
			}
		}
	)}`;
});
let title = 'Home';
let metadescription = 'Nguyen Dang Khoa - UI UX Designer + Web Developer. Personal Portfolio.';
const featuredImageAlt = 'Nguyen Dang Khoa - UI UX Designer + Web Developer';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const { author, siteUrl } = website;
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'HomePage'
	};
	const ogImage = { url: ogImageSrc, alt: featuredImageAlt };
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt
	};
	const twitterImage = {
		url: twitterImageSrc,
		alt: featuredImageAlt
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2077-07-07T14:19:33.000+0100',
		lastUpdated: '2077-07-07T14:19:33.000+0100',
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
	return `

${validate_component(SEO, 'SEO').$$render($$result, Object.assign({}, seoProps), {}, {})}
${validate_component(Featured, 'FeaturedProject').$$render($$result, {}, {}, {})}
${validate_component(MyClients, 'Clients').$$render($$result, {}, {}, {})}

${validate_component(MyTools, 'ToolUsed').$$render($$result, {}, {}, {})}
${validate_component(AboutMe, 'AboutMe').$$render($$result, {}, {}, {})}`;
});
export { Page as default };
