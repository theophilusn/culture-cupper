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

export const GuessZuBracket = () => {
  const matches = [
    {
      id: 1,
      nextMatchId: 5, // Semi-finals
      tournamentRoundText: "Quarter-Final",
      state: "SCHEDULED",
      participants: [
        { id: "1", name: "ROBERTA BARRINGTON", isWinner: false, status: null },
        { id: "2", name: "JEN KORNEY", isWinner: false, status: null },
      ],
    },
    {
      id: 2,
      nextMatchId: 5, // Semi-finals
      tournamentRoundText: "Quarter-Final",
      state: "SCHEDULED",
      participants: [
        { id: "3", name: "RACHEL ELSON", isWinner: false, status: null },
        { id: "4", name: "ANJA GILJE", isWinner: false, status: null },
      ],
    },
    {
      id: 3,
      nextMatchId: 6, // Semi-finals
      tournamentRoundText: "Quarter-Final",
      state: "SCHEDULED",
      participants: [
        { id: "5", name: "CHRISTIANNE ROOKE", isWinner: false, status: null },
        { id: "6", name: "VALERIE CHAN", isWinner: false, status: null },
      ],
    },
    {
      id: 4,
      nextMatchId: 6, // Semi-finals
      tournamentRoundText: "Quarter-Final",
      state: "SCHEDULED",
      participants: [
        { id: "7", name: "MELISSA ARNOTT", isWinner: false, status: null },
        { id: "8", name: "SUSAN FROESS", isWinner: false, status: null },
      ],
    },
    {
      id: 5,
      nextMatchId: 7, // Finals
      tournamentRoundText: "Semi-Final",
      state: "SCHEDULED",
      participants: [],
    },
    {
      id: 6,
      nextMatchId: 7, // Finals
      tournamentRoundText: "Semi-Final",
      state: "SCHEDULED",
      participants: [],
    },
    {
      id: 7,
      nextMatchId: null, // No further matches after finals
      tournamentRoundText: "Final",
      state: "SCHEDULED",
      participants: [],
    },
  ];

  return (
    <div>
      <SingleEliminationBracket matches={matches} matchComponent={Match} />
    </div>
  );
};

