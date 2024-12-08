import { useState, useRef } from "react";

const Register2 = () => {
  const [input, setInput] = useState({
    id: "", //id 초기값
    password: "", //password 초기값
  });

  const [err, setErr] = useState({
    id: false,
    password: false,
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [showPwd, setShowPwd] = useState({
    type: "password",
    visible: false,
  });
  const toggleShowPwd = () => {
    setShowPwd(() => {
      if (!showPwd.visible) {
        return {
          type: "text",
          visible: true,
        };
      } else {
        return {
          type: "password",
          visible: false,
        };
      }
    });
  };
  const [welcomeMsg, setWelcomeMsg] = useState(false);
  const onSubmit = () => {
    if (input.id === "") {
      setErr({
        ...err,
        id: true,
      });
    }
    if (input.id != "" && input.password == "") {
      setErr({
        id: false,
        password: true,
      });
    }
    if (input.id && input.password) {
      setErr({
        id: false,
        password: false,
      });
      setWelcomeMsg(!welcomeMsg);
    }
  };

  return (
    <>
      <div>
        <input type="text" name="id" value={input.id} onChange={onChange} placeholder="아이디" />
      </div>
      <div>
        <span style={{ color: "red", fontSize: "11px", display: err.id ? "block" : "none" }}>아이디를 입력하세요.</span>
      </div>
      <div>
        <input type={showPwd.visible ? "text" : "password"} name="password" value={input.password} onChange={onChange} placeholder="비밀번호" />
        <i className="material-symbols-outlined icon-pwd" style={{ fontSize: "20px", cursor: "pointer" }} onClick={toggleShowPwd}>
          {showPwd.visible ? "visibility" : "visibility_off"}
        </i>
      </div>
      <div>
        <span style={{ color: "red", fontSize: "11px", display: err.password ? "block" : "none" }}>비밀번호를 입력하세요</span>
      </div>
      <div>
        <button onClick={onSubmit}>로그인</button>
      </div>
      <div>
        <p style={{ display: welcomeMsg == true ? "block" : "none" }}>{input.id}님 환영합니다</p>
      </div>
    </>
  );
};
export default Register2;
