import React, { useState } from 'react';

function testlogin2() {
  // Define state variable count and a function setCount to update it
  const [count, setCount] = useState(0);

  console.log("hel");

  // Event handler to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default testlogin2;
