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
			head: [
				{ tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			tableOfContents: false,
			lastUpdated: true,
			components: {
				Hero: './src/components/Hero.astro',
				Sidebar: './src/components/Sidebar.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
			sidebar,
		}),
	],
});
