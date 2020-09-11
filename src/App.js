import React, { useState } from "react";
import Increment from "./components/layout/Increment";
import Decrement from "./components/layout/Decrement";

// css style
import "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);

  // const add = () => {
  //     setCount( count + 1)
  // }

  // const minus = () => {
  //     setCount( count - 1)
  // }

  return (
    <React.Fragment>
      <h2>Increment and Decrement</h2>
      <div>Count Number: {count} </div>
      <div onClick={() => setCount(count + 1)}>
        <Increment />
      </div>
      <div onClick={() => setCount(count - 1)}>
        <Decrement />
      </div>
      <button className='btn'>Accept</button>
    </React.Fragment>
  );
};

export default App;
