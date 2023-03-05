import { c as create_ssr_component, o as compute_rest_props, e as spread, f as escape_object, q as escape_attribute_value, h as escape } from "./index3.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
const Time = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let $$restProps = compute_rest_props($$props, ["timestamp", "format", "relative", "live", "formatted"]);
  let { timestamp = new Date().toISOString() } = $$props;
  let { format = "MMM DD, YYYY" } = $$props;
  let { relative = false } = $$props;
  let { live = false } = $$props;
  let { formatted = "" } = $$props;
  if ($$props.timestamp === void 0 && $$bindings.timestamp && timestamp !== void 0)
    $$bindings.timestamp(timestamp);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.relative === void 0 && $$bindings.relative && relative !== void 0)
    $$bindings.relative(relative);
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.formatted === void 0 && $$bindings.formatted && formatted !== void 0)
    $$bindings.formatted(formatted);
  formatted = relative ? dayjs(timestamp).from() : dayjs(timestamp).format(format);
  title = relative ? dayjs(timestamp).format(format) : void 0;
  return `<time${spread(
    [
      escape_object($$restProps),
      { title: escape_attribute_value(title) },
      {
        datetime: escape_attribute_value(timestamp)
      }
    ],
    {}
  )}>${escape(formatted)}</time>`;
});
export {
  Time as T
};
