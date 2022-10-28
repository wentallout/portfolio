import { c as create_ssr_component, e as spread, f as escape_object, l as compute_rest_props, p as createEventDispatcher, o as onDestroy, t as escape_attribute_value, d as add_attribute, v as validate_component, h as escape } from "../../../chunks/index.js";
import { F as Figma_logo } from "../../../chunks/figma-logo.js";
import { B as Button } from "../../../chunks/Button.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const Brain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M248 132a56 56 0 0 0-32-50.6V72a48 48 0 0 0-88-26.5A48 48 0 0 0 40 72v9.4a56 56 0 0 0 0 101.2v1.4a48 48 0 0 0 88 26.5a48 48 0 0 0 88-26.5v-1.4a56.1 56.1 0 0 0 32-50.6ZM88 216a32 32 0 0 1-31.8-28.6a49.3 49.3 0 0 0 7.8.6h8a8 8 0 0 0 0-16h-8a40 40 0 0 1-13.3-77.7a8.1 8.1 0 0 0 5.3-7.6V72a32 32 0 0 1 64 0v76.3A47.4 47.4 0 0 0 88 136a8 8 0 0 0 0 16a32 32 0 0 1 0 64Zm104-44h-8a8 8 0 0 0 0 16h8a49.3 49.3 0 0 0 7.8-.6A32 32 0 1 1 168 152a8 8 0 0 0 0-16a47.4 47.4 0 0 0-32 12.3V72a32 32 0 0 1 64 0v14.7a8.1 8.1 0 0 0 5.3 7.6A40 40 0 0 1 192 172ZM60 128a8 8 0 0 1 0-16a20.1 20.1 0 0 0 20-20v-8a8 8 0 0 1 16 0v8a36 36 0 0 1-36 36Zm144-8a8 8 0 0 1-8 8a36 36 0 0 1-36-36v-8a8 8 0 0 1 16 0v8a20.1 20.1 0 0 0 20 20a8 8 0 0 1 8 8Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Atropos_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "scaleClass",
    "rotateClass",
    "innerClass",
    "eventsEl",
    "alwaysActive",
    "activeOffset",
    "shadowOffset",
    "shadowScale",
    "duration",
    "rotate",
    "rotateTouch",
    "rotateXMax",
    "rotateYMax",
    "rotateXInvert",
    "rotateYInvert",
    "stretchX",
    "stretchY",
    "stretchZ",
    "commonOrigin",
    "shadow",
    "highlight"
  ]);
  let { class: className = "" } = $$props;
  let { scaleClass = "" } = $$props;
  let { rotateClass = "" } = $$props;
  let { innerClass = "" } = $$props;
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
    return args.filter((c) => !!c).join(" ");
  };
  onDestroy(() => {
  });
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
        class: escape_attribute_value(cls("atropos", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", elRef, 0)}><span${add_attribute("class", cls("atropos-scale", scaleClass), 0)}><span${add_attribute("class", cls("atropos-rotate", rotateClass), 0)}><span${add_attribute("class", cls("atropos-inner", innerClass), 0)}>${slots.default ? slots.default({}) : ``}
        ${highlight || typeof highlight === "undefined" ? `<span class="${"atropos-highlight"}"></span>` : ``}</span>
      ${slots.rotate ? slots.rotate({}) : ``}
      ${shadow || typeof shadow === "undefined" ? `<span class="${"atropos-shadow"}"></span>` : ``}</span>
    ${slots.scale ? slots.scale({}) : ``}</span>
  ${slots.root ? slots.root({}) : ``}</div>`;
});
const Atropos = Atropos_svelte;
const rezaPhoneFrame = "/_app/immutable/assets/rezaPhoneFrame-b3441282.webp";
const rezaSplat = "/_app/immutable/assets/rezaSplat-8323f1b6.svg";
const RezaPhoneAtropos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".reza-phone.svelte-s23xbl{background-color:transparent;overflow:hidden;width:100%}.frame.svelte-s23xbl,.reza-phone.svelte-s23xbl{height:100%;position:relative}.frame.svelte-s23xbl{align-items:center;background:transparent url(/images/dot.svg) repeat 0 0/20px;display:flex;flex-direction:row;justify-content:space-evenly}.reza-text.svelte-s23xbl{color:#e4543b;font-size:200px;font-weight:600;left:0;position:absolute;text-orientation:sideways;top:10px;writing-mode:vertical-rl;z-index:-3}.frame__image.svelte-s23xbl{height:406px;width:auto}.frame__image3.svelte-s23xbl{height:400px;opacity:.8;position:absolute;right:-83px;top:-62px;width:400px;z-index:-1}",
  map: null
};
const RezaPhoneAtropos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Atropos, "Atropos").$$render(
    $$result,
    {
      class: "my-atropos",
      shadow: "false",
      eventsEl: ".frame",
      rotateXMax: 20,
      rotateYMax: 20,
      stretchX: 0,
      stretchZ: 5,
      rotateTouch: "scroll-y"
    },
    {},
    {
      default: () => {
        return `<div class="${"reza-phone svelte-s23xbl"}"><div class="${"frame svelte-s23xbl"}"><img data-atropos-offset="${"5"}" class="${"frame__image svelte-s23xbl"}"${add_attribute("src", rezaPhoneFrame, 0)} alt="${"reza homepage"}">
			<img data-atropos-offset="${"3"}" class="${"frame__image3 svelte-s23xbl"}"${add_attribute("src", rezaSplat, 0)} alt="${"reza splat"}"></div>

		<div data-atropos-offset="${"-3"}" class="${"reza-text svelte-s23xbl"}">reza</div></div>`;
      }
    }
  )}`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".description-section.svelte-h7e60l{display:flex;flex-direction:row;gap:var(--space-xs)}.section-title.svelte-h7e60l{color:var(--primary-600);font-weight:500;min-width:30%}.section-info.svelte-h7e60l{margin-right:auto;text-align:left}.project.svelte-h7e60l{background-color:var(--bg);border-radius:var(--border-radius);box-shadow:var(--box-shadow);color:var(--text);display:flex;flex-direction:column;margin-bottom:var(--space-l);max-width:80rem;overflow:hidden;transition:.3s;width:100%}.project__btn.svelte-h7e60l{display:flex;flex-wrap:wrap;gap:var(--space-xs);justify-content:left;margin-top:auto}.project__thumbnail.svelte-h7e60l{height:100%;overflow:visible;width:100%}.project__info.svelte-h7e60l{display:flex;flex-direction:column;padding:var(--space-l)}.project__name.svelte-h7e60l{color:var(--text);font-weight:600;margin-bottom:var(--space-l)}.project__description.svelte-h7e60l{color:var(--neutral-800);display:flex;flex-direction:column;font-weight:400;gap:var(--space-s);margin-bottom:var(--space-s)}@media(min-width:992px){.project.svelte-h7e60l{flex-direction:row}.project__thumbnail.svelte-h7e60l{height:auto;width:60%}}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectName = "insert project name here" } = $$props;
  let { linkToDetail = "" } = $$props;
  let { linkToFigma = "" } = $$props;
  let { who = "" } = $$props;
  let { what = "" } = $$props;
  let { result = "" } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.linkToDetail === void 0 && $$bindings.linkToDetail && linkToDetail !== void 0)
    $$bindings.linkToDetail(linkToDetail);
  if ($$props.linkToFigma === void 0 && $$bindings.linkToFigma && linkToFigma !== void 0)
    $$bindings.linkToFigma(linkToFigma);
  if ($$props.who === void 0 && $$bindings.who && who !== void 0)
    $$bindings.who(who);
  if ($$props.what === void 0 && $$bindings.what && what !== void 0)
    $$bindings.what(what);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0)
    $$bindings.result(result);
  $$result.css.add(css);
  return `<div class="${"project svelte-h7e60l"}"><div class="${"project__thumbnail svelte-h7e60l"}">${slots.atropos ? slots.atropos({}) : ``}</div>
	<div class="${"project__info svelte-h7e60l"}"><div class="${"project__name large-text svelte-h7e60l"}">${escape(projectName)}</div>
		<div class="${"project__description small-text svelte-h7e60l"}"><div class="${"description-section svelte-h7e60l"}"><div class="${"section-title svelte-h7e60l"}">\u25C6 What</div>
				<div class="${"section-info svelte-h7e60l"}">${escape(what)}</div></div>

			<div class="${"description-section svelte-h7e60l"}"><div class="${"section-title svelte-h7e60l"}">\u25C6 Who</div>
				<div class="${"section-info svelte-h7e60l"}">${escape(who)}</div></div>

			<div class="${"description-section svelte-h7e60l"}"><div class="${"section-title svelte-h7e60l"}">\u25C6 Result</div>
				<div class="${"section-info svelte-h7e60l"}">${escape(result)}</div></div></div>

		<div class="${"project__btn svelte-h7e60l"}"><a${add_attribute("href", linkToDetail, 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Read",
      border: "1px solid var(--primary-500)",
      backgroundColor: "var(--primary-500)"
    },
    {},
    {}
  )}</a>

			<a rel="${"external noreferrer noopener"}" target="${"_blank"}"${add_attribute("href", linkToFigma, 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Figma",
      border: "1px solid var(--neutral-900)"
    },
    {},
    {
      default: () => {
        return `${validate_component(Figma_logo, "FigmaLogo").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</a></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-12kggbn_START -->${$$result.title = `<title>Project</title>`, ""}<!-- HEAD_svelte-12kggbn_END -->`, ""}

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Case Study" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Brain, "Brain").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

	<div class="${"projects"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Reza - Reservation App",
      linkToFigma: "https://www.figma.com/proto/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=738%3A11894&scaling=contain&page-id=607%3A7637",
      linkToDetail: "/project/reza",
      what: "Reza is an app that lets people book restaurant tables",
      who: "People who want to reserve a restaurant table online",
      result: "Persona, User Flow, Wireframe, Prototype, Presentation slides"
    },
    {},
    {
      atropos: () => {
        return `<span slot="${"atropos"}">${validate_component(RezaPhoneAtropos, "RezaPhoneAtropos").$$render($$result, {}, {}, {})}</span>`;
      }
    }
  )}

		</div></section>

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "UI" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Figma_logo, "FigmaLogo").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}
</section>`;
});
export {
  Page as default
};
