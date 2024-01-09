<script lang="ts">
	import {
		extractTitleAndDate,
		replace42brWithBreak,
		replaceBqWithDiv,
		enhancePunctuation,
		replace4bWithBreak,
		replace42tableWithHTMLTable,
		replace42picWithFigure,
		replace42ytWithIframe,
		replace42picWithFigureR
	} from '$lib/utility-functions';
	import { onMount, afterUpdate } from 'svelte';

	export let image_name = '';
	export let blogContent = '';

	const { title, date, remainingContent } = extractTitleAndDate(blogContent);

	let newBlogContent = replaceBqWithDiv(remainingContent);
	newBlogContent = replace42ytWithIframe(newBlogContent);
	newBlogContent = replace42picWithFigureR(newBlogContent);
	newBlogContent = replace42picWithFigure(newBlogContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
	newBlogContent = replace4bWithBreak(newBlogContent);
	newBlogContent = replace42tableWithHTMLTable(newBlogContent);
</script>

<details>
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<summary role="button" class="contrast">{date + ' : ' + title} </summary>
<article>
		<article class="float-left svg">
			<figure>
				<img src="/{image_name}" alt="pic" />
				<img src="/sign.svg" alt="sign" width="50%" style="display: block; margin: 0 auto;" />

				<figcaption class="yellow-banner">
					{title}
				</figcaption>
			</figure>
		</article>

		<p>{@html newBlogContent}</p>
	</article>	
</details>

<!-- Your styles here -->
