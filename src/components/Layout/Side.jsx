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
const randomQuotes = [
  "세상에 열정없이 이루어진 위대한 것은 없다.",
  "그 여정이 바로 보상이다.",
  "이 세상에 보장된 것은 아무것도 없으며 오직 기회만 있을 뿐이다.",
  "완벽함이 아니라 탁월함을 위해서 애써라.",
  "자신감은 위대한 과업의 첫 번째 요건이다.",
  "할 수 있는 일을 해낸다면 자신이 가장 놀라게 될 것이다.",
  "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
  "일 분 전만큼 먼 시간은 없다.",
  "인생은 과감한 모험이거나, 혹은 아무 것도 아니다",
  "실천이 말보다 낫다.",
  "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
  "무언가 배우며 생각하지 않으면 공허하고, 생각하며 배우지 않으면 위험하다",
  "과거를 기억하지 못하는 이들은 과거를 반복하기 마련이다.",
];

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
      <div className="quote">
        <span className="quote-label">오늘의 명언</span>
        <p>{randomQuote}</p>
      </div>
    </aside>
  );
};

export default Side;
