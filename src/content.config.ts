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
        manualGoodPoints: z.number().default(0),
        manualBadPoints: z.number().default(0),
        goodPoints: z.number().optional(),
        badPoints: z.number().optional(),
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
  tournaments: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "./src/content/tournaments",
    }),
    schema: () =>
      z.object({
        name: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        winner: reference("members").optional(),
        matches: z.array(
          z.object({
            id: z.string(),
            round: z.number().min(1).max(3),
            participants: z.array(
              z.object({
                member: reference("members"),
                isWinner: z.boolean().default(false),
              })
            ).max(2),
          })
        ),
        showOnHomepage: z.boolean().default(true),
      }),
  }),
  events: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "./src/content/events",
    }),
    schema: () =>
      z.object({
        name: z.string(),
        date: z.string(),
        description: z.string().optional(),
        participants: z.array(reference("members")),
        pointsLogs: z.array(
          z.object({
            points: z.number(),
            reason: z.string(),
            team: reference("teams"),
            isGoodPoints: z.boolean().default(true),
          })
        ).optional(),
      }),
  }),
};
