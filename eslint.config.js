import antfu from '@antfu/eslint-config'

export default antfu({
  isInEditor: false,
  svelte:true,
  ignores: [".DS_Store","**/.DS_Store/**","node_modules","**/node_modules/**","build","build/**",".svelte-kit",".svelte-kit/**","package","package/**",".env","**/.env/**",".env.*","**/.env.*/**","!.env.example","!**/.env.example/**","pnpm-lock.yaml","**/pnpm-lock.yaml/**","package-lock.json","**/package-lock.json/**","yarn.lock","**/yarn.lock/**"],
})
