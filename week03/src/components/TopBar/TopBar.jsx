import "./TopBar.css";
import left from "/src/assets/direction=left.svg";

function TopBar() {
  return (
    <div className="login--top-bar">
      <a href="/">
        <img src={left} alt="뒤로 가기 버튼" />
      </a>

      <div role="search" className="category-search">
        <label htmlFor="categorySearch" className="sr-only">
          관심분야 검색
        </label>
        <input
          type="search"
          id="categorySearch"
          className="label-s"
          name="categorySearch"
          placeholder="분야(이름)로 검색 (ex.프론트)"
          aria-label="관심분야 검색"
        />
      </div>
    </div>
  );
}

export default TopBar;
