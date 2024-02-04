import "./Logo.css";

const Logo = () => {
  return (
    <div className="login--logo-container">
      <h1 className="login--logo">
        <img src="/euid.png" alt="이듬 로고" />
      </h1>
      <h2 className="heading-s">당신 곁에 엔터이듬</h2>
      <p className="paragraph-m">
        <span lang="en">With EUID's</span>
        <span lang="ko">함께 성장하기</span>
      </p>
      <p className="paragraph-m">함께 배우고 적용하며 성장해보세요!</p>
    </div>
  );
};

export default Logo;
