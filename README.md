# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

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
