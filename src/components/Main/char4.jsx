import React from "react";
import "../../CSS/main.css";

const styles = {
  borderBottom: "1px solid rgb(211, 211, 211)",
};

function ChartBox4() {
  return (
    <div className="chart-box4">
      <div className="boxHeader" style={styles}>
        <h4>용접불량률 관리</h4>
      </div>
    </div>
  );
}

export default ChartBox4;
