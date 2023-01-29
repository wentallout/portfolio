import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as Linkedin_logo, P as Phone, E as Envelope } from "./linkedin-logo.js";
import { E as ExLink } from "./ExLink.js";
const SocialButtons_svelte_svelte_type_style_lang = "";
const css = {
  code: ".social-links.svelte-9taofn{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s)}",
  map: null
};
const SocialButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"social-links svelte-9taofn"}">${validate_component(ExLink, "ExLink").$$render(
    $$result,
    {
      href: "https://www.linkedin.com/in/wentallout/"
    },
    {},
    {
      default: () => {
        return `${validate_component(Linkedin_logo, "LinkedinLogo").$$render(
          $$result,
          {
            class: "icon",
            height: "32",
            width: "32",
            color: "var(--text-color)"
          },
          {},
          {}
        )}`;
      }
    }
  )}
	${validate_component(ExLink, "ExLink").$$render($$result, { href: "tel:+84929066331" }, {}, {
    default: () => {
      return `${validate_component(Phone, "Phone").$$render(
        $$result,
        {
          class: "icon",
          height: "32",
          width: "32",
          color: "var(--text-color)"
        },
        {},
        {}
      )}`;
    }
  })}
	${validate_component(ExLink, "ExLink").$$render($$result, { href: "mailto:wentallout@gmail.com" }, {}, {
    default: () => {
      return `${validate_component(Envelope, "Envelope").$$render(
        $$result,
        {
          class: "icon",
          height: "32",
          width: "32",
          color: "var(--text-color)"
        },
        {},
        {}
      )}`;
    }
  })}
</div>`;
});
export {
  SocialButtons as S
};
