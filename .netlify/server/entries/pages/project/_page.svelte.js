import { c as create_ssr_component, d as spread, e as escape_object, v as validate_component, b as add_attribute, g as escape } from "../../../chunks/index.js";
import { A as Atropos } from "../../../chunks/atropos-svelte.js";
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
const rezaPhoneFrame = "/_app/immutable/assets/rezaPhoneFrame-b3441282.webp";
const rezaWireframe = "/_app/immutable/assets/rezaWireframe-e1efb416.webp";
const RezaPhoneAtropos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".frame.svelte-169ymer{display:flex;justify-content:space-evenly;align-items:center;flex-direction:row;position:relative}.reza-text.svelte-169ymer{z-index:-3;position:absolute;font-size:200px;font-weight:600;top:0;left:-10%;color:#e4543b;writing-mode:vertical-rl;text-orientation:sideways}.frame__image.svelte-169ymer{width:auto;max-height:406px}.frame__image2.svelte-169ymer{z-index:-1;top:0;right:15%;max-height:406px;width:auto;position:absolute}",
  map: null
};
const RezaPhoneAtropos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Atropos, "Atropos").$$render(
    $$result,
    {
      class: "reza-phone",
      shadow: false,
      eventsEl: "body",
      rotateXMax: 20,
      rotateYMax: 20,
      stretchX: 0,
      stretchZ: 5,
      rotateTouch: "scroll-y"
    },
    {},
    {
      default: () => {
        return `<div class="${"frame svelte-169ymer"}"><img data-atropos-offset="${"5"}" class="${"frame__image svelte-169ymer"}"${add_attribute("src", rezaPhoneFrame, 0)} alt="${""}">
		<img data-atropos-offset="${"3"}" data-atropos-opacity="${"0.5;1"}" class="${"frame__image2 svelte-169ymer"}"${add_attribute("src", rezaWireframe, 0)} alt="${""}"></div>

	<div data-atropos-offset="${"-3"}" class="${"reza-text svelte-169ymer"}">reza</div>`;
      }
    }
  )}`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".description-section.svelte-1c1rqf7{display:flex;flex-direction:row;gap:var(--space-xs)}.section-title.svelte-1c1rqf7{min-width:30%;font-weight:500;color:var(--accent-900)}.section-info.svelte-1c1rqf7{text-align:left;margin-right:auto}.project.svelte-1c1rqf7{width:100%;max-width:80rem;display:flex;flex-direction:column;background-color:var(--neutral-200);backdrop-filter:blur(5px);color:var(--neutral-900);margin-bottom:var(--space-l);box-shadow:var(--box-shadow);border-radius:var(--border-radius);border:var(--border);overflow:hidden}.project__btn.svelte-1c1rqf7{margin-top:auto;display:flex;flex-wrap:wrap;justify-content:left;gap:var(--space-xs)}.project.svelte-1c1rqf7:hover{box-shadow:var(--box-shadow-hover)}.project__thumbnail.svelte-1c1rqf7{background:transparent url('/images/dot.svg') repeat left top/20px;width:100%;overflow:hidden;height:100%}.project__info.svelte-1c1rqf7{display:flex;flex-direction:column;padding:var(--space-m)}.project__name.svelte-1c1rqf7{font-weight:600;color:var(--neutral-900);margin-bottom:var(--space-xs)}.project__description.svelte-1c1rqf7{color:var(--neutral-800);font-weight:400;margin-bottom:var(--space-s)}@media(min-width: 992px){.project.svelte-1c1rqf7{flex-direction:row}.project__thumbnail.svelte-1c1rqf7{width:60%;height:auto}}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectName = "PlaceholderProjectName" } = $$props;
  let { projectImage } = $$props;
  let { linkToDetail = "" } = $$props;
  let { linkToFigma = "" } = $$props;
  let { who = "" } = $$props;
  let { what = "" } = $$props;
  let { result = "" } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.projectImage === void 0 && $$bindings.projectImage && projectImage !== void 0)
    $$bindings.projectImage(projectImage);
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
  return `<div class="${"project svelte-1c1rqf7"}"><div class="${"project__thumbnail svelte-1c1rqf7"}">

		${slots.atropos ? slots.atropos({}) : ``}</div>
	<div class="${"project__info svelte-1c1rqf7"}"><div class="${"project__name mid-text svelte-1c1rqf7"}">${escape(projectName)}</div>
		<div class="${"project__description small-text svelte-1c1rqf7"}"><div class="${"description-section svelte-1c1rqf7"}"><p class="${"section-title svelte-1c1rqf7"}">\u25C6 What</p>
				<p class="${"section-info svelte-1c1rqf7"}">${escape(what)}</p></div>

			<div class="${"description-section svelte-1c1rqf7"}"><p class="${"section-title svelte-1c1rqf7"}">\u25C6 Who</p>
				<p class="${"section-info svelte-1c1rqf7"}">${escape(who)}</p></div>

			<div class="${"description-section svelte-1c1rqf7"}"><p class="${"section-title svelte-1c1rqf7"}">\u25C6 Result</p>
				<p class="${"section-info svelte-1c1rqf7"}">${escape(result)}</p></div></div>

		<div class="${"project__btn svelte-1c1rqf7"}"><a sveltekit:prefetch${add_attribute("href", linkToDetail, 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Read",
      border: "1px solid var(--primary-500)",
      backgroundColor: "var(--primary-500)"
    },
    {},
    {}
  )}</a>

			<a target="${"_blank"}"${add_attribute("href", linkToFigma, 0)}>${validate_component(Button, "Button").$$render(
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
const rezaThumbnail = "/_app/immutable/assets/thumbnail-4f6fd77f.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Project</title>`, ""}`, ""}

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Case Study" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Brain, "Brain").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

	<div class="${"projects"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Reza",
      projectImage: rezaThumbnail,
      linkToFigma: "https://www.figma.com/proto/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=738%3A11894&scaling=contain&page-id=607%3A7637",
      linkToDetail: "/project/reza",
      what: "Reza is a restaurant reservation app",
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
  })}</section>`;
});
export {
  Page as default
};
