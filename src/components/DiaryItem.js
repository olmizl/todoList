import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteDiary, modifyDiary, checkDiary } from "../store/diary";
import DiaryList from "./DiaryList";
// import CheckBox from "../Styled/todoItem-Styled";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

export default function DiaryItem({ writer, id, emotion, contents, date }) {
  const [isEdit, setIsEdit] = useState(false);
  const [localContents, setLocalContents] = useState(contents);
  const contentsRef = useRef();
  const dispatch = useDispatch();

  const [isDone, setIsDone] = useState(true);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <li className={isDone ? "diaryItem" : "diaryItem liDone"}>
      <div className="info">
        <dl>
          <dt>글쓴이</dt>
          <dd>{writer}</dd>
        </dl>
        <dl>
          <dt>중요도</dt>
          <dd>{emotion}</dd>
        </dl>
        <dl>
          <dt>완성</dt>
          <dd>{isDone}</dd>
        </dl>
        <dl>
          <dt>날짜</dt>
          <dd>{new Date(date).toLocaleString()}</dd>
        </dl>
        <div className="btns">
          {isEdit ? (
            <>
              <button
                className="btn"
                onClick={() => {
                  if (localContents.length < 10) {
                    alert("내용은 10글자 이상이어야 합니다.");
                    contentsRef.current.focus();
                    return;
                  }
                  dispatch(modifyDiary(id, localContents));
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">done</span>
              </button>
              <button
                className="btn btnDelete"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">close</span>
              </button>
            </>
          ) : (
            <>
              {/* 펼쳐지지 않았을 때 */}
              <button
                className="btn"
                onClick={() => {
                  setIsEdit(true);
                  setLocalContents(contents);
                }}
              >
                <span className="material-icons">edit</span>
              </button>
              <button
                className="btn btnDelete"
                onClick={() => {
                  if (window.confirm(`${id + 1}번째 할일을 지우겠습니까?`)) {
                    dispatch(deleteDiary(id));
                  } else {
                    return;
                  }
                }}
              >
                <span className="material-icons">delete</span>
              </button>
            </>
          )}
        </div>
      </div>
      {isEdit ? (
        <>
          <textarea
            ref={contentsRef}
            value={localContents}
            onChange={(e) => {
              setLocalContents(e.target.value);
            }}
          ></textarea>
        </>
      ) : (
        <div className="contents">
          {/* <input type="checkbox" onClick={() => dispatch(checkDiary(id))}>
            {isDone ? <FaRegCheckSquare size="25px" color="#84a98c" /> : <FaRegSquare size="25px" />}
          </input> */}
          <input
            type="checkbox"
            checked={!isDone}
            onClick={() => {
              dispatch(checkDiary(id));
              setIsDone(!isDone);
              {
                isDone ? <FaRegCheckSquare size="25px" color="#84a98c" /> : <FaRegSquare size="25px" />;
              }
            }}
          />

          {contents}
        </div>
      )}
    </li>
  );
}
