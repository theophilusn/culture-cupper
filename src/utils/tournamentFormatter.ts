import type { CollectionEntry } from "astro:content";

interface Participant {
  id: string;
  name: string;
  image?: string;
  isWinner: boolean;
}

interface Match {
  id: string;
  round: 1 | 2 | 3;
  participants: Participant[];
}

interface FormattedTournament {
  name: string;
  matches: Match[];
}

export async function formatTournamentData(
  tournament: CollectionEntry<"tournaments">,
  members: CollectionEntry<"members">[],
): Promise<FormattedTournament> {
  // Format the tournament data for the TournamentBracket component
  const formattedMatches = tournament.data.matches.map((match: any) => {
    const formattedParticipants = match.participants.map((participant: any) => {
      // Find the member data
      const memberData = members.find(
        (member) => member.slug === participant.member.slug,
      );

      return {
        id: participant.member.slug,
        name: memberData?.data.name || "Unknown",
        image: memberData?.data.image,
        isWinner: participant.isWinner,
      };
    });

    return {
      id: match.id,
      round: match.round as 1 | 2 | 3,
      participants: formattedParticipants,
    };
  });

  return {
    name: tournament.data.name,
    matches: formattedMatches,
  };
}
