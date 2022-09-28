import { c as create_ssr_component, b as add_attribute, g as escape, v as validate_component } from "../../../chunks/index.js";
import { F as Figma_logo } from "../../../chunks/figma-logo.js";
import { B as Button } from "../../../chunks/Button.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
import { t as thumbnail } from "../../../chunks/thumbnail.js";
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".description-section.svelte-bbxxfl{display:flex;flex-direction:row;gap:var(--space-xs)}.section-title.svelte-bbxxfl{min-width:30%;font-weight:500;color:var(--accent-900)}.section-info.svelte-bbxxfl{text-align:left;margin-right:auto}.project.svelte-bbxxfl{width:100%;max-width:80rem;display:flex;flex-direction:column;background-color:var(--neutral-200);color:var(--text);margin-bottom:var(--space-l);box-shadow:var(--box-shadow);border-radius:var(--border-radius);border:var(--border);overflow:hidden}.project__btn.svelte-bbxxfl{margin-top:auto;display:flex;flex-wrap:wrap;justify-content:left;gap:var(--space-xs)}.project.svelte-bbxxfl:hover{box-shadow:var(--box-shadow-hover)}.project__thumbnail.svelte-bbxxfl{width:100%;height:auto}.project__info.svelte-bbxxfl{display:flex;flex-direction:column;padding:var(--space-m)}.project__name.svelte-bbxxfl{font-weight:600;color:var(--neutral-900);margin-bottom:var(--space-xs)}.project__description.svelte-bbxxfl{color:var(--neutral-800);font-weight:400;margin-bottom:var(--space-s)}@media(min-width: 992px){.project__thumbnail.svelte-bbxxfl{width:60%;height:auto}.project__info.svelte-bbxxfl{width:40%}.project.svelte-bbxxfl{flex-direction:row}}",
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
  return `<div class="${"project svelte-bbxxfl"}"><img width="${"100%"}" height="${"auto"}" loading="${"lazy"}" decoding="${"async"}" class="${"project__thumbnail svelte-bbxxfl"}"${add_attribute("src", projectImage, 0)} alt="${"project thumbnail"}">
	<div class="${"project__info svelte-bbxxfl"}"><div class="${"project__name mid-text svelte-bbxxfl"}">${escape(projectName)}</div>
		<div class="${"project__description small-text svelte-bbxxfl"}"><div class="${"description-section svelte-bbxxfl"}"><p class="${"section-title svelte-bbxxfl"}">\u25C6 What</p>
				<p class="${"section-info svelte-bbxxfl"}">${escape(what)}</p></div>

			<div class="${"description-section svelte-bbxxfl"}"><p class="${"section-title svelte-bbxxfl"}">\u25C6 Who</p>
				<p class="${"section-info svelte-bbxxfl"}">${escape(who)}</p></div>

			<div class="${"description-section svelte-bbxxfl"}"><p class="${"section-title svelte-bbxxfl"}">\u25C6 Result</p>
				<p class="${"section-info svelte-bbxxfl"}">${escape(result)}</p></div></div>

		<div class="${"project__btn svelte-bbxxfl"}"><a sveltekit:prefetch${add_attribute("href", linkToDetail, 0)}>${validate_component(Button, "Button").$$render(
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Project</title>`, ""}`, ""}

${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "UI + UX" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Figma_logo, "FigmaLogo").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

<div class="${"projects"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Reza",
      projectImage: thumbnail,
      linkToFigma: "https://www.figma.com/proto/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=738%3A11894&scaling=contain&page-id=607%3A7637",
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
