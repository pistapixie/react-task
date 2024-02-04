import Logo from "../components/Logo/Logo";
import LinkButton from "../components/LinkButton/LinkButton";

import "./App.css";

function App() {
  return (
    <>
      <div className="start-container">
        <Logo />
        <div className="link-container">
          <LinkButton
            className="label-s go-register"
            ariaLabel="회원가입 페이지로 이동"
            href="/"
          >
            시작하기
          </LinkButton>
          <LinkButton
            className="paragraph-m go-login"
            ariaLabel="로그인 페이지로 이동"
            href="/"
          >
            이미 계정이 있나요? <span className="paragraph-m">로그인</span>
          </LinkButton>
        </div>
      </div>
    </>
  );
}

export default App;
