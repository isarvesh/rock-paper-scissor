import React from 'react';

function Player({ handleClick, disabled }) {
  return (
    <div>
      <h2>Player</h2>
      <button onClick={() => handleClick('rock')} disabled={disabled}>Rock</button>
      <button onClick={() => handleClick('paper')} disabled={disabled}>Paper</button>
      <button onClick={() => handleClick('scissors')} disabled={disabled}>Scissors</button>
    </div>
  );
}

export default Player;
