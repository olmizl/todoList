export const ACTIONS_TYPES = {
  INSERT_DIARY: "insertDiary",
  MODIFY_DIARY: "modifyDiary",
  CHECK_DIARY: "checkDiary",
  DELETE_DIARY: "deleteDiary",
};
// 여기에 여러가지 속성들을 넣어서  쓰면 된다.
const initState = {
  count: 3,
  diaryList: [
    { id: 0, writer: "이미지", contents: "오늘 할일 정리해서 기록하기", emotion: 5, date: new Date().getTime(), isDone: false },
    { id: 1, writer: "김은희", contents: "텀블러 세척 후 커피 받아 놓기 , 물 떠놓기", emotion: 3, date: new Date().getTime(), isDone: false },
    { id: 2, writer: "이정진", contents: "오늘의 뉴스 시청하기 / 회의 안건 기록해 놓기", emotion: 2, date: new Date().getTime(), isDone: false },
    { id: 3, writer: "박해인", contents: "전일 매출 기록 분석하기, 전월 매출 평균 기록하기", emotion: 4, date: new Date().getTime(), isDone: false },
  ],
};

export const insertDiary = (diaryItem) => {
  console.log("store에 있는 diaryItem", diaryItem);
  return {
    type: ACTIONS_TYPES.INSERT_DIARY,
    payload: diaryItem,
  };
};

export const deleteDiary = (id) => {
  return {
    type: ACTIONS_TYPES.DELETE_DIARY,
    payload: { id },
  };
};

export const modifyDiary = (id, localContents) => {
  return {
    type: ACTIONS_TYPES.MODIFY_DIARY,
    payload: { id, localContents },
  };
};

export const checkDiary = (id) => {
  return {
    type: ACTIONS_TYPES.CHECK_DIARY,
    payload: { id },
  };
};

const diary = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.INSERT_DIARY: {
      const newDiaryItem = {
        ...action.payload,
      };
      return {
        count: state.count + 1,
        diaryList: [newDiaryItem, ...state.diaryList],
      };
    }

    case ACTIONS_TYPES.MODIFY_DIARY: {
      const id = action.payload.id;
      const localContents = action.payload.localContents;
      return {
        count: state.count,
        diaryList: state.diaryList.map((item, idx) => {
          return item.id === id ? { ...item, contents: localContents } : item;
        }),
      };
    }

    case ACTIONS_TYPES.CHECK_DIARY: {
      const id = action.payload.id;

      return {
        count: state.count,
        diaryList: state.diaryList.map((item) => {
          return item.id === id ? { ...item, isDone: !item.isDone } : item;
        }),
      };
    }
    case ACTIONS_TYPES.DELETE_DIARY: {
      return {
        count: state.count - 1,

        diaryList: state.diaryList.filter((item, idx) => {
          return item.id !== action.payload.id;
        }),
      };
    }

    default:
      return state;
  }
};
export default diary;
