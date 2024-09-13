// Header.jsx
import React from "react";
import Button from "@mui/material/Button";
import "../../CSS/header.css"; // CSS 파일을 불러옴
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// 컴포넌트 정의
function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="HeaderContainer">
      <div className="TitleContainer" onClick={handleClick}>
        <img src="/Logo.png" alt="Logo" />
      </div>
      <div className="Logout">
        <div className="User">
          <FontAwesomeIcon
            icon={faCircleUser}
            size="xl"
            style={{ color: "#3456dd" }}
          />
          <p style={{ fontSize: "14px" }}>관리자님, 환영합니다</p>
        </div>
        <Button
          variant="contained"
          sx={{
            color: "#edeeff",
            fontWeight: "bold",
            background: "#3490DD",
            width: "80px",
            fontSize: "10px",
            height: "29px",
            fontFamily: "Spoqa-Bold",
          }}
          className="LogoutBtn"
        >
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Header;
