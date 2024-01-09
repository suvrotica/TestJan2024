<script>
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.css';
	export let codeContent = `// No code passed to prismjs to highlight`;
	export let language = 'language-js';

	import { onMount } from 'svelte';
	onMount(() => {
		Prism.highlightAll();
	});
</script>

<pre><code class={language}>{codeContent}</code></pre>
