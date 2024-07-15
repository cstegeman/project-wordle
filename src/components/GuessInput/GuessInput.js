import React from 'react';
import React from 'react';

function GuessInput({ handleSubmitGuess, gameOver }) {
  const [guessInput, setGuessInput] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guessInput)

    setGuessInput('');
  }

  function handleChange(event) {
    const nextGuess = event.target.value.toUpperCase();

    setGuessInput(nextGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guessInput} onChange={handleChange} pattern="\S{5}" minLength={5} maxLength={5} required title="5 letter word" disabled={gameOver} />
    </form>
  );
}

export default GuessInput;
