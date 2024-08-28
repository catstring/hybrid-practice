import React, { useState } from 'react';
// import { increment, decrement } from './logic/counterLogic';
import Counter from './classes/Counter';
import { double, isEven } from './utils/utils';

const App: React.FC = () => {

  // FP
  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount(prevCount => increment(prevCount));
  // };

  // const handleDecrement = () => {
  //   setCount(prevCount => decrement(prevCount));
  // };


  // OOP
  const [counter] = useState(new Counter(0));
  const [count, setCount] = useState(counter.getCount());

  const handleIncrement = () => {
    setCount(counter.increment());
  };

  const handleDecrement = () => {
    setCount(counter.decrement());
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
