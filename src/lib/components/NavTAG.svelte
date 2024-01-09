<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { a_style } from '$lib/global';

	let tags = [];

	onMount(async () => {
		const response = await fetch('/api/tags');
		if (response.ok) {
			tags = await response.json();
		} else {
			console.error('Failed to fetch tags');
		}
	});
</script>

<nav class="pt-14">
	{#each tags as tag}
		<a href={`/tag-${encodeURIComponent(tag)}`} class={a_style}>
			{tag}
		</a>
	{/each}
</nav>
