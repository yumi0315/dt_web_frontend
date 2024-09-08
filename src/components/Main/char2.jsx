import React from "react";
import "../../CSS/main.css";

const styles = {
  borderBottom: "1px solid rgb(211, 211, 211)",
};

function ChartBox2() {
  return (
    <div className="chart-box2">
      <div className="boxHeader" style={styles}>
        <h4>설계 변경 요청 완료 현황</h4>
      </div>
    </div>
  );
}

export default ChartBox2;
