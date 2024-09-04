import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Main />} /> {/* 기본 경로 */}
          {/* <Route path="gallery" element={<Gallery />} />
          <Route path="guestbook" element={<Guestbook />} /> 추가할 페이지들
          <Route path="*" element={<Error404 />} /> 404 페이지 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
