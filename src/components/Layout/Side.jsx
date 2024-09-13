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
  // 검정치마의 antifreeze 많이많이 사랑해주세요
  // 앨범 내라 조휴일..
  "우린 오래 전부터 어쩔 수 없는 거였어",
  "우주 속을 홀로 떠돌며 많이 외로워하다가",
  "어느 순간 태양과 달이 겹치게 될 때면",
  "모든 것을 이해할 수 있을거야",
  "하늘에선 비가 내렸어",
  "뼛속까지 다 젖었어",
  "얼마 있다 비가 그쳤어",
  "대신 눈이 내리더니",
  "영화서도 볼 수 없던 눈보라가 불 때",
  "너는 내가 처음 봤던 눈동자야",
  "낯익은 거리들이 거울처럼 반짝여도",
  "네가 건네주는 커피 위에 살얼음이 떠도",
  "우리 둘은 얼어붙지 않을거야",
  "바닷 속의 모래까지 녹일거야",
  "춤을 추며 절망이랑 싸울거야",
  "얼어붙은 아스팔트 도시 위로",
  "너와 나의 세대가 마지막이면 어떡해?",
  "또다른 빙하기가 찾아오면은 어떡해",
  "긴 세월에 변하지 않을 그런 사랑은 없겠지만",
  "그 사랑을 기다려줄 그런 사람을 찾고 있어",
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
