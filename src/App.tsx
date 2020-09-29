import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The counter is:
        <span data-test="count">
          {count}
        </span>
      </h1>
      <div data-test="error-message" className={`error ${error ? '' : 'hidden'}`}> The counter cannot go below 0</div>
      <button
        data-test="increment-button"
        onClick={() => {
          if (error) {
            setError(false)
          }
          setCount(count + 1)
        }}
      >increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          } else {
            setError(true)
          }
        }}
      >Decrement counter</button>
    </div>
  );
}

export default App;
