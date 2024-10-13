import "./App.css";
import React, { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrease = () => {
    if(count>0){
      setCount(count - 1);
  };
    }

  return (
    <div className="return">
      <div className="box">
        <h1 id="head">Counter App</h1>
        <div className="btn">
          <button className="btn-dec"onClick={increase}>INCREMENT</button>
          <button className="btn-dec"onClick={reset}>RESET</button>
          <button className="btn-dec"onClick={decrease}>DECREMENT</button>
        </div>
        <p>{count}</p>
      </div>
    </div>
  );
};
export default App;
