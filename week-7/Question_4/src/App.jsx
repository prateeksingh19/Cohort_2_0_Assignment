import React, { useState, useMemo } from "react";
import "./App.css";

function generateRandomSentences(length, words) {
  const SENTENCE = [];
  for (let i = 0; i < length; i++) {
    let sentence = "";
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
    SENTENCE.push(sentence);
  }
  return SENTENCE;
}

function App() {
  const [length, setLength] = useState(0);
  const [show, setShow] = useState(false);
  const [sentences, setSentences] = useState([]);
  const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];

  const generateSentences = () => {
    setSentences(generateRandomSentences(length, words));
    setShow(true);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="titleDiv">Para Generator</div>
        <div className="inputDiv">
          <input
            type="number"
            name="length"
            placeholder="Enter Number of Words"
            onChange={(e) => {
              setLength(parseInt(e.target.value, 10));
            }}
          />
          <button onClick={generateSentences}>Generate</button>
        </div>
        {show && <div className="statementDiv">{sentences.join("")}</div>}
      </div>
    </>
  );
}

export default App;
