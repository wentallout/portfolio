import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { A as AmbientLight$1, L as LightInstance, C as Canvas, P as PerspectiveCamera, e as OrbitControls, G as GLTF } from "../../../../chunks/GLTF.js";
const AmbientLight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { lookAt = void 0 } = $$props;
  let { castShadow = void 0 } = $$props;
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
  const light = new AmbientLight$1(color, intensity);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
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
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(LightInstance, "LightInstance").$$render(
      $$result,
      {
        light,
        lookAt,
        position,
        scale,
        rotation,
        castShadow,
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
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".threejs.svelte-1ra4uw1{display:flex;height:500px;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"threejs svelte-1ra4uw1"}">${validate_component(Canvas, "Canvas").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PerspectiveCamera, "PerspectiveCamera").$$render($$result, { position: { x: 5, y: 2, z: 5 }, fov: 25 }, {}, {
        default: () => {
          return `${validate_component(OrbitControls, "OrbitControls").$$render($$result, { autoRotate: true, enableDamping: true }, {}, {})}`;
        }
      })}

		${validate_component(AmbientLight, "AmbientLight").$$render($$result, {}, {}, {})}

		${validate_component(GLTF, "GLTF").$$render(
        $$result,
        {
          url: "/3d/plastic_monobloc_chair_01_4k.gltf"
        },
        {},
        {}
      )}`;
    }
  })}
</div>`;
});
export {
  Page as default
};
