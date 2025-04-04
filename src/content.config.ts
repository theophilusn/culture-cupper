import { z, defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  members: defineCollection({
    loader: glob({
        pattern: "**/[^_]*.{md,mdx}",
        base: "./src/content/members",
      }),
      schema: () =>
        z.object({
          name: z.string(),
          position: z.string(),
          image: z.string(),
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
    schema: () => {
      return z.object({
        name: z.string(),
        members: z.array(reference("members")),
        goodPoints: z.number().default(0),
        badPoints: z.number().default(0),
      }).transform(data => {
        return {
          ...data,
          points: data.goodPoints - data.badPoints
        };
      });
    },
  }),
  games: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "./src/content/games",
    }),
    schema: () =>
      z.object({
        name: z.string(),
        description: z.string(),
        date: z.string().optional(),
        winner: z.string().optional(),
        participants: z.array(reference("teams")).optional(),
        points: z.number().optional(),
      }),
  }),
};
