import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player';
import Computer from './components/Computer';

const options = ['rock', 'paper', 'scissors'];

function App() {
  // state for user selection, computer selection, winner, and game status
  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [winner, setWinner] = useState(null);
  const [gameStatus, setGameStatus] = useState('waiting');

  // effect to generate computer selection and determine winner
  useEffect(() => {
    if (userSelection) {
      setGameStatus('playing');
      const randomIndex = Math.floor(Math.random() * options.length);
      const computerSelection = options[randomIndex];
      setComputerSelection(computerSelection);
      const userIndex = options.indexOf(userSelection);
      const computerIndex = options.indexOf(computerSelection);
      const diff = (userIndex - computerIndex + 3) % 3;
      setTimeout(() => {
        if (diff === 0) {
          setWinner('Tie!');
        } else if (diff === 1) {
          setWinner('You win!');
        } else {
          setWinner('Computer wins!');
        }
        setGameStatus('finished');
      }, 1000);
    }
  }, [userSelection]);

  // function to handle user selection
  const handleClick = (selection) => {
    if (gameStatus !== 'playing') {
      setUserSelection(selection);
      setComputerSelection(null);
      setWinner(null);
      setGameStatus('waiting');
    }
  };

  // function to handle play again button click
  const handlePlayAgain = () => {
    setUserSelection(null);
    setComputerSelection(null);
    setWinner(null);
    setGameStatus('waiting');
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <Player handleClick={handleClick} disabled={gameStatus === 'playing'} />
      {gameStatus === 'playing' && <Computer computerSelection={computerSelection} />}
      {gameStatus === 'finished' && (
        <div>
          <Computer computerSelection={computerSelection} />
          <h2>{winner}</h2>
          <button onClick={handlePlayAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
