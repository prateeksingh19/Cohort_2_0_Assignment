import { useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  const increase = useCallback(
    function handleIncrement() {
      setCount((prevCount) => prevCount + 1);
    },
    [count]
  );

  const decrease = useCallback(
    function handleIncrement() {
      setCount((prevCount) => prevCount - 1);
    },
    [count]
  );
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons onIncrement={increase} onDecrement={decrease} />
    </div>
  );
}

const CounterButtons = ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);
