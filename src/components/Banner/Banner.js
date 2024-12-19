import React from "react";

function Banner({ gameStatus, numOfGuesses }) {
  return (
    <div className={gameStatus === "won" ? "happy banner" : "sad banner"}>
      {gameStatus === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
