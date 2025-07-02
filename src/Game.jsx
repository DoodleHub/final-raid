import React, { useState, useEffect } from 'react';

const ELEMENTS = ['Sword', 'Shield', 'Magic', 'Arrow', 'Jump'];
const DECK_SIZE = 40;
const HAND_SIZE = 3;

function getRandomElement() {
  return ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
}

function generateDeck() {
  // Evenly distribute elements in the deck
  const deck = [];
  for (let i = 0; i < DECK_SIZE; i++) {
    deck.push({
      id: i + 1,
      element: ELEMENTS[i % ELEMENTS.length],
    });
  }
  // Shuffle deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function generateMonster(round) {
  // Each round, monster requires 1-3 random elements
  const numRequired = Math.min(1 + Math.floor(round / 2), 3);
  const requirements = [];
  for (let i = 0; i < numRequired; i++) {
    requirements.push(getRandomElement());
  }
  return {
    name: `Monster ${round}`,
    requirements,
  };
}

export default function Game() {
  const [deck] = useState(generateDeck());
  const [hand, setHand] = useState(() => deck.slice(0, HAND_SIZE));
  const [deckIndex, setDeckIndex] = useState(HAND_SIZE);
  const [round, setRound] = useState(1);
  const [monster, setMonster] = useState(() => generateMonster(1));
  const [played, setPlayed] = useState([]);
  const [message, setMessage] = useState('');
  const [roundTransition, setRoundTransition] = useState(false);

  // Play a card from hand
  function playCard(idx) {
    const card = hand[idx];
    setPlayed([...played, card]);
    setHand(hand.filter((_, i) => i !== idx));
  }

  // Draw a card from the deck
  function drawCard() {
    if (deckIndex >= deck.length) {
      setMessage('No more cards in the deck!');
      return;
    }
    setHand([...hand, deck[deckIndex]]);
    setDeckIndex(deckIndex + 1);
    setMessage('');
  }

  // Check if monster is defeated
  function canDefeatMonster() {
    const requirements = [...monster.requirements];
    const playedElements = played.map((c) => c.element);
    for (let req of requirements) {
      const idx = playedElements.indexOf(req);
      if (idx === -1) return false;
      playedElements.splice(idx, 1);
    }
    return true;
  }

  // Automatically advance to next round if defeated
  useEffect(() => {
    if (played.length >= monster.requirements.length && canDefeatMonster()) {
      setMessage(`You defeated ${monster.name}!`);
      setRoundTransition(true);
      setTimeout(() => {
        setRound((prev) => prev + 1);
        setMonster(generateMonster(round + 1));
        setPlayed([]);
        setMessage('');
        setRoundTransition(false);
      }, 1200);
    }
    // eslint-disable-next-line
  }, [played]);

  function endTurn() {
    if (!canDefeatMonster()) {
      setMessage("You haven't played the right cards to defeat the monster.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 to-blue-800 p-4">
      <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
        Final Raid: Game
      </h1>
      <div
        className={`bg-white bg-opacity-90 rounded-xl shadow-lg p-6 w-full max-w-lg flex flex-col items-center mb-6 transition-all duration-700 ${
          roundTransition ? 'ring-4 ring-green-400 scale-105' : ''
        }`}
        style={{ minHeight: 480 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Round {round}</h2>
        {roundTransition && (
          <div className="mb-2 animate-pulse text-green-700 font-bold text-lg">
            Next Round!
          </div>
        )}
        <div className="mb-4">
          <div className="font-semibold text-lg text-red-700">
            {monster.name}
          </div>
          <div className="flex gap-2 mt-2">
            {monster.requirements.map((req, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-red-200 rounded-full text-red-800 font-bold text-sm"
              >
                {req}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4 w-full">
          <div className="font-semibold text-gray-700 mb-1">Your Hand:</div>
          <div className="flex gap-2 flex-wrap">
            {hand.map((card, idx) => (
              <button
                key={card.id}
                className="px-4 py-2 bg-blue-200 rounded-lg text-blue-900 font-bold shadow hover:bg-blue-300 disabled:opacity-50"
                onClick={() => playCard(idx)}
                disabled={roundTransition}
              >
                {card.element}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4 w-full">
          <div className="font-semibold text-gray-700 mb-1">Played Cards:</div>
          <div className="flex gap-2">
            {played.map((card, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-300 rounded-lg text-gray-700 font-bold text-sm"
              >
                {card.element}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 w-full justify-center">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg font-bold shadow hover:bg-green-600"
            onClick={endTurn}
            disabled={roundTransition}
          >
            End Turn
          </button>
          <button
            className="px-4 py-2 bg-yellow-400 text-white rounded-lg font-bold shadow hover:bg-yellow-500"
            onClick={drawCard}
            disabled={deckIndex >= deck.length || roundTransition}
          >
            Draw Card
          </button>
        </div>
        {message && (
          <div className="mt-4 text-center text-lg font-semibold text-purple-700">
            {message}
          </div>
        )}
      </div>
      <div className="text-white opacity-70 text-sm">
        Cards left in deck: {deck.length - deckIndex}
      </div>
    </div>
  );
}
