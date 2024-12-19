import React from "react";

function Banner({ gameStatus, numOfGuesses, answer }) {
  return (
    <div className={gameStatus === "won" ? "happy banner" : "sad banner"}>
      {gameStatus === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
