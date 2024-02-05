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

  return <>{result}</>;
}

export function CategoryCardList({ children }) {
  return <ul className="category-list">{children}</ul>;
}
