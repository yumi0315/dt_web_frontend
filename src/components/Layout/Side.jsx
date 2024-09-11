import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faGears, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../CSS/side.css";
import React, { useState } from "react";

const menuItems = [
  { id: 1, text: "메뉴1", path: "/page1", icon: faChartSimple },
  { id: 2, text: "메뉴2", path: "/page2", icon: faUser },
  { id: 3, text: "메뉴3", path: "/page3", icon: faGears },
  { id: 4, text: "메뉴4", path: "/page4", icon: faGears },
  { id: 5, text: "메뉴5", path: "/page5", icon: faGears },
  { id: 6, text: "메뉴6", path: "/page6", icon: faGears },
];

const Side = () => {
  const [activePath, setActivePath] = useState("/");
  const navigate = useNavigate();

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

        {/* <div className="Menu" onClick={() => handleClick("/page2")}>
          <FontAwesomeIcon
            icon={faGears}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
          />
          <h5>메뉴 2번</h5>
        </div>
        <div className="Menu" onClick={() => handleClick("/page3")}>
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
          />
          <h5>메뉴 3번</h5>
        </div>
        <div className="Menu" onClick={() => handleClick("/page4")}>
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
          />
          <h5>메뉴 4번</h5>
        </div>
        <div className="Menu" onClick={() => handleClick("/page5")}>
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
          />
          <h5>메뉴 5번</h5>
        </div>
        <div className="Menu" onClick={() => handleClick("/page6")}>
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
          />
          <h5>메뉴 6번</h5>
        </div> */}
        {/* 추가 링크들 */}
      </nav>
    </aside>
  );
};

export default Side;
