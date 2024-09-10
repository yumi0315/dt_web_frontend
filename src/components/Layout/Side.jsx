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
    navigate("/page4");
  }
  return (
    <aside>
      {/* 헤더 내용 */}
      <nav>
        <div className="Menu">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#CBC28D" }}
            onClick={handleClick1}
          />
          <h6>메뉴 1번</h6>
        </div>

        <div className="Menu">
          <FontAwesomeIcon
            icon={faGears}
            className="icon"
            size="xl"
            style={{ color: "#CBC28D" }}
            onClick={handleClick2}
          />
          <h6>메뉴</h6>
        </div>

        {/* 추가 링크들 */}
      </nav>
    </aside>
  );
};

export default Side;
