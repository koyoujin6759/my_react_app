import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); //구조분해할당 , 0은 초기값
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
