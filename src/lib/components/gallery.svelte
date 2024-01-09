<script>
	import Post from '$lib/components/post.svelte';
	import { createSlug } from '$lib/utility-functions';
	export let tag;
	export let groupedPosts;
	let selectedPost;

	function selectPost(post) {
		selectedPost = post;
	}

	$: gridLayout = selectedPost ? '1px auto' : '6fr 6fr';
	$: isNavVisible = selectedPost == null;
</script>

<details>
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<summary role="button" class="contrast" on:click={() => (selectedPost = null)}
		>{tag} ({groupedPosts[tag].length})</summary
	>
	<div class="container" style="grid-template-columns: {gridLayout};">
		<aside class="sidebar">
			<nav class={`grid-nav ${isNavVisible ? '' : 'hide-nav'}`}>
				{#each groupedPosts[tag] as post}
					<!-- svelte-ignore a11y-no-redundant-roles -->
					<button role="button" class="contrast" on:click={() => selectPost(post)}>
						<a href="/blogs/{createSlug(post.title)}" data-sveltekit-preload-data>
							<figure>
								<figcaption class="contrast">{post.title}</figcaption>
								<img src={post.image_url} alt="pic" />
							</figure>
						</a>
					</button>
				{/each}
			</nav>
		</aside>
		<!-- <div class="content">
			{#if selectedPost}
				<a href="/blogs/{createSlug(selectedPost.title)}">{selectedPost.title}</a>
				<Post post={selectedPost} />
			{/if}
		</div> -->
	</div>
</details>

<style>
	.container {
		display: grid;
		/* grid-template-columns is set dynamically in the script */
	}
	.grid-nav {
		display: grid;
		grid-template-columns: repeat(
			3,
			1fr
		); /* Adjust the number '3' to your desired number of columns */
		grid-gap: 10px; /* Space between grid items */
	}

	.hide-nav {
		display: none;
	}
</style>
