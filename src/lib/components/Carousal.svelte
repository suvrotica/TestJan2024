<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Img } from 'flowbite-svelte';
	import { sectionStyle, pStyle, imgStyle, h1Style } from '$lib/global';
	const images = [
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic1-HXbEj2b27fe27ZWisKCBVKsuahm9zo.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic2-zHOvTA5yt5xxYte3mEtElM85RjUlXy.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic3-sCYKbXlTpOwJRP0yX20WHnmhXz8G0F.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic4-OzLZcCKm2uSMDxu5urN6LcMuVOf9Lh.png'
	];
	import { onMount } from 'svelte';
	onMount(() => {
		const interval = setInterval(updateIndex, 5000);
		return () => clearInterval(interval);
	});

	let currentIndex = 0;

	// Logic to update currentIndex for the carousel
	const updateIndex = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};
</script>

<div class={sectionStyle}>
	<!-- Adjust width and height as needed -->
	{#each images as image, index}
		<li
			class="clearfix -mr-4 -mt-6 overflow-x-hidden bg-neutral-300"
			class:hidden={index !== currentIndex}
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
		>
			<Img src={image} alt={`Image ${index}`} />
		</li>
	{/each}
</div>
<!-- 
<style>
	.carousel-image {
		/* position: absolute; */
		/* top: 0; */
		/* left: 0; */
		/* width: 100%; */
		/* height: 100%; */
		/* object-fit: cover; */
	}
</style> -->
