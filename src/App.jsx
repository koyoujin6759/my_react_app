import "./App.css";
import { useState, useEffect } from "react";
import Register from "./components/Register";
import HookExam from "./components/HookExam";
import Register2 from "./components/Register2";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
    console.log("count", count); // state함수는 비동기이기때문에 setcount함수실행 이전의값을 콘솔에찍는다.
  };

  useEffect(() => {
    console.log(`${count}`); //변경된 state값을 바로 출력함.
  }, [count]); //의존성 배열, deps

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        {/* viewer컴포넌트에 Count props 전달 */}
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>

      {/* <Register2 /> */}
      {/* <HookExam /> */}
    </div>
  );
}

export default App;
