import React from 'react';

const playerSlots = [
  { id: 1, name: 'Player 1' },
  { id: 2, name: 'Waiting...' },
  { id: 3, name: 'Waiting...' },
  { id: 4, name: 'Waiting...' },
  { id: 5, name: 'Waiting...' },
];

export default function Lobby() {
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
        <button
          className="w-full py-3 rounded-lg bg-gray-400 text-white font-bold text-lg cursor-not-allowed opacity-60"
          disabled
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
