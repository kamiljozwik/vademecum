import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const path_to_layout = join(__dirname, './src/mdsvex.svelte');

/* Markdown Plugins */
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug';

// https://joyofcode.xyz/sveltekit-markdown-blog
/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: path_to_layout
	},
	remarkPlugins: [remarkUnwrapImages],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: true
		}),
		mdsvex(mdsvexOptions)
	],

	kit: {
		// https://kit.svelte.dev/docs/adapter-vercel
		adapter: adapter()
	}
};

export default config;
