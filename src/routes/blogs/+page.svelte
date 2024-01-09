<script>
	export let data;
	import Gallery from '$lib/components/gallery.svelte';

	function createSlug(title) {
		return title
			.toLowerCase() // Convert to lowercase
			.trim() // Remove whitespace from both ends of a string
			.replace(/\s+/g, '-') // Replace spaces with hyphens
			.replace(/[^\w\-]+/g, '') // Remove all non-word chars
			.replace(/\-\-+/g, '-'); // Replace multiple hyphens with single hyphen
	}

	function groupPostsByTag(posts) {
		const grouped = {};
		posts.forEach((post) => {
			// Split the tag_set string into an array of tags
			const tags = post.tag_set ? post.tag_set.split(',') : ['Other'];

			tags.forEach((tag) => {
				tag = tag.trim();
				if (!grouped[tag]) {
					grouped[tag] = [];
				}
				grouped[tag].push(post);
			});
		});
		return grouped;
	}

	const groupedPosts = groupPostsByTag(data.blogPosts);
</script>

<!-- 
{#each data.blogPosts as post(post.id)}
   <p>{post.id}</p>
   <li><a href="/blogs/{createSlug(post.title)}">{post.title}</a></li>
{/each} -->

{#if Object.keys(groupedPosts).length > 0}
	{#each Object.keys(groupedPosts) as tag}
		<Gallery {tag} {groupedPosts} />
	{/each}
{:else}
	<h2>No blog posts available</h2>
{/if}
