import React, { useState } from "react";

const Counter = ({ decrement, increment }) => {
  return (
    <div>
      <button onClick={decrement}>MINUS</button>
      <button onClick={increment}>PLUS</button>
    </div>
  );
};

export default Counter;
