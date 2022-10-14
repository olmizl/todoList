# Todo List
오늘 해야할 일의 추가, 수정, 체크, 삭제 기능이 가능한 Todo List 페이지입니다.

# `Site`
https://dainty-dasik-2993ea.netlify.app/

## 주요기능
[1] 반복되는 component를 map함수를 이용하여 차례대로 출력하는 기능 구현</br>
[2] useRef 와 useState Hook을 이용하여 상태 , 값 변경시 자동 반영되게 기능 구현</br>
[3] react-redux 이용하여 방대한 양의 props 저장 및 불러오는 기능 구현</br>
[4] react-redux 의 store.js에 저장된 props의 id를 비교하여 삭제 기능 구현 </br>


### 사용한 SKILLS 
React , CSS , JAVA-SCRIPT

### 제작기간
6일 소요

### 제작 기여도
100% (개인프로젝트)

### 학습 내용
 React의 useSelector , useEffect 등 다양한 Hook의 기본 사용법과 많은 props를 효율적으로 전달받기 위해 React- Redux 를 사용해봄으로써 기본적인 기능을 함유하게되었습니다.
 
 ## 메인 페이지
![todomain](https://user-images.githubusercontent.com/111400649/195521554-85dd849f-9fb4-4ecb-b90a-07b272d2113a.PNG)
 </br>
 ## 기능 구현[1]
![todo00](https://user-images.githubusercontent.com/111400649/195521559-95af6c0a-d0ad-4812-bb4e-9fee94f1af03.PNG)</br>
diaryList 라는 component를 구성하여 새로운 항목이 일정한 형식에 맞춰 추가되도록 기능 구현
</br>

 ## 기능 구현 [2]
![todo02](https://user-images.githubusercontent.com/111400649/195535871-e37f25b6-592c-4533-9739-118396987ce3.PNG)</br>
useRef Hook을 이용하여 렌더링없이 변경된 state값을 가져와 생성하였으며 if조건을 걸어 최소 글자수를 설정하여 조건에 부합하지 않을시 return false 기능 구현
</br>
## 기능 구현 [3]
![todo01](https://user-images.githubusercontent.com/111400649/195521561-ac6ab9e1-f529-4808-8268-b8e7eeb2e3b8.PNG)</br>
redux 의 store.js action의 체크시 작동하는 변수를 부여하여 완료된 항목은 style의 변화 부여
</br>
## 기능 구현 [4]
![todo03](https://user-images.githubusercontent.com/111400649/195536034-ad953878-8de3-4a83-a9cd-ea89ef8ea462.PNG)</br>
redux 의 store.js action의 삭제시 작동하는 변수를 부여하여 삭제할 항목의 id가 일치시 사라지게 하는 기능 구현
 
