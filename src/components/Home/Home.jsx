import React from "react";
import "../../CSS/Home.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ToDoList from "./ToDoList";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="Home">
      <div className="container1">
        <div className="Title">
          <h1>공정현황 대시보드</h1>
        </div>
        <div className="Information">
          <h4>
            최종 개정도 관리, 개정도 작업 현황, 용접률 불량 관리를 관리합니다.
          </h4>
        </div>
        <div className="Link">
          <div className="Box" onClick={() => handleClick("/Page2")}>
            <img
              src="/First.jpg"
              alt="First"
              className="IMG"
              style={{ width: "250px", height: "250px" }}
            />
            <div className="text">
              <h2>20%</h2>
              설계 변경 미완료율
            </div>
          </div>
          <div className="Box" onClick={() => handleClick("/Page3")}>
            <img
              src="/Second.jpg"
              alt="Second"
              className="IMG"
              style={{ width: "250px", height: "250px" }}
            />
            <div className="text">
              <h2>10%</h2>
              DP 작업 미완료율{" "}
            </div>
          </div>
          <div className="Box" onClick={() => handleClick("/Page5")}>
            <img
              src="/Third.jpg"
              alt="Third"
              className="IMG"
              style={{ width: "250px", height: "250px" }}
            />
            <div className="text">
              <h2>0.5%</h2>
              용접 불량률{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <ToDoList />
      </div>
    </div>
  );
};

export default Home;
