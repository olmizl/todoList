import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertDiary } from "../store/diary";
export default function DiaryEditor() {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.count;
  });

  const writerRef = useRef();
  const contentsRef = useRef();
  const [diaryItem, setDiaryItem] = useState({
    writer: "",
    contents: "",
    emotion: 1,
  });
  const insertDiaryItem = function () {
    if (diaryItem.writer.length < 3) {
      alert("글쓴이는 최소 3글자 이상이어야 합니다.");

      writerRef.current.focus();
      return false;
    } else if (diaryItem.contents.length < 10) {
      alert("내용은 최소 10글자 이상이어야 합니다.");
      contentsRef.current.focus();
      return false;
    }
    dispatch(insertDiary({ id: count + 1, date: new Date().getTime(), ...diaryItem }));
    alert("TODO LIST가 저장되었습니다.");
    setDiaryItem({
      writer: "",
      contents: "",
      emotion: 1,
    });
  };
  function changeDiaryItem(e) {
    setDiaryItem({
      ...diaryItem,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="container addBox">
      <div className="section">
        <input type="text" name="writer" value={diaryItem.writer} id="" placeholder="글쓴이를 입력해 주세요." ref={writerRef} onChange={changeDiaryItem} />
      </div>
      <div className="contents section">
        <textarea name="contents" id="" cols="30" rows="10" value={diaryItem.contents} placeholder="내용을 입력해 주세요." ref={contentsRef} onChange={changeDiaryItem}></textarea>
      </div>
      <div className="section">
        <span>중요도는 얼마인가요?</span>
        <select name="emotion" id="" value={diaryItem.emotion} onChange={changeDiaryItem}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="btns section">
        <button className="btn btnSave" onClick={insertDiaryItem}>
          Add New Task
        </button>
      </div>
    </div>
  );
}
