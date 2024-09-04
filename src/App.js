import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<div>test</div>} />
        {/* <Route path={"/"} element={<Main />} />
        <Route path={"gallery"} element={<Gallery />} />
        <Route path={"guestbook"} element={<Guestbook />} />

        <Route path={"user/join"} element={<Join />} />
        <Route path={"user/login"} element={<Login />} />
        <Route path={"user/settings"} element={<Settings />} />

        <Route element={<About />}>
          <Route path={"about/me"} element={<Me />} />
          <Route path={"about/location"} element={<Location />} />
        </Route>

        <Route path={"*"} element={<Error404 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
