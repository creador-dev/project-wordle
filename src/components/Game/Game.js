import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../TextInput";
import Guess from "../Guess";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmit(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("You have used all your guesses");
      return;
    }
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <Guess guesses={guesses} answer={answer} />
      {/* <Guesses guesses={guesses} /> */}
      <TextInput guesses={guesses} handleSubmit={handleSubmit} />
      <Banner guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
