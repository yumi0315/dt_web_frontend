import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Page4 from "./components/Page4/Page4";

import "./App.css";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true); //임의로 true를 주고 코드를 작성. false로 수정해야 함.

  const handleLoginSuccess = () => {
    setIsLogin(true);
  };

  return (
    <Router>
      <Routes>
        {isLogin ? (
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Main />} /> {/* 기본 경로 */}
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
            {/*<Route path="guestbook" element={<Guestbook />} /> 추가할 페이지들
          <Route path="*" element={<Error404 />} /> 404 페이지 */}
          </Route>
        ) : (
          <Route
            path={"/"}
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
