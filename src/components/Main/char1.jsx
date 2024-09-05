import React, { useState } from "react";
import "../../CSS/main.css";

const styles = {
  borderBottom: "1px solid rgb(211, 211, 211)",
  display: "flex",
  margin: "2px",
  padding: "10px",
};
const styles2 = {
  margin: "10px",
  padding: "0px",
};

function ChartBox1() {
  // 상태 관리: 선택된 값을 저장
  const [selectedOption, setSelectedOption] = useState("option1");

  // 드롭다운 값 변경 핸들러
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="chart-box1">
      <div className="boxHeader" style={styles}>
        <h4 style={styles2}>개정도 현황</h4>

        {/* 드롭다운 메뉴 추가 */}
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="option1">P1</option>
          <option value="option2">P2</option>
          <option value="option3">P3</option>
        </select>
      </div>
    </div>
  );
}

export default ChartBox1;
