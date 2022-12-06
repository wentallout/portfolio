import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { P as PageTitle } from "../../../chunks/PageTitle.js";
import { B as Brain } from "../../../chunks/brain.js";
import { P as ProjectCard, R as RezaPhoneAtropos } from "../../../chunks/ProjectCard.js";
import { F as Figma_logo } from "../../../chunks/figma-logo.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects.svelte-1s33b02{display:flex;flex-direction:column;flex-wrap:wrap;gap:var(--space-xl);width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-12kggbn_START -->${$$result.title = `<title>Project</title>`, ""}<!-- HEAD_svelte-12kggbn_END -->`, ""}

${validate_component(PageTitle, "PageTitle").$$render($$result, { pageTitle: "Project" }, {}, {})}

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Case Study" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Brain, "Brain").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

	<div class="${"projects svelte-1s33b02"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Reza - Restaurant Reservation App",
      linkToDetail: "project/reza",
      what: "Reza is an app that lets people book restaurant tables easily.",
      who: "Age 18-30, busy office workers or tourists visiting a new city.",
      result: "Persona, User Flow, Wireframe, Prototype"
    },
    {},
    {
      default: () => {
        return `${validate_component(RezaPhoneAtropos, "RezaPhoneAtropos").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</div></section>

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
