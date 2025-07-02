import React from 'react';
import { DECKS } from './constants';

const playerSlots = [
  { id: 1, name: 'Player 1' },
  { id: 2, name: 'Waiting...' },
  { id: 3, name: 'Waiting...' },
  { id: 4, name: 'Waiting...' },
  { id: 5, name: 'Waiting...' },
];

export default function Lobby({ onStartGame, selectedDeck, onDeckChange }) {
  const deckColors = Object.keys(DECKS);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800">
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
        Final Raid Lobby
      </h1>
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Players</h2>
        <ul className="w-full mb-6">
          {playerSlots.map((slot) => (
            <li
              key={slot.id}
              className="flex items-center justify-between px-4 py-2 mb-2 bg-gray-100 rounded-lg shadow-sm"
            >
              <span className="font-medium text-gray-700">{slot.name}</span>
              <span className="text-xs text-gray-400">Slot {slot.id}</span>
            </li>
          ))}
        </ul>
        <div className="mb-6 w-full">
          <label className="block font-semibold mb-2 text-gray-700">
            Pick your deck color:
          </label>
          <div className="flex flex-wrap gap-3 justify-center">
            {deckColors.map((color) => (
              <label
                key={color}
                className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer border ${
                  selectedDeck === color
                    ? 'border-blue-600 bg-blue-100'
                    : 'border-gray-300 bg-white'
                } transition`}
              >
                <input
                  type="radio"
                  name="deckColor"
                  value={color}
                  checked={selectedDeck === color}
                  onChange={() => onDeckChange(color)}
                  className="accent-blue-600"
                />
                <span
                  className="font-bold"
                  style={{ color: color.toLowerCase() }}
                >
                  {color}
                </span>
              </label>
            ))}
          </div>
        </div>
        <button
          className="w-full py-3 rounded-lg bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition"
          onClick={onStartGame}
          disabled={!selectedDeck}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
