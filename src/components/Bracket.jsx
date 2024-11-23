// src/components/Bracket.jsx
import {
  SingleEliminationBracket,
  Match,
} from '@g-loot/react-tournament-brackets';

export const SFBracket = () => {
  const matches = [
    {
      "id": 19753,
      "nextMatchId": null,
      "tournamentRoundText": "3",
      "state": "SCHEDULED",
      "participants": []
    },
    {
      "id": 19754,
      "nextMatchId": 19753,
      "tournamentRoundText": "2",
      "participants": []
    },
    {
      "id": 19755,
      "nextMatchId": 19754,
      "tournamentRoundText": "1",
      "state": "RUNNING",
      "participants": [
        {
          "id": "1",
          "resultText": null,
          "isWinner": false,
          "status": "null",
          "name": "ALBERT JAME",
        },
        {
          "id": "2",
          "resultText": null,
          "isWinner": false,
          "status": "null",
          "name": "MEAGAN MACLEAN",
        }
      ]
    },
    {
      "id": 19756,
      "nextMatchId": 19754,
      "tournamentRoundText": "1",
      "state": "RUNNING",
      "participants": [
        {
          "id": "3",
          "resultText": null,
          "isWinner": false,
          "status": null,
          "name": "TRAVIS ROBINSON",
        },
        {
          "id": "4",
          "resultText": null,
          "isWinner": false,
          "status": null,
          "name": "JONN RONN",
        }
      ]
    },
    {
      "id": 19757,
      "nextMatchId": 19753,
      "tournamentRoundText": "2",
      "state": "SCHEDULED",
      "participants": []
    },
    {
      "id": 19758,
      "nextMatchId": 19757,
      "tournamentRoundText": "1",
      "state": "SCHEDULED",
      "participants": [
        {
          "id": "5",
          "resultText": null,
          "isWinner": false,
          "status": null,
          "name": "GREGOR BUTINA",
        },
        {
          "id": "6",
          "resultText": null,
          "isWinner": false,
          "status": null,
          "name": "MICHAEL SABARES",
        }
      ]
    },
    {
      "id": 19759,
      "nextMatchId": 19757,
      "tournamentRoundText": "1",
      "state": "SCHEDULED",
      "participants": [
        {
          "id": "7",
          "resultText": null,
          "isWinner": false,
          "status": null,
          "name": "MAX GEWERS",
        },
        {
          "id": "8",
          "resultText": null,
          "isWinner": false,
          "status": null,
          "name": "NICK KINDRACHUK",
        }
      ]
    }
  ];

  return (
    <SingleEliminationBracket
      matches={matches}
      matchComponent={Match}
    />
  );
}
