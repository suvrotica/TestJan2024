import adapter from '@sveltejs/adapter-vercel';

import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		preserve: ['ld+json']
	}),

	kit: {
		adapter: adapter({
			runtime: 'edge',
			regions: ['bom1', 'sin1']
		})
	}
};

export default config;