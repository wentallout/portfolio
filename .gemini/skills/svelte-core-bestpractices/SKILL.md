---
name: svelte-core-bestpractices
description: Expert guidance on writing fast, robust, and modern Svelte 5 code. Covers runes, event handling, styling, and modern component patterns.
license: MIT
metadata:
  author: Svelte Team
  version: '1.0'
---

Follow these best practices to ensure your Svelte code is modern, efficient, and avoids legacy patterns.

## 1. Reactivity (Runes)

- **Use `$state`**: Replace `let` declarations with `$state` for reactive variables.
- **Prefer `$derived`**: Use `$derived` or `$derived.by` for computed values. Avoid using `$effect` to sync state.
- **Minimize `$effect`**: Treat `$effect` as an escape hatch for side effects (like DOM manipulation). Avoid updating state inside an effect as it can cause infinite loops. Use `untrack()` if you need to read a value without creating a dependency.
- **Props**: Use `$props()` to receive data and callbacks. Avoid the legacy `export let` syntax.

## 2. Components & Logic

- **Snippets**: Use `{#snippet name(args)}...{/snippet}` and `{@render name(args)}` for reusable UI chunks within a component. Replace legacy `<slot>` and `let:prop` patterns.
- **Event Handling**: Use standard attributes like `onclick`, `onmouseenter`, etc., instead of the legacy `on:click` syntax.
- **Actions**: Prefer standard DOM manipulation or the modern `{@attach}` pattern (if available) over the legacy `use:action` syntax when possible.
- **Stores**: Prefer using classes with `$state` properties for shared state instead of Svelte stores (`writable`, `derived`, etc.).

## 3. Performance & Design

- **Primitive Dependencies**: In effects, track primitive values (like IDs) rather than unstable object references.
- **No Side Effects in Markup**: Ensure that getters or expressions in the markup do not produce side effects.
- **Logic Placement**: Keep complex logic in `.svelte.ts` or `.svelte.js` files using runes to keep components clean.

## 4. Anti-Patterns to Avoid

- **NO `export let`**: Always use `$props()`.
- **NO `on:click`**: Always use `onclick`.
- **NO `writable()`**: Prefer `$state()` or classes.
- **NO `<slot>`**: Always use snippets and `$props()`.
