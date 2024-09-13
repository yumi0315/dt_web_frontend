import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faGears, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../CSS/side.css";
import React, { useState, useEffect } from "react";

// 메뉴 아이템 목록
const menuItems = [
  { id: 1, text: "메뉴1", path: "/page1", icon: faChartSimple },
  { id: 2, text: "메뉴2", path: "/page2", icon: faUser },
  { id: 3, text: "메뉴3", path: "/page3", icon: faGears },
  { id: 4, text: "메뉴4", path: "/page4", icon: faGears },
  { id: 5, text: "메뉴5", path: "/page5", icon: faGears },
  { id: 6, text: "메뉴6", path: "/page6", icon: faGears },
];

// 무작위 명언 텍스트 배열
const randomQuotes = ["a", "b", "c", "d", "e"];

const Side = () => {
  const [activePath, setActivePath] = useState("/");
  const [randomQuote, setRandomQuote] = useState("");
  const navigate = useNavigate();

  // 페이지 접속 시 무작위 명언을 설정하는 useEffect
  useEffect(() => {
    // 무작위로 명언 선택
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    setRandomQuote(randomQuotes[randomIndex]);
  }, []); // 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행

  const handleClick = (path) => {
    navigate(path);
    setActivePath(path);
  };

  return (
    <aside>
      {/* 헤더 내용 */}
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu ${activePath === item.path ? "active" : ""}`}
            onClick={() => handleClick(item.path)}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="icon"
              size="xl"
              style={{ color: "#EDEEFF" }}
            />
            <h5>{item.text}</h5>
          </div>
        ))}
      </nav>

      {/* 무작위 명언 표시 */}
      <div className="quote">{randomQuote}</div>
    </aside>
  );
};

export default Side;
