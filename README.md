[![Netlify Status](https://api.netlify.com/api/v1/badges/7bf37fa7-ec78-4efd-aa9a-1a18a4fc62e4/deploy-status)](https://app.netlify.com/sites/khoa-design/deploys)

## What is this?

This is Khoa's personal portfolio.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Deploy to Netlify

```bash
npm install -D @sveltejs/adapter-netlify@next
```

After the intallation is complete, add the adapter into your project’s svelte.config.js file. Insert the following code below into the file.

```js
import adapter from '@sveltejs/adapter-netlify';
export default {
	kit: {
		adapter: adapter(),
		target: '#svelte',
	},
};
```

Then create a netlify.toml file in your project’s base directory and specify a build command and publish directory. Insert the following code below into the file.

```
[build]
  command = "npm run build"
  publish = "build"
```

After all this setting, then deploy your project on Netlify with Git or the Netlify CLI.
