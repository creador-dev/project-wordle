import React from "react";
function TextInput({ handleSubmit }) {
  const [inputText, setInputText] = React.useState("");

  function formSubmit(e) {
    e.preventDefault();
    console.log(inputText);
    if (inputText.length !== 5) {
      window.alert("Please enter a 5-letter word");
      return;
    }
    handleSubmit(inputText);
    setInputText("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={formSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        value={inputText}
        onChange={(e) => {
          const value = e.target.value.toUpperCase();
          setInputText(value);
        }}
      />
    </form>
  );
}

export default TextInput;
