import { c as create_ssr_component, v as validate_component, d as add_attribute, h as escape, b as subscribe, o as onDestroy } from "../../chunks/index3.js";
import { S as SocialButtons } from "../../chunks/SocialButtons.js";
import { E as ExLink } from "../../chunks/ExLink.js";
import { P as ProjectCard, R as RezaPhoneAtropos } from "../../chunks/ProjectCard.js";
import { I as Image } from "../../chunks/Image.js";
import { D as DirectionalLight$1, u as useThrelte, a as useFrame, O as Object3D, S as SceneGraphObject, T as TransformableObject, b as DisposableObject, L as LightInstance, c as useThrelteRoot, F as Fog$1, d as convertColorRepresentationToColor, C as Canvas, P as PerspectiveCamera, e as OrbitControls, G as GLTF } from "../../chunks/GLTF.js";
import { S as SEO, f as featuredImageSrc, o as ogImageSrc, a as ogSquareImageSrc, t as twitterImageSrc } from "../../chunks/SEO.js";
import { w as website } from "../../chunks/config.js";
const Name_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.container.svelte-wb9i3y{align-items:center;display:flex;flex-direction:column;justify-content:center;position:relative;width:100%}@media(min-width:768px){.container.svelte-wb9i3y{background-image:url(/images/wall.svg);background-position:top;background-repeat:repeat}}.container.svelte-wb9i3y:before{background:linear-gradient(0deg,var(--page-bg) 0,hsla(0,0%,7%,.5) 12%,hsla(0,0%,7%,.1) 30%,hsla(0,0%,7%,0) 40%);bottom:0;content:"";left:0;position:absolute;right:0;top:0}.text.svelte-wb9i3y{background-color:var(--page-bg);display:flex;flex-direction:column;flex-wrap:wrap;gap:var(--space-3xs);max-width:100%;padding:var(--space-m);width:-moz-max-content;width:max-content}@keyframes svelte-wb9i3y-float{0%,to{transform:translateY(0)}50%{transform:translateY(-3%)}}@keyframes svelte-wb9i3y-background-pan{0%{background-position:1000%}to{background-position:0}}.line.svelte-wb9i3y{display:flex;flex-wrap:wrap;gap:var(--space-m);justify-content:space-between}.word.svelte-wb9i3y{color:var(--text-color);font-size:var(--font-size-2xl);font-weight:600;margin:0;text-transform:uppercase;transition:opacity .25s ease}.fancy.svelte-wb9i3y:hover{color:var(--primary-500)}',
  map: null
};
const Name = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkEle;
  $$result.css.add(css$5);
  return `<section class="${"container svelte-wb9i3y"}"><div class="${"text svelte-wb9i3y"}"><div style="${"margin-bottom:var(--space-m)"}" class="${"line svelte-wb9i3y"}">${validate_component(SocialButtons, "SocialButtons").$$render($$result, {}, {}, {})}</div>
		<div contenteditable="${"true"}" class="${"line svelte-wb9i3y"}"><div class="${"word rainbow svelte-wb9i3y"}">Dang</div>
			<div class="${"word rainbow svelte-wb9i3y"}">Khoa</div></div>
		<div class="${"line svelte-wb9i3y"}"><div class="${"word svelte-wb9i3y"}">UI/UX</div>
			<div class="${"word svelte-wb9i3y"}">Dev</div></div>

		<div class="${"line svelte-wb9i3y"}">${validate_component(ExLink, "ExLink").$$render(
    $$result,
    {
      href: "https://www.linkedin.com/in/wentallout/"
    },
    {},
    {
      default: () => {
        return `<div id="${"channel-link"}" class="${"word fancy svelte-wb9i3y"}"${add_attribute("this", linkEle, 0)}>→Resume</div>`;
      }
    }
  )}</div></div>
</section>`;
});
const Featured_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".featured.svelte-7r6beb{display:flex;flex-direction:column;gap:var(--space-m)}.featured__title.svelte-7r6beb{font-family:var(--fancy-font);width:-moz-fit-content;width:fit-content}.title__section.svelte-7r6beb{align-items:center;display:flex;flex-direction:row;justify-content:space-between;width:100%}.title__see.svelte-7r6beb{color:var(--accent-500)}",
  map: null
};
const Featured = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section><div class="${"featured svelte-7r6beb"}"><div class="${"title__section svelte-7r6beb"}"><h2 class="${"featured__title xl-text rainbow svelte-7r6beb"}">Featured</h2>
			<a href="${"/project"}"><div class="${"title__see small-text svelte-7r6beb"}">See all</div></a></div>
		<div class="${"projects"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Reza - Restaurant Reservation App",
      linkToDetail: "project/reza",
      linkToFigma: "https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=2%3A9&t=a8W16CMSWgxzoLKB-1",
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
  )}</div></div>
</section>`;
});
const fpt = "/_app/immutable/assets/fpt-3c33bfe5.webp";
const nashtech = "/_app/immutable/assets/nashtech-93cf1358.webp";
const MyClients_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".clients.svelte-1eftbpk{align-items:flex-start;flex-direction:column;width:100%}.clients.svelte-1eftbpk,.clients__logo.svelte-1eftbpk{display:flex;gap:var(--space-m);justify-content:center}.clients__logo.svelte-1eftbpk{align-items:center;flex-direction:row;flex-wrap:wrap}.clients__title.svelte-1eftbpk{color:var(--primary-500);font-family:var(--fancy-font);font-weight:600}.logo.svelte-1eftbpk{aspect-ratio:1/1;filter:grayscale();height:100px;transition:var(--transition);width:100px}.logo.svelte-1eftbpk:hover{filter:none}",
  map: null
};
const MyClients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section><div class="${"clients svelte-1eftbpk"}"><h2 class="${"clients__title xl-text svelte-1eftbpk"}">I have worked for</h2>
		<div class="${"clients__logo svelte-1eftbpk"}">${validate_component(ExLink, "ExLink").$$render($$result, { href: "https://www.fpt-software.com" }, {}, {
    default: () => {
      return `<img class="${"logo svelte-1eftbpk"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", fpt, 0)} alt="${"FPT Software"}">`;
    }
  })}

			${validate_component(ExLink, "ExLink").$$render($$result, { href: "https://nashtechglobal.com" }, {}, {
    default: () => {
      return `<img class="${"logo svelte-1eftbpk"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", nashtech, 0)} alt="${"NashTech"}">`;
    }
  })}</div></div>
</section>`;
});
const frontend = "/_app/immutable/assets/frontend-8f9110d0.svg";
const navigation = "/_app/immutable/assets/navigation-54f2c665.svg";
const interactive = "/_app/immutable/assets/interactive-3178016c.svg";
const graphicDesign = "/_app/immutable/assets/graphicDesign-674b0dc6.svg";
const MyTools_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".block__section.svelte-bz9tif{background-color:var(--bg);border-radius:var(--border-radius-light);box-shadow:var(--box-shadow);padding:var(--space-l)}.block__section.svelte-bz9tif,.tool.svelte-bz9tif{align-items:flex-start;display:flex;flex-direction:column}.tool.svelte-bz9tif{gap:var(--space-m)}.tool.svelte-bz9tif,.tool__block.svelte-bz9tif{justify-content:center}.tool__block.svelte-bz9tif{--min:24ch;grid-gap:var(--space-s);align-content:center;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--min)),1fr));width:100%}.tool__title.svelte-bz9tif{color:var(--primary-500);font-family:var(--fancy-font)}.block__title.svelte-bz9tif{color:var(--text-color);font-weight:600;margin-bottom:var(--space-2xs);margin-top:var(--space-m)}.block__text.svelte-bz9tif{color:var(--text-color-low);font-weight:400;margin:0}",
  map: null
};
const MyTools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section><div class="${"tool svelte-bz9tif"}"><h2 class="${"tool__title xl-text svelte-bz9tif"}">Tools I use</h2>

		<div class="${"tool__block svelte-bz9tif"}"><div class="${"block__section svelte-bz9tif"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      hasCaption: false,
      width: "50",
      height: "50",
      src: navigation,
      alt: "navigation"
    },
    {},
    {}
  )}
				<h3 class="${"block__title base-text svelte-bz9tif"}">Prototyping</h3>
				<p class="${"block__text small-text svelte-bz9tif"}">Figma</p>
				<p class="${"block__text small-text svelte-bz9tif"}">Adobe XD</p>
				<p class="${"block__text small-text svelte-bz9tif"}">Sketch</p></div>

			<div class="${"block__section svelte-bz9tif"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      hasCaption: false,
      width: "50",
      height: "50",
      src: graphicDesign,
      alt: "graphic design"
    },
    {},
    {}
  )}
				<h3 class="${"block__title base-text svelte-bz9tif"}">Design</h3>
				<p class="${"block__text small-text svelte-bz9tif"}">Illustrator</p>
				<p class="${"block__text small-text svelte-bz9tif"}">Photoshop</p></div>

			<div class="${"block__section svelte-bz9tif"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      hasCaption: false,
      width: "50",
      height: "50",
      src: interactive,
      alt: "interactive"
    },
    {},
    {}
  )}
				<h3 class="${"block__title base-text svelte-bz9tif"}">Motion</h3>
				<p class="${"block__text small-text svelte-bz9tif"}">Lottie</p>
				
				<p class="${"block__text small-text svelte-bz9tif"}">CSS Animations</p></div>

			<div class="${"block__section svelte-bz9tif"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      hasCaption: false,
      width: "50",
      height: "50",
      src: frontend,
      alt: "frontend"
    },
    {},
    {}
  )}
				<h3 class="${"block__title base-text svelte-bz9tif"}">Frontend</h3>
				<p class="${"block__text small-text svelte-bz9tif"}">Semantic HTML, BEM CSS</p>
				<p class="${"block__text small-text svelte-bz9tif"}">Bootstrap, Material</p>
				<p class="${"block__text small-text svelte-bz9tif"}">JS, React, SvelteKit</p></div></div></div>
</section>`;
});
const HomeSectionTitle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".home-section.svelte-1aobve9{color:var(--primary-500);font-family:var(--fancy-font)}",
  map: null
};
const HomeSectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 = "" } = $$props;
  let { extraClass = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.extraClass === void 0 && $$bindings.extraClass && extraClass !== void 0)
    $$bindings.extraClass(extraClass);
  $$result.css.add(css$1);
  return `<h2 class="${"home-section xl-text " + escape(extraClass, true) + " svelte-1aobve9"}">${escape(title2)}</h2>`;
});
const DirectionalLight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $started, $$unsubscribe_started;
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  let { userData = void 0 } = $$props;
  let { dispose = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { color = void 0 } = $$props;
  let { intensity = void 0 } = $$props;
  let { shadow = void 0 } = $$props;
  let { target = void 0 } = $$props;
  const light = new DirectionalLight$1(color, intensity);
  const { invalidate } = useThrelte();
  const originalTarget = light.target;
  const { start, stop, started } = useFrame(
    () => {
    },
    {
      autostart: false,
      debugFrameloopMessage: "DirectionalLight: tracking target"
    }
  );
  $$unsubscribe_started = subscribe(started, (value) => $started = value);
  const updateLightTarget = (target2) => {
    if (target2 && target2 instanceof Object3D && !$started) {
      light.target = target2;
      start();
      invalidate("DirectionalLight: target changed");
    } else if ((!target2 || !(target2 instanceof Object3D)) && $started) {
      light.target = originalTarget;
      stop();
      invalidate("DirectionalLight: target changed");
    }
  };
  const updateLightShadow = (shadow2) => {
    if (shadow2) {
      const { mapSize = [512, 512], camera: { left = -5, bottom = -5, right = 5, top = 5, near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow2 === true ? {} : shadow2;
      light.shadow.mapSize.set(mapSize[0], mapSize[1]);
      light.shadow.camera.left = left;
      light.shadow.camera.top = top;
      light.shadow.camera.right = right;
      light.shadow.camera.bottom = bottom;
      light.shadow.camera.near = near;
      light.shadow.camera.far = far;
      light.shadow.bias = bias;
      light.shadow.radius = radius;
    }
    invalidate("DirectionalLight: shadow changed");
  };
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.userData === void 0 && $$bindings.userData && userData !== void 0)
    $$bindings.userData(userData);
  if ($$props.dispose === void 0 && $$bindings.dispose && dispose !== void 0)
    $$bindings.dispose(dispose);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.intensity === void 0 && $$bindings.intensity && intensity !== void 0)
    $$bindings.intensity(intensity);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      updateLightTarget(target);
    }
    {
      updateLightShadow(shadow);
    }
    $$rendered = `${target && !(target instanceof Object3D) ? `${validate_component(SceneGraphObject, "SceneGraphObject").$$render($$result, { object: originalTarget }, {}, {})}
  ${validate_component(TransformableObject, "TransformableObject").$$render($$result, { object: originalTarget, position: target }, {}, {})}
  ${validate_component(DisposableObject, "DisposableObject").$$render($$result, { dispose, object: target }, {}, {})}` : ``}

${validate_component(LightInstance, "LightInstance").$$render(
      $$result,
      {
        light,
        position,
        scale,
        rotation,
        castShadow: shadow ? true : false,
        receiveShadow,
        frustumCulled,
        renderOrder,
        visible,
        userData,
        dispose,
        viewportAware,
        color,
        intensity,
        inViewport
      },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_started();
  return $$rendered;
});
const Fog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $linear, $$unsubscribe_linear;
  let { color = 16777215 } = $$props;
  let { near = void 0 } = $$props;
  let { far = void 0 } = $$props;
  const { linear } = useThrelteRoot();
  $$unsubscribe_linear = subscribe(linear, (value) => $linear = value);
  const { scene, invalidate } = useThrelte();
  const fog = new Fog$1(convertColorRepresentationToColor(color, $linear), near, far);
  scene.fog = fog;
  invalidate("Fog: added");
  onDestroy(() => {
    scene.fog = null;
    invalidate("Fog: removed");
  });
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.near === void 0 && $$bindings.near && near !== void 0)
    $$bindings.near(near);
  if ($$props.far === void 0 && $$bindings.far && far !== void 0)
    $$bindings.far(far);
  if ($$props.fog === void 0 && $$bindings.fog && fog !== void 0)
    $$bindings.fog(fog);
  {
    {
      if (color !== void 0)
        fog.color = convertColorRepresentationToColor(color, $linear);
      if (near !== void 0)
        fog.near = near;
      if (far !== void 0)
        fog.far = far;
      invalidate("Fog: props changed");
    }
  }
  $$unsubscribe_linear();
  return ``;
});
const Chair = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Canvas, "Canvas").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Fog, "Fog").$$render($$result, { color: "#dddddd" }, {}, {})}
	${validate_component(PerspectiveCamera, "PerspectiveCamera").$$render(
        $$result,
        {
          lookAt: { x: 3, y: 3, z: 3 },
          position: { x: -3, y: 5, z: 10 },
          fov: 10
        },
        {},
        {
          default: () => {
            return `${validate_component(OrbitControls, "OrbitControls").$$render(
              $$result,
              {
                enableZoom: false,
                autoRotate: true,
                enableDamping: true,
                controls: true
              },
              {},
              {}
            )}`;
          }
        }
      )}

	${validate_component(DirectionalLight, "DirectionalLight").$$render($$result, { position: { y: 10, z: 10 } }, {}, {})}

	${validate_component(GLTF, "GLTF").$$render(
        $$result,
        {
          url: "/3d/plastic_monobloc_chair_01_4k.gltf"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
const AboutMe_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about.svelte-1k773mo{align-items:flex-start;flex-direction:column;gap:var(--space-m);justify-content:center}.about.svelte-1k773mo,.about__block.svelte-1k773mo{display:flex;width:100%}.about__block.svelte-1k773mo{border-radius:var(--border-radius-light);flex-direction:row;flex-wrap:wrap;gap:var(--space-l)}.block__title.svelte-1k773mo{color:var(--text-color);font-weight:600}.desc.svelte-1k773mo{display:flex;flex-direction:column;gap:var(--space-m);max-width:60ch}.block__text.svelte-1k773mo{color:var(--text-color-low);font-weight:400}.thumb.svelte-1k773mo{aspect-ratio:16/9;border-radius:var(--border-radius-light);height:auto;margin-left:auto;width:100%}@media(min-width:768px){.thumb.svelte-1k773mo{height:500px;width:500px}}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><div class="${"about svelte-1k773mo"}">${validate_component(HomeSectionTitle, "HomeSectionTitle").$$render($$result, { title: "About me" }, {}, {})}
		<div class="${"about__block svelte-1k773mo"}"><div class="${"desc svelte-1k773mo"}"><div class="${"block"}"><h3 class="${"block__title base-text svelte-1k773mo"}">Education &amp; Background</h3>
					<p class="${"block__text small-text svelte-1k773mo"}">I spent about a year working as a full-stack developer, but eventually I found my true
						passion in UI/UX design. I&#39;m currently focusing on UX design, which involves finding
						ways to make the user experience better through research, flow development, and
						wireframing. It&#39;s really rewarding to be able to use my skills to solve problems and
						improve people&#39;s experiences.
					</p></div>
				<div class="${"block"}"><h3 class="${"block__title base-text svelte-1k773mo"}">Thought Process</h3>
					<p class="${"block__text small-text svelte-1k773mo"}">Every project is different and has its own set of challenges, but that&#39;s okay! Instead
						of starting from scratch, I follow industry guidelines and use proven UX frameworks to
						guide me. This usually starts with a discovery phase where I try to understand the
						problem, and then I move on to prototyping and testing my ideas with users. It&#39;s also
						important to work with stakeholders throughout the process. By following these steps,
						I&#39;ve always been able to come up with innovative solutions and achieve successful
						outcomes.
					</p></div></div>
			<div class="${"thumb svelte-1k773mo"}">${validate_component(Chair, "Chair").$$render($$result, {}, {}, {})}</div></div></div>
</section>`;
});
let title = "Home";
let metadescription = "Nguyen Dang Khoa - UI UX Designer + Web Developer. Personal Portfolio.";
const featuredImageAlt = "Nguyen Dang Khoa - UI UX Designer + Web Developer";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { author, siteUrl } = website;
  const breadcrumbs = [{ name: "Home", slug: "" }];
  const featuredImage = {
    url: featuredImageSrc,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: "HomePage"
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
    slug: "",
    entityMeta,
    datePublished: "2077-07-07T14:19:33.000+0100",
    lastUpdated: "2077-07-07T14:19:33.000+0100",
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage
  };
  return `

${validate_component(SEO, "SEO").$$render($$result, Object.assign({}, seoProps), {}, {})}
${validate_component(Name, "Name").$$render($$result, {}, {}, {})}
${validate_component(Featured, "FeaturedProject").$$render($$result, {}, {}, {})}
${validate_component(MyClients, "Clients").$$render($$result, {}, {}, {})}

${validate_component(MyTools, "ToolUsed").$$render($$result, {}, {}, {})}
${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
