import { z, defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  members: defineCollection({
    loader: glob({
        pattern: "**/[^_]*.{md,mdx}",
        base: "./src/content/members",
      }),
      schema: ({ image }) =>
        z.object({
          name: z.string(),
          position: z.string(),
          image: image(),
          description: z.string().default(""),
          isLeadership: z.boolean().default(false),
          order: z.number().default(99),
        }),
  }),
  teams: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "./src/content/teams",
    }),
    schema: () =>
      z.object({
        name: z.string(),
        members: z.array(reference("members")),
        points: z.number(),
      }),
  }),
};
