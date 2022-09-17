import { c as create_ssr_component, b as add_attribute, h as escape, v as validate_component } from "../../../chunks/index.js";
import { F as Figma_logo } from "../../../chunks/figma-logo.js";
import { B as ButtonWithIcon } from "../../../chunks/ButtonWithIcon.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".description-section.svelte-1mboiio{display:flex;flex-direction:row;gap:var(--space-xs)}.section-title.svelte-1mboiio{min-width:20%;font-weight:500;color:var(--accent-700)}.section-info.svelte-1mboiio{text-align:left;margin-right:auto}.project.svelte-1mboiio{width:100%;max-width:80rem;display:flex;flex-direction:column;background-color:var(--neutral-200);color:var(--text);margin-bottom:var(--space-l);box-shadow:var(--box-shadow);border-radius:var(--border-radius);border:var(--border);overflow:hidden}.project__btn.svelte-1mboiio{margin-top:auto;display:flex;justify-content:left}.btn-view.svelte-1mboiio{background-color:var(--primary-500);color:var(--neutral-900);margin-right:var(--space-s)}.btn-view.svelte-1mboiio:hover{background-color:var(--primary-600)}.project.svelte-1mboiio:hover{box-shadow:var(--box-shadow-hover)}.project__thumbnail.svelte-1mboiio{width:100%;height:auto}.project__info.svelte-1mboiio{display:flex;flex-direction:column;padding:var(--space-m)}.project__name.svelte-1mboiio{font-weight:600;color:var(--neutral-900);margin-bottom:var(--space-xs)}.project__description.svelte-1mboiio{color:var(--neutral-800);font-weight:400;margin-bottom:var(--space-s)}@media(min-width: 992px){.project__thumbnail.svelte-1mboiio{width:60%;height:auto}.project__info.svelte-1mboiio{width:40%}.project.svelte-1mboiio{flex-direction:row}}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectName = "PlaceholderProjectName" } = $$props;
  let { projectImage = "https://fakeimg.pl/500x500" } = $$props;
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
  return `<div class="${"project svelte-1mboiio"}"><img width="${"100%"}" height="${"auto"}" loading="${"lazy"}" decoding="${"async"}" class="${"project__thumbnail svelte-1mboiio"}"${add_attribute("src", projectImage, 0)} alt="${"project thumbnail"}">
	<div class="${"project__info svelte-1mboiio"}"><div class="${"project__name mid-text svelte-1mboiio"}">${escape(projectName)}</div>
		<div class="${"project__description small-text svelte-1mboiio"}"><div class="${"description-section svelte-1mboiio"}"><p class="${"section-title svelte-1mboiio"}">What</p>
				<p class="${"section-info svelte-1mboiio"}">${escape(what)}</p></div>

			<div class="${"description-section svelte-1mboiio"}"><p class="${"section-title svelte-1mboiio"}">Who</p>
				<p class="${"section-info svelte-1mboiio"}">${escape(who)}</p></div>

			<div class="${"description-section svelte-1mboiio"}"><p class="${"section-title svelte-1mboiio"}">Result</p>
				<p class="${"section-info svelte-1mboiio"}">${escape(result)}</p></div></div>

		<div class="${"project__btn svelte-1mboiio"}"><a sveltekit:prefetch class="${"btn btn-view svelte-1mboiio"}"${add_attribute("href", linkToDetail, 0)}>Read</a>

			<a${add_attribute("href", linkToFigma, 0)}>${validate_component(ButtonWithIcon, "ButtonWithIcon").$$render(
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
const RezaThumbnail = "/_app/immutable/assets/reza-thumbnail-637b8ea1.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Project</title>`, ""}`, ""}

${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "UI + UX" }, {}, {
    default: () => {
      return `${validate_component(Figma_logo, "FigmaLogo").$$render(
        $$result,
        {
          color: "var(--primary-600)",
          width: "32",
          height: "32"
        },
        {},
        {}
      )}`;
    }
  })}

<div class="${"projects"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Reza",
      projectImage: RezaThumbnail,
      linkToFigma: "https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App",
      linkToDetail: "/project/reza",
      what: "Reza is a restaurant reservation app",
      who: "People who want to reserve a restaurant table online",
      result: "Persona, User Flow, Wireframe, Prototype, Presentation slides"
    },
    {},
    {}
  )}

	</div>`;
});
export {
  Page as default
};
