import React, { useState } from 'react';
import { increment, decrement } from './logic/counterLogic';
import { double, isEven } from './utils/utils';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => increment(prevCount));
  };

  const handleDecrement = () => {
    setCount(prevCount => decrement(prevCount));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hybrid Paradigm Example</h1>
      <p>Count: {count}</p>
      <p>Double: {double(count)}</p>
      <p>Is Even: {isEven(count) ? 'Yes' : 'No'}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
