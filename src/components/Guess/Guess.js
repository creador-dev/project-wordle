import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  // Render a single guess row
  const renderGuessRow = (guess) => {
    if (!guess) {
      // Render an empty row
      return range(0, 5).map((index) => (
        <span className="cell" key={index}></span>
      ));
    }
    // Render a filled row based on the guess result
    const result = checkGuess(guess, answer);
    return result.map(({ letter, status }, index) => (
      <span className={`cell ${status}`} key={index}>
        {letter}
      </span>
    ));
  };

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p className="guess" key={num}>
          {renderGuessRow(guesses[num])}
        </p>
      ))}
    </div>
  );
}

export default Guess;
