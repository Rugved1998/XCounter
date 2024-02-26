import React, { useState } from 'react';


export default function App()  {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Increment the count value
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    // Decrement the count value
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button data-testid="incrementButton" onClick={handleIncrement}>Increment</button>
      <button data-testid="decrementButton" onClick={handleDecrement}>Decrement</button>
    </div>
  );
};


