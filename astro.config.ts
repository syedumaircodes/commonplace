// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { topics } from './src/data/topics';

// One sidebar group per topic, derived from `src/data/topics.ts` so the
// registry is the only place a topic needs to be registered.
const sidebar = topics.map((topic) => ({
	label: topic.title,
	items: [
		{ label: 'Overview', link: `/notes/${topic.slug}/` },
		{ autogenerate: { directory: `notes/${topic.slug}` } },
	],
}));

// https://astro.build/config
export default defineConfig({
	site: 'https://spiritlibrary.vercel.app',
	integrations: [
		starlight({
			title: 'SpiritLibrary',
			description: 'Personal notes on databases, security, and the things I build.',
			head: [
				{ tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/geist-sans-var.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/geist-serif-var.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/geist-mono-var.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			tableOfContents: false,
			lastUpdated: true,
			components: {
				Head: './src/components/Head.astro',
				Hero: './src/components/Hero.astro',
				Sidebar: './src/components/Sidebar.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
			sidebar,
		}),
	],
});
