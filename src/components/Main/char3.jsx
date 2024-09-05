import React from "react";
import "../../CSS/main.css";

const styles = {
  borderBottom: "1px solid rgb(211, 211, 211)",
};

function ChartBox3() {
  return (
    <div className="chart-box3">
      <div className="boxHeader" style={styles}>
        <h4>부서별 업무 현황</h4>
      </div>
    </div>
  );
}

export default ChartBox3;
