import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

//1. "/" : 모든 일기를 조회하는 home
//2. "/new" : 새로운 일기를 작성하는 페이지
//3. "/diary" : 일기를 상세히조회하는 페이지
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>new</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
