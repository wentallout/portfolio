---
name: svelte-code-writer
description: Provides expert tools and documentation lookup for Svelte 5 and SvelteKit development. Use whenever creating, editing, or analyzing Svelte components and modules.
license: MIT
metadata:
  author: Svelte Team
  version: '1.0'
---

Use this skill whenever you are working on Svelte components (`.svelte`) or modules (`.svelte.ts`/`.svelte.js`). This skill integrates with the Svelte MCP server to provide real-time documentation and code analysis.

## Core Tools

- **`list-sections`**: ALWAYS call this first when you need information about Svelte 5 or SvelteKit. It provides a map of all available documentation.
- **`get-documentation`**: Use this to fetch full documentation for specific Svelte features (e.g., runes, lifecycle, snippets). Analyze the `use_cases` from `list-sections` to determine which sections to fetch.
- **`svelte-autofixer`**: MANDATORY tool to run before sending any Svelte code back to the user. It identifies and suggests fixes for common issues, ensuring code quality and compatibility with Svelte 5.

## Workflow

1. **Research**: Use `list-sections` and `get-documentation` to understand the best way to implement the requested feature using Svelte 5 primitives.
2. **Implementation**: Write the Svelte code following modern patterns (runes, snippets, etc.).
3. **Validation**: Run `svelte-autofixer` on the written code. Apply all recommended fixes until no further issues are found.
4. **Final Review**: Ensure the code is idiomatic and follows the `svelte-core-bestpractices` (if available).
