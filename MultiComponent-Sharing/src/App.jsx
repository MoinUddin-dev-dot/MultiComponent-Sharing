
import './App.css'



import React, { useState } from "react";


function C({ x, onXClick }) {
  return (
    <div>
      <h2>Component C</h2>
      <p>X value: {x}</p>
      <button onClick={onXClick}>Click in C</button>
    </div>
  );
}

function B({ x, onXClick }) {
  return (
    <div>
      <h2>Component B</h2>
      <p>X value: {x}</p>
      <button onClick={onXClick}>Click in B</button>

      <C x={x} onXClick={onXClick} />
    </div>
  );
}

function D({ x, onXClick }) {
  return (
    <div>
      <h2>Component D</h2>
      <p>X value: {x}</p>
      <button onClick={onXClick}>Click in D</button>
    </div>
  );
}

function A() {
  const [x, setX] = useState(2);

  const handleClick = () => {
    setX(prevX => prevX + 1);
  };

  return (
    <div>
      <h1>Parent Component A</h1>
      <p>Parent X value: {x}</p>

      {/* Passing only to B and D */}
      <B x={x} onXClick={handleClick} />
      <D x={x} onXClick={handleClick} />
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="App">
      <A />
    </div>
  );
}

export default App;
