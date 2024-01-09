<script>
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.css';
	import { onMount } from 'svelte';
	onMount(() => Prism.highlightAll());
	import {
		replace42brWithBreak,
		replaceBqWithDiv,
		replace42ytWithIframe,
		replace42picWithFigure,
		replace42picWithFigureL,
		replace42picWithFigureR,
		replace4bWithBreak,
		replace42tableWithHTMLTable,
		replace42cWithHighlight,
		replaceNewLineWithBreak,
		replace42lblWithLabel
	} from '$lib/utility-functions';

	export let post;
	let newBlogContent = post.content;
	newBlogContent = replace42cWithHighlight(newBlogContent);
	newBlogContent = replaceNewLineWithBreak(newBlogContent);
	newBlogContent = replaceBqWithDiv(newBlogContent);
	newBlogContent = replace42ytWithIframe(newBlogContent);
	newBlogContent = replace42picWithFigureR(newBlogContent);
	newBlogContent = replace42picWithFigureL(newBlogContent);
	newBlogContent = replace42picWithFigure(newBlogContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
	newBlogContent = replace4bWithBreak(newBlogContent);
	newBlogContent = replace42tableWithHTMLTable(newBlogContent);
	newBlogContent = replace42lblWithLabel(newBlogContent);
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<!-- <summary>{post.title}</summary> -->
<article>
	<figure>
		<figcaption class="contrast">{post.title}</figcaption>
		<img src={post.image_url} alt="pic" />
	</figure>
</article>
<article class="content">{@html newBlogContent}</article>
