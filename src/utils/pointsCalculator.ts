import type { CollectionEntry } from 'astro:content';

/**
 * Calculates a team's total points from all possible sources
 */
export async function calculateTeamPoints(
  teamSlug: string,
  allTeams: CollectionEntry<'teams'>[],
  allGames: CollectionEntry<'games'>[],
  allEvents: CollectionEntry<'events'>[]
): Promise<{ goodPoints: number, badPoints: number, totalPoints: number }> {
  // 1. Get the team
  const team = allTeams.find(t => t.slug === teamSlug);
  if (!team) {
    return { goodPoints: 0, badPoints: 0, totalPoints: 0 };
  }

  // 2. Start with manual adjustments
  let goodPoints = team.data.manualGoodPoints || 0;
  let badPoints = team.data.manualBadPoints || 0;
  
  // For backward compatibility, if we have old-style goodPoints/badPoints, use them as manual points
  if (team.data.goodPoints !== undefined && team.data.manualGoodPoints === 0) {
    goodPoints = team.data.goodPoints;
  }
  if (team.data.badPoints !== undefined && team.data.manualBadPoints === 0) {
    badPoints = team.data.badPoints;
  }

  // 3. Add points from games
  const teamGames = allGames.filter(game => 
    game.data.winner === team.data.name && 
    game.data.points !== undefined
  );
  
  for (const game of teamGames) {
    goodPoints += game.data.points || 0;
  }

  // 4. Add points from events
  for (const event of allEvents) {
    if (event.data.pointsLogs) {
      for (const log of event.data.pointsLogs) {
        if (log.team === teamSlug) {
          if (log.isGoodPoints) {
            goodPoints += log.points;
          } else {
            badPoints += log.points;
          }
        }
      }
    }
  }

  // 5. Calculate total
  const totalPoints = goodPoints - badPoints;

  return { goodPoints, badPoints, totalPoints };
} 