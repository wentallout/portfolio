<script context="module">
    export const faqsKey = {};
  </script>
  
  <script>
      import { setContext } from 'svelte';
      import { writable } from 'svelte/store';
      setContext(faqsKey, writable(""))
  </script>
  
  <slot />