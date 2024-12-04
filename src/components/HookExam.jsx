import useInput from "./../hooks/useInput";

//hook 관련팁
//1.함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2. usestate, useref는 hook이다.
//3. 조건문안에서 호출불가능.
//4. 커스텀 훅을 직접 만들수있다. use라는 접두사를 앞에 붙임.

const HookExam = () => {
  const state = useInput(); //hook은 함수내부에서만 호출가능.
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};
export default HookExam;
