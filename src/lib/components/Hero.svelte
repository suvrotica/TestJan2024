<script>
	import Carousel from '$lib/component/Carousal.svelte';
	import {
		sectionStyle,
		divContainerStyle,
		divContentStyle,
		divCarouselStyle,
		h1Style,
		pStyle,
		a_style
	} from '$lib/global';
</script>

<section class={sectionStyle}>
	<div class={divContainerStyle}>
		<div class={divContentStyle}>
			<h1 class={h1Style}>A Quixotic Blog</h1>
			<p class={pStyle}>
				Although flippant, this blog is a scratchpad of thoughts, a much-sought-after extension of
				my embarrassing tangle of nerves, unrelated fancies and figments strewn around and rattling
				loose in it, collectibles from the waste basket scraps that should have seen a shredder, or,
				somewhat more crudely, everything about anything. I'm not a prisoner to the usual boundaries
				that limit most people, and I wanted a place where the diarist in me could jot down the
				wanderings of his profligately traveling mind and not feel unwelcome. I presume I would
				leave the world richer in nonsense than anything of substance. But here I explore, when I
				still can, the vast and forbidden realms of human feats and foibles, fucks and farts, feces
				and fraternities. So whether you're a seasoned simulationist or a curious commoner, an
				android or an amateur, a ponderer or a pragmatist, join me in the infinite mosaic of
				collective nonsense we can explore.
			</p>
			<a href="/latest-post" class={a_style}>Latest Post</a>
			<a href="/about-me" class={a_style}>About Me</a>
		</div>
		<div class={divCarouselStyle}>
			<Carousel />
		</div>
	</div>
</section>
