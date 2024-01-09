<script>
	export let data;


</script>

{#each data.blogPosts as post(post.id)}
   <p>{post.id}</p>
{/each} 
