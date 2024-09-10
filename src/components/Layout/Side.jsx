import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../CSS/side.css";

const Side = () => {
  const navigate = useNavigate();

  function handleClick1() {
    navigate("/");
  }
  function handleClick2() {
    navigate("/page2");
  }
  function handleClick3() {
    navigate("/page3");
  }
  function handleClick4() {
    navigate("/page4");
  }
  function handleClick5() {
    navigate("/page5");
  }
  function handleClick6() {
    navigate("/page6");
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
            style={{ color: "#EDEEFF" }}
            onClick={handleClick1}
          />
          <h5>메뉴 1번</h5>
        </div>

        <div className="Menu">
          <FontAwesomeIcon
            icon={faGears}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
            onClick={handleClick2}
          />
          <h5>메뉴 2번</h5>
        </div>
        <div className="Menu">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
            onClick={handleClick3}
          />
          <h5>메뉴 3번</h5>
        </div>
        <div className="Menu">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
            onClick={handleClick4}
          />
          <h5>메뉴 4번</h5>
        </div>
        <div className="Menu">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
            onClick={handleClick5}
          />
          <h5>메뉴 5번</h5>
        </div>
        <div className="Menu">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="icon"
            size="xl"
            style={{ color: "#EDEEFF" }}
            onClick={handleClick6}
          />
          <h5>메뉴 6번</h5>
        </div>
        {/* 추가 링크들 */}
      </nav>
    </aside>
  );
};

export default Side;
