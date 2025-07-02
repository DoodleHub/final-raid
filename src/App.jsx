import React, { useState } from 'react';
import Lobby from './Lobby';
import Game from './Game';

function App() {
  const [page, setPage] = useState('lobby');
  return (
    <div>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          className={`px-3 py-1 rounded ${
            page === 'lobby'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setPage('lobby')}
        >
          Lobby
        </button>
      </div>
      {page === 'lobby' ? (
        <Lobby onStartGame={() => setPage('game')} />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
