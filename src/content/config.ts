import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string(),
    status: z.string().optional(),
    summary: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional()
  })
});

export const collections = { writing };
