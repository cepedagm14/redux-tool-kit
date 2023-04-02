import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "../app/features/counter/CounterSlice";
const Counter = () => {
  //redux
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  //states
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;


  //features

  const resetAll = () => {
     setIncrementAmount(0)
     dispatch(reset())
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <hr />
      <div>
        <label htmlFor="">increment by amount</label>
        <input type="text" onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount} />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          add value
        </button>
        <button onClick={resetAll}>Reset All</button>
      </div>
    </>
  );
};

export default Counter;
