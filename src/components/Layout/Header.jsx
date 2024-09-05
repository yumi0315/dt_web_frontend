// Header.jsx
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import "../../CSS/header.css"; // CSS 파일을 불러옴

// 컴포넌트 정의
function Header() {
  return (
    <div className="HeaderContainer">
      <div className="TitleContainer">
        <img src="/4FRONTlogo.png" alt="Logo" />
        <h3>F4RONT Dashboard</h3>
      </div>
      <button className="button LogOut">
        로그아웃
        <LogoutIcon />
      </button>
    </div>
  );
}

export default Header;
