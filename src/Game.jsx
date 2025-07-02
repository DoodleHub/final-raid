import React, { useState, useEffect } from 'react';
import { DECKS } from './constants';
import { DOORS } from './constants';

const HAND_SIZE = 3;

function generateDeckFromColor(deckColor) {
  if (!deckColor || !DECKS[deckColor]) return [];
  const resources = DECKS[deckColor].resources;
  // Flatten resources into an array of card objects
  console.log('resources', resources);
  let deck = [];
  let id = 1;
  Object.entries(resources).forEach(([type, countOrCombos]) => {
    if (type === 'combo') {
      countOrCombos.forEach((combo) => {
        deck.push({ id: id++, element: 'Combo', combo });
      });
    } else {
      for (let i = 0; i < countOrCombos; i++) {
        deck.push({
          id: id++,
          element: type.charAt(0).toUpperCase() + type.slice(1),
        });
      }
    }
  });
  // Shuffle deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export default function Game({ selectedDeck }) {
  const [deck] = useState(() => generateDeckFromColor(selectedDeck));
  const [hand, setHand] = useState(() => deck.slice(0, HAND_SIZE));
  const [deckIndex, setDeckIndex] = useState(HAND_SIZE);
  const [round, setRound] = useState(1);
  const [monster, setMonster] = useState(() => DOORS[0]);
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
    // Flatten requirements
    const requirements = [];
    Object.entries(monster.health).forEach(([type, count]) => {
      for (let i = 0; i < count; i++) {
        requirements.push(type.charAt(0).toUpperCase() + type.slice(1));
      }
    });
    // Expand played resources, treating combos as multiple resources
    let playedResources = [];
    played.forEach((card) => {
      if (card.element === 'Combo' && card.combo) {
        Object.entries(card.combo).forEach(([type, count]) => {
          for (let i = 0; i < count; i++) {
            playedResources.push(type.charAt(0).toUpperCase() + type.slice(1));
          }
        });
      } else {
        playedResources.push(card.element);
      }
    });
    // Try to satisfy each requirement with played resources
    for (let req of requirements) {
      const idx = playedResources.indexOf(req);
      if (idx === -1) return false;
      playedResources.splice(idx, 1);
    }
    return true;
  }

  // Automatically advance to next round if defeated
  useEffect(() => {
    if (played.length > 0 && canDefeatMonster()) {
      setMessage(`You defeated ${monster.name}!`);
      setRoundTransition(true);
      setTimeout(() => {
        setRound((prev) => prev + 1);
        setMonster(DOORS[round] || { name: 'No more monsters!', health: {} });
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

  // If no deck (shouldn't happen), show error
  if (!deck || deck.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 to-blue-800 p-4">
        <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
          Final Raid: Game
        </h1>
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 w-full max-w-lg flex flex-col items-center mb-6">
          <div className="text-red-600 font-bold text-lg">
            No deck selected or deck is empty.
          </div>
        </div>
      </div>
    );
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
            {Object.entries(monster.health).map(([type, count]) =>
              Array.from({ length: count }).map((_, j) => (
                <span
                  key={type + j}
                  className="px-3 py-1 bg-red-200 rounded-full text-red-800 font-bold text-sm"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              ))
            )}
          </div>
        </div>
        <div className="mb-4 w-full">
          <div className="font-semibold text-gray-700 mb-1">Your Hand:</div>
          <div className="flex gap-2 flex-wrap">
            {hand.map((card, idx) => (
              <button
                key={card.id}
                className="px-4 py-2 bg-blue-200 rounded-lg text-blue-900 font-bold shadow hover:bg-blue-300 disabled:opacity-50 flex items-center gap-2"
                onClick={() => playCard(idx)}
                disabled={roundTransition}
              >
                {card.element === 'Combo' && card.combo ? (
                  <>
                    {Object.entries(card.combo).map(([k, v]) => (
                      <span
                        key={k}
                        className={`inline-block px-2 py-1 rounded bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-xs mx-0.5`}
                        style={{ minWidth: 36, textAlign: 'center' }}
                      >
                        {v} {k.charAt(0).toUpperCase() + k.slice(1)}
                      </span>
                    ))}
                  </>
                ) : (
                  card.element
                )}
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
                {card.element === 'Combo' && card.combo ? (
                  <span className="ml-1 text-xs text-gray-600">
                    (
                    {Object.entries(card.combo)
                      .map(([k, v]) => `${v} ${k}`)
                      .join(' + ')}
                    )
                  </span>
                ) : null}
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
