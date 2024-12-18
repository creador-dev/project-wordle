import React from "react";

function Banner({ guesses, answer }) {
  const isWinner = guesses[guesses.length - 1] === answer;
  const numOfGuesses = guesses.length;

  return (
    <>
      {isWinner ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
            </strong>
            .
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
