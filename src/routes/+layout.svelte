<script>
	import '../app.pcss';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const title = 'Suvro Ghosh Blog';
	const description =
		"Dive into the world of technology and opinion with a blog from Suvro Ghosh, where personal insights meet professional expertise. Explore in-depth tutorials, latest tech trends, and personal stories from a seasoned leader's perspective. Join Suvro and the community of tech enthusiasts and start enhancing your skills today!";
	import { Alert } from 'flowbite-svelte';
</script>

<svelte:head>
	<link rel="icon" href="https://fav.farm/💩" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans&amp;display=swap"
		rel="stylesheet"
	/>

	<link
		href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&amp;family=Amatic+SC:wght@400;700&amp;family=Poppins:ital,wght@0,100;1,100&amp;display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
		rel="stylesheet"
	/>

	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
<main>
	<Header />
	<slot />
	<Footer />
</main>
