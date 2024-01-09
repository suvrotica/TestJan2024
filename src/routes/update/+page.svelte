<script>
	export let data;
	let selectedBlogPost;

	function selectBlogPost(post, index) {
		selectedBlogPost = selectedBlogPost?.id !== post.id ? post : undefined;
	}
</script>

<h1>Update Blog Post</h1>

<ol>
	{#each data?.blogPosts as post, checkId}
		<li>
			<input
				id={`blog-checkbox-${checkId}`}
				type="checkbox"
				checked={selectedBlogPost?.id === post.id}
				on:click={() => selectBlogPost(post, checkId)}
			/>
			{`id ${post.id} tag ${post.tag_set} title ${post.title} ${post.slug}`}
		</li>
	{/each}
</ol>
{#if selectedBlogPost}
	<form method="post" action="?/update">
		<input type="hidden" name="id" value={selectedBlogPost.id} />

		<label for="title">New Title</label>
		<input id="title" name="title" type="text" required value={selectedBlogPost.title} />

		<label for="content">New Content</label>
		<textarea id="content" name="content" required>{selectedBlogPost.content}</textarea>

		<label for="image_url">New Image URL</label>
		<input
			id="image_url"
			name="image_url"
			type="text"
			required
			value={selectedBlogPost.image_url}
		/>

		<label for="tag_set">New Tags (comma-separated)</label>
		<input id="tag_set" name="tag_set" type="text" required value={selectedBlogPost.tag_set} />

		<button type="submit">Update Post</button>
	</form>
{/if}
