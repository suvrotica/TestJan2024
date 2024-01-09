<script lang="ts">
	import { navStyle, ulStyle, a_style, btnClass } from '$lib/global';
	import Logo from './Logo.svelte';
	import NavTag from './NavTAG.svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<nav class={navStyle}>
	<!-- Logo and Title on one line on mobile -->
	<Logo />
	<!-- Navigation -->
	<ul class={ulStyle}>
		<li>
			<a href="/" class={`${a_style}`}>Home</a>
		</li>
		<li>
			<a href="/tag-Blog" class={`${a_style}`}>About</a>
		</li>
	</ul>
	<!-- Theme Toggle Button -->

	<DarkMode {btnClass} />
</nav>
<NavTag />
