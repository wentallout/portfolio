import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./index3.js";
let assets = "";
let base = "";
let version = "";
let public_env = {};
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_building(value) {
}
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_version(value) {
  version = value;
}
function afterUpdate() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1 }, {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, { data: data_2, form }, {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
set_paths({ "base": "", "assets": "" });
set_version("1674984186633");
const options = {
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  root: Root,
  service_worker: true,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en-US">\n\n<head>\n	<meta charset="utf-8" />\n	<link rel="preload" href="' + assets2 + '/fonts/Mona-Sans.woff2" as="font" type="font/woff2" crossorigin>\n	<link rel="icon" href="' + assets2 + '/favicon.ico" sizes="any" />\n	<link rel="icon" href="' + assets2 + '/favicon.svg" type="image/svg+xml" />\n	<link rel="apple-touch-icon" href="' + assets2 + '/apple-touch-icon.png" />\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n	<link rel="manifest" crossorigin="use-credentials" href="/manifest.webmanifest" />\n	' + head + "\n</head>\n\n<body>\n	<div>" + body + '</div>\n\n\n	<form name="contact" netlify netlify-honeypot="bot-field" hidden>\n		<input type="text" name="name" />\n		<input type="email" name="email" />\n		<textarea name="message"></textarea>\n	</form>\n</body>\n\n</html>',
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  }
};
function get_hooks() {
  return import("./hooks.server.js");
}
export {
  assets as a,
  base as b,
  set_building as c,
  set_paths as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  set_public_env as s,
  version as v
};