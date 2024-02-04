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
