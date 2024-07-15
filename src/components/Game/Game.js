import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function GameResult({ won, numberOfGuesses }) {
  if (won) {
    return (<div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </div>)
  }
  return (<div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>)
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [won, setWon] = React.useState(false);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess]
    if (answer === guess) {
      setWon(true);
      setGameOver(true);
    }
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
    setGuesses(nextGuesses);
  }

  return <>
    <Guesses guesses={guesses} answer={answer} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} />
    {gameOver  && <GameResult won={won} numberOfGuesses={guesses.length} />}
  </>;
}

export default Game;
