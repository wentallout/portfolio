<script>
	/** @type {{width?: string, height?: string}} */
	let { width = '16', height = '16' } = $props();
</script>

<svg {height} viewBox="0 0 512 512" {width} xmlns="http://www.w3.org/2000/svg"
	><path d="M0 0h512v512H0z" fill="#012169" /><path
		d="M512 0v64L322 256l190 187v69h-67L254 324L68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
		fill="#FFF" /><path
		d="m184 324l11 34L42 512H0v-3l184-185zm124-12l54 8l150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189l-59-8L0 49V1z"
		fill="#C8102E" /><path d="M176 0v512h160V0H176zM0 176v160h512V176H0z" fill="#FFF" /><path
		d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"
		fill="#C8102E" /></svg>
