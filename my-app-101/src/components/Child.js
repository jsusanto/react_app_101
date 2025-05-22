import React from "react";

function Child({ onIncrement }) {
  return (
    <button onClick={onIncrement}>
      Increment Count
    </button>
  );
}

export default Child;
