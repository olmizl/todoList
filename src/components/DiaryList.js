import DiaryItem from "./DiaryItem";

export default function DiaryList({ diaryList }) {
  console.log(diaryList);
  const total = diaryList.length;
  return (
    <div className="diaryList">
      <div className="container">
        <div className="titleBox">
          <h2>TODO LIST</h2>
          <p className="total">{total}개의 할일이 있습니다.</p>
        </div>
        <ul className="list">
          {diaryList.map((item, idx) => {
            return <DiaryItem key={idx} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
