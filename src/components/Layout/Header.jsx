// Header.jsx
import React from "react";
import Button from "@mui/material/Button";
import "../../CSS/header.css"; // CSS 파일을 불러옴
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// 컴포넌트 정의
function Header() {
  return (
    <div className="HeaderContainer">
      <div className="TitleContainer">
        <img
          src="/Logo.png"
          alt="Logo"
          style={{ width: "200px", height: "40px" }}
        />
      </div>
      <div className="Logout">
        <Button
          variant="contained"
          sx={{
            color: "white",
            fontWeight: "bold",
            background: "#3490DD",
            width: "80px",
            fontSize: "10px",
            height: "25px",
            // "&:hover": {
            //   backgroundColor: "white",
            //   border: "1px solid #0F16A4",
            //   color: "#0F16A4",
            //   fontweight: "bold",
            // },
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
