import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess"
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
		  resolve: {
		    alias: {
		      "#static": resolve("./static")
		    }
		  }
		}
	},
};

export default config;
