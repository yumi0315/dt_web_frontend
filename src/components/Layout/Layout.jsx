import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Side from "./Side";

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Side style={{ width: "300px" }} />
        <main style={{ flex: 1, padding: "20px" }}>
          {/* 현재 라우트에 해당하는 컴포넌트가 여기에 렌더링됩니다. */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
