import React, { useState, useCallback } from "react";
import Child from "./Child"; // Import Child Component

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>React useCallback Example</h1>
      <p>Current Count: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

export default Parent;