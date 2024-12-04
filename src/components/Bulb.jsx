import { useState } from "react";

const Bulb = ({}) => {
  // 전구라는 자식 컴포넌트
  //구조분해할당, light라는 매개변수를 부모로부터 받아옴.

  const [light, setLight] = useState("OFF"); //light는 state,setlight는 light state 값을 변경시키는 함수 , off는 초기값

  return (
    <div>
      {light === "ON" ? <h1 style={{ backgroundColor: "orange" }}>ON</h1> : <h1 style={{ backgroundColor: "gray" }}>OFF</h1>}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON"); //setlight함수호출
        }}
      >
        {light === "ON" ? "전구끄기" : "전구켜기"}
      </button>
    </div>
  );
};

export default Bulb;
