import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <aside style={{ width: "200px", background: "#f4f4f4" }}>
          {/* 사이드바 내용 */}
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/guestbook">Guestbook</a>
              </li>
              {/* 추가 링크들 */}
            </ul>
          </nav>
        </aside>
        <main style={{ flex: 1, padding: "20px" }}>
          {/* 현재 라우트에 해당하는 컴포넌트가 여기에 렌더링됩니다. */}
          <Outlet />
        </main>
      </div>
      <footer>
        {/* 푸터 내용 */}
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default Layout;
