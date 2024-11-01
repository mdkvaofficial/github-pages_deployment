import {sveltePreprocess} from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
export default {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter(),
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
	}
  }
};
