import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/** Where the material comes from. */
				kind: z.enum(['book', 'course', 'specialization', 'article', 'video', 'docs']).optional(),
				/** Author, institution, or platform. */
				source: z.string().optional(),
				/** Canonical link to the original source. */
				url: z.string().url().optional(),
			}),
		}),
	}),
};
