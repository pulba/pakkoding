import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const materiCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/materi" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['HTML', 'CSS', 'JS', 'Tools', 'Koding', 'AI']),
    order: z.number(),
    description: z.string(),
    content: z.array(
      z.object({
        explanation: z.string(),
        code: z.string(),
        challenge: z.string(),
        image: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  materi: materiCollection,
};
