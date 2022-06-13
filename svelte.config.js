import adapter from '@sveltejs/adapter-auto';
import preprocessor from "svelte-preprocess"
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocessor: preprocessor(),
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
