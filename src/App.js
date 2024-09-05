import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

import "./App.css";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginSuccess = () => {
    setIsLogin(true);
  };

  return (
    <Router>
      <Routes>
        {isLogin ? (
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Main />} /> {/* 기본 경로 */}
            <Route path="abc" element={<div>1234</div>} />
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
