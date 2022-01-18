import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const handleError = ({ status, path, referrer, referenceType }) => {
	if (path.startsWith('/blog')) throw new Error('Missing a blog page!');
	console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		target: '#svelte',
		prerender: {
			subfolders: false,
			onError: handleError,
			entries: ["/FallGuys"]
		}	
	}
};

export default config;
