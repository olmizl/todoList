import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const dataId = useRef(0);

  const diaryData = useSelector((state) => {
    return state.diaryList;
  });

  const diaryAnalysis = useMemo(() => {
    console.log("할 일 분석을 시작합니다.");
    const total = diaryData.length;
    const good = diaryData.filter((item, idx) => {
      return item.emotion >= 3;
    }).length;
    const bad = total - good;
    const percent = Math.floor((good / total) * 100 * 100) / 100;
    if (total === 0) {
      return {
        good: 0,
        bad: 0,
        percent: 0,
        total: 0,
      };
    }

    return {
      good: good,
      bad: bad,
      percent: percent,
      total: total,
    };
  }, [diaryData.length]);

  return (
    <div className="App">
      <Header />
      <DiaryEditor />
      <div className="infoBox container">
        <dl>
          <dt>전체 : </dt>
          <dd>
            <strong>{diaryAnalysis.total}</strong>
          </dd>
        </dl>
        <dl>
          <dt>중요도 높은 일 : </dt>
          <dd>
            <strong>{diaryAnalysis.good}</strong>
          </dd>
        </dl>
        <dl>
          <dt>중요도 낮은 일 : </dt>
          <dd>
            <strong>{diaryAnalysis.bad}</strong>
          </dd>
        </dl>
        <dl>
          <dt>중요도 높은 퍼센트 : </dt>
          <dd>
            <strong>{diaryAnalysis.percent}%</strong>
          </dd>
        </dl>
      </div>
      <DiaryList diaryList={diaryData} />
      <Footer />
    </div>
  );
}

export default App;
