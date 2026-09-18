import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const jiaozhan = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/jiaozhan",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  jiaozhan,
};