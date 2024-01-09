<script>
	import Logo from './Logo.svelte';
	import { footStyle } from '$lib/global';
</script>

<footer class={footStyle}>
	<li class="hidden md:inline">
		<Logo />
	</li>

	<span class="mt-1 pr-2 text-xs text-neutral-500 sm:text-center md:text-sm dark:text-neutral-400">
		💩
		{new Date().toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) + ' '}Suvro the
		Ghosh who Shits
	</span>
</footer>
