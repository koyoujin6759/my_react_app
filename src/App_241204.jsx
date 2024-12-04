import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* <h1>{light}</h1> */}
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
