const prerender = true;
const load = ({ url }) => {
  const currentRoute = url.pathname;
  return {
    currentRoute
  };
};
export {
  load,
  prerender
};
