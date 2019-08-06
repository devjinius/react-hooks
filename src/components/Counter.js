import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(prev => prev + 1);
  };

  const decrease = () => {
    setNumber(prev => prev - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export default Counter;
