import "./App.css";

import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="Master">
      <div className="counter">
        <button
          className="item counterBtn increaseBtn"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>

        <h1 className="item">{counter}</h1>

        <button
          className="item counterBtn decreaseBtn"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset!
      </button>
    </div>
  );
}

export default App;
