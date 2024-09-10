import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../CSS/side.css";

const Side = () => {
  const navigate = useNavigate();

  function handleClick1() {
    navigate("/page2");
  }
  function handleClick2() {
    navigate("/page3");
  }
  return (
    <aside
      style={{
        flexDirection: "column",
        height: "945px",
        Width: "120px",
        background: "#3490DD",
        padding: " 30px 10px",
      }}
    >
      {/* 헤더 내용 */}
      <nav>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#CBC28D" }}
            onClick={handleClick1}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            margin: "30px 0",
          }}
        >
          <FontAwesomeIcon
            icon={faGears}
            className="icon"
            size="xl"
            style={{ color: "#CBC28D" }}
            onClick={handleClick2}
          />
        </div>

        {/* 추가 링크들 */}
      </nav>
    </aside>
  );
};

export default Side;
