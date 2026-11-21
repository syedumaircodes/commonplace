// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
			components: {
				Hero: './src/components/Hero.astro',
				Sidebar: './src/components/Sidebar.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
			sidebar: [
				{
					label: 'Grokking Relational Database Design',
					items: [
						{ label: 'Overview', link: '/notes/grokking-relational-database-design/' },
						{ autogenerate: { directory: 'notes/grokking-relational-database-design' } },
					],
				},
				{
					label: 'Security Engineering v3',
					items: [
						{ label: 'Overview', link: '/notes/security-engineering-v3/' },
						{ autogenerate: { directory: 'notes/security-engineering-v3' } },
					],
				},
				{
					label: 'Microsoft SQL Server',
					items: [
						{ label: 'Overview', link: '/notes/microsoft-sql/' },
						{ autogenerate: { directory: 'notes/microsoft-sql' } },
					],
				},
			],
		}),
	],
});
