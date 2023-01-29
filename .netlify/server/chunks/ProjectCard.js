import { c as create_ssr_component, l as compute_rest_props, p as createEventDispatcher, o as onDestroy, e as spread, q as escape_attribute_value, f as escape_object, d as add_attribute, v as validate_component, h as escape } from "./index3.js";
import { B as Button } from "./Button.js";
import { F as Figma_logo } from "./figma-logo.js";
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
const rezaPhoneFrame = "/_app/immutable/assets/rezaPhoneFrame-f61992a2.webp";
const rezaSplat = "/_app/immutable/assets/rezaSplat-8323f1b6.svg";
const RezaPhoneAtropos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".reza-phone.svelte-1vzv2ka{overflow:hidden;width:100%}.frame.svelte-1vzv2ka,.reza-phone.svelte-1vzv2ka{height:100%;position:relative}.frame.svelte-1vzv2ka{align-items:center;background:radial-gradient(circle,var(--neutral-300) 10%,transparent 11%);background-size:3em 3em;display:flex;flex-direction:row;justify-content:space-evenly;opacity:1;z-index:-2}.reza-text.svelte-1vzv2ka{color:#e4543b;font-size:200px;font-weight:600;left:0;position:absolute;text-orientation:sideways;top:0;writing-mode:vertical-rl;z-index:-3}.frame__image.svelte-1vzv2ka{height:406px;width:auto}.splat.svelte-1vzv2ka{height:400px;left:183px;opacity:.8;position:absolute;top:-62px;width:400px;z-index:-1}",
  map: null
};
const RezaPhoneAtropos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Atropos, "Atropos").$$render(
    $$result,
    {
      class: "my-atropos",
      shadow: "false",
      eventsEl: ".project",
      rotateXMax: 20,
      rotateYMax: 20,
      stretchX: 0,
      stretchZ: 5,
      rotateTouch: "scroll-y"
    },
    {},
    {
      default: () => {
        return `<div class="${"reza-phone svelte-1vzv2ka"}"><div class="${"frame svelte-1vzv2ka"}"><img data-atropos-offset="${"5"}" class="${"frame__image svelte-1vzv2ka"}"${add_attribute("src", rezaPhoneFrame, 0)} alt="${"reza homepage"}">
			<img data-atropos-offset="${"3"}" class="${"splat svelte-1vzv2ka"}"${add_attribute("src", rezaSplat, 0)} alt="${"reza splat"}">
			<div data-atropos-offset="${"-3"}" class="${"reza-text svelte-1vzv2ka"}">reza</div></div></div>`;
      }
    }
  )}`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project.svelte-1pi5reu{background-color:var(--bg);border-radius:var(--border-radius-light);display:flex;flex-direction:column;overflow-y:hidden;width:100%}.project__thumbnail.svelte-1pi5reu{height:auto;overflow:hidden;width:100%}.info__project-name.svelte-1pi5reu{color:var(--primary-500);font-weight:600;line-height:normal;margin-bottom:var(--space-m)}.project__info.svelte-1pi5reu{padding:var(--space-l) var(--space-xl)}.info__section.svelte-1pi5reu{display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:var(--space-s)}.info__title.svelte-1pi5reu{font-weight:400;height:60px;margin-right:auto;max-width:200px;width:-moz-fit-content;width:fit-content}.info__description.svelte-1pi5reu{color:var(--text-color-low);display:flex;margin-left:var(--space-s);width:70%}.info__btn.svelte-1pi5reu{--min:15ch;--gap:1rem;grid-gap:var(--gap);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--min)),1fr));margin-top:var(--space-m)}.btn__anchor.svelte-1pi5reu{width:100%}@media(min-width:992px){.project.svelte-1pi5reu{flex-direction:row}.project__thumbnail.svelte-1pi5reu{width:40%}.project__info.svelte-1pi5reu{width:60%}}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { linkToDetail = "" } = $$props;
  let { linkToFigma = "" } = $$props;
  let { projectName = "" } = $$props;
  let { what = "" } = $$props;
  let { who = "" } = $$props;
  let { result = "" } = $$props;
  if ($$props.linkToDetail === void 0 && $$bindings.linkToDetail && linkToDetail !== void 0)
    $$bindings.linkToDetail(linkToDetail);
  if ($$props.linkToFigma === void 0 && $$bindings.linkToFigma && linkToFigma !== void 0)
    $$bindings.linkToFigma(linkToFigma);
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.what === void 0 && $$bindings.what && what !== void 0)
    $$bindings.what(what);
  if ($$props.who === void 0 && $$bindings.who && who !== void 0)
    $$bindings.who(who);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0)
    $$bindings.result(result);
  $$result.css.add(css);
  return `<div class="${"project svelte-1pi5reu"}"><div class="${"project__thumbnail svelte-1pi5reu"}">${slots.default ? slots.default({}) : ``}</div>

	<div class="${"project__info svelte-1pi5reu"}"><div class="${"info__project-name large-text svelte-1pi5reu"}">${escape(projectName)}</div>

		<div class="${"info__section small-text svelte-1pi5reu"}"><div class="${"info__title svelte-1pi5reu"}">What</div>
			<div class="${"info__description svelte-1pi5reu"}">${escape(what)}</div></div>

		<div class="${"info__section small-text svelte-1pi5reu"}"><div class="${"info__title svelte-1pi5reu"}">Who</div>
			<div class="${"info__description svelte-1pi5reu"}">${escape(who)}</div></div>

		<div class="${"info__section small-text svelte-1pi5reu"}"><div class="${"info__title svelte-1pi5reu"}">Result</div>
			<div class="${"info__description svelte-1pi5reu"}">${escape(result)}</div></div>

		<div class="${"info__btn svelte-1pi5reu"}"><a class="${"btn__anchor svelte-1pi5reu"}"${add_attribute("href", linkToDetail, 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Read",
      border: "1px solid var(--primary-500)",
      backgroundColor: "var(--primary-500)",
      labelColor: "var(--black)"
    },
    {},
    {}
  )}</a>

			<a class="${"btn__anchor svelte-1pi5reu"}" rel="${"external noreferrer noopener"}" target="${"_blank"}"${add_attribute("href", linkToFigma, 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      labelColor: "var(--text-color)",
      label: "Figma",
      border: "1px solid var(--text-color)"
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
export {
  ProjectCard as P,
  RezaPhoneAtropos as R
};
