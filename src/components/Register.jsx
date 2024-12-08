import { useState, useRef, useEffect } from "react";
//간단한 회원가입폼
//1.이름
//2.생년월일
//3.국적
//4.자기소개
const Register = () => {
  //   const [name, setName] = useState("");
  //   //input에 입력된값을 name에 저장함. setname은 name을 변화시키는 함수
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0); // 컴포넌트가 리렌더링 되어도 값이 리셋이되지않음.
  const inputRef = useRef();
  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState({
    name: false,
    birth: false,
    country: false,
    bio: false,
  });

  const onChange = (e) => {
    countRef.current++;
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (input.name === "") {
      inputRef.current.focus();
      setErr({
        ...err,
        name: true,
      });
    } else if (input.birth === "") {
      inputRef.current.focus();
      setErr({
        ...err,
        name: false,
        birth: true,
      });
    } else if (input.country === "") {
      setErr({
        ...err,
        name: false,
        birth: false,
        country: true,
      });
    } else if (input.bio === "") {
      setErr({
        name: false,
        birth: false,
        country: false,
        bio: true,
      });
    } else {
      setErr({
        name: false,
        birth: false,
        country: false,
        bio: false,
      });
      setMsg(!msg);
    }
  };

  //   const onChangeName = (e) => {
  //     // console.log(e.target.value);
  //     // setName(e.target.value);

  //     setInput({
  //       ...input, //관련없는 값은 그대로 유지.
  //       name: e.target.value, //변경하고자하는 값만 작성
  //     });
  //   };

  //   const onChangeBirth = (e) => {
  //     // setBirth(e.target.value);

  //     setInput({
  //       ...input, //관련없는 값은 그대로 유지.
  //       birth: e.target.value, //변경하고자하는 값만 작성
  //     });
  //   };

  //   const onChangeCountry = (e) => {
  //     setCountry(e.target.value);

  //     setInput({
  //       ...input, //관련없는 값은 그대로 유지.
  //       country: e.target.value, //변경하고자하는 값만 작성
  //     });
  //   };

  //   const onChangeBio = (e) => {
  //     setBio(e.target.value);

  //     setInput({
  //       ...input, //관련없는 값은 그대로 유지.
  //       bio: e.target.value, //변경하고자하는 값만 작성
  //     });
  //   };

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"}></input>
      </div>
      <div>
        <span style={{ fontSize: 12, color: "red", display: err.name ? "block" : "none" }}>이름을 입력하세요</span>
      </div>
      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>
      <div>
        <span style={{ fontSize: 12, color: "red", display: err.birth ? "block" : "none" }}>생년월일을 입력하세요</span>
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <span style={{ fontSize: 12, color: "red", display: err.country ? "block" : "none" }}>국적을 선택하세요</span>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <div>
        <span style={{ fontSize: 12, color: "red", display: err.bio ? "block" : "none" }}>자기소개를 입력하세요</span>
      </div>
      <button onClick={onSubmit}>제출</button>

      <div style={{ display: msg === true ? "block" : "none" }}>{input.name}님, 가입을 환영합니다.</div>
    </div>
  );
};
export default Register;
