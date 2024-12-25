import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true }); //뒤로가기방지옵션
    }
  };
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };
  return (
    <>
      <Header title={"일기 수정하기"} leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />} rightChild={<Button text={"삭제하기"} onClick={onClickDelete} type={"negative"} />} />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </>
  );
};
export default Edit;
