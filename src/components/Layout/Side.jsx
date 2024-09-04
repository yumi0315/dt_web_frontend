import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../CSS/side.css";

const Side = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/abc");
  }

  return (
    <aside
      style={{
        flexDirection: "column",
        height: "800px",
        Width: "8%",
        background: "#0F16A4",
        padding: "10px",
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
            size="2x"
            style={{ color: "white" }}
            onClick={handleClick}
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
            size="2x"
            style={{ color: "white" }}
          />
        </div>

        {/* 추가 링크들 */}
      </nav>
    </aside>
  );
};

export default Side;
