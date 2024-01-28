## 리액트 2주차 과제

- [x] 바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택.
- [x] 바닐라 프로젝트에서 활용했던 데이터베이스의 데이터를 JSON 파일로 로컬 드라이브에 저장.
- [x] JSON 데이터를 불러와 마크업에 연결하여 UI를 구현. 필요한 경우, 리스트 렌더링을 활용.

### 1. 바닐라 프로젝트 스택
- 시안 : 엔터 이듬 (모바일)
- FE : HTML, Pure Css, Vanilla Javascript
- DB : PocketHost
- 기타 : Vite, Git, Netlify 

### 2. 카테고리 리스트 선택
- 포켓호스트 DB에서 데이터를 가져와 동적으로 랜더링되는 카테고리 리스트
- 해당 UI 조각을, JSON에서 데이터를 가져와 리스트 랜더링하는 리액트 방식으로 구현할 것.

<img src="./public/readme/바닐라.png" width="750" height="auto" >

### 3. App.jsx
```jsx
import TopBar from "../components/TopBar/TopBar";
import Button from "../components/Button/Button";
import {
  CategoryCard,
  CategoryCardList,
} from "../components/CategoryCard/CategoryCard";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <TopBar />
        <h1 className="heading-s">관심분야를 선택해주세요!</h1>
        <div className="category-wrapper">
          <CategoryCardList>
            <CategoryCard />
          </CategoryCardList>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
```
- React Developer Tool로 확인한 컴포넌트 구조
<img src="./public/readme/컴포넌트트리.png" width="250" height="auto" >

### 4. CategoryCard.jsx
```jsx
import "./CategoryCard.css";
import plus from "/src/assets/plus.svg";
import categoryData from "../../data/category.json";

console.log(categoryData.items);

export function CategoryCard() {
  const { items } = categoryData;
  const result = items.map(({ id, mainCategory, subCategory }) => {
    return (
      <li key={id}>
        <button type="button" className="category-card">
          <div className="category-name">
            <p className="paragraph-s">{mainCategory}</p>
            <p className="heading-s">{subCategory}</p>
          </div>
          <img src={plus} alt="관심분야에 추가" />
        </button>
      </li>
    );
  });

  return <ul className="category-list">{result}</ul>;
}

export function CategoryCardList({ children }) {
  return <ul className="category-list">{children}</ul>;
}
```

