// Header.jsx
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import "../../CSS/header.css"; // CSS 파일을 불러옴

// 컴포넌트 정의
function Header() {
  return (
    <div className="HeaderContainer">
      <button className="button LogOut">
        로그아웃
        <LogoutIcon />
      </button>
    </div>
  );
}

export default Header;
