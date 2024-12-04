import { useState } from "react";

function useInput() {
  //자바스크립트 함수에서 앞에 use키워드를 사용하여 커스텀 훅을 만든다.
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
