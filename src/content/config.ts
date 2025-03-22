import { defineCollection, z } from "astro:content";

// TODO: Will probably want to add loader to make it work with CMS
const blog = defineCollection({
  type: "content",
  loader: glob({ pattern: ["*.mdx", "*.astro"], base: "./src/content/blog"}),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, projects };
