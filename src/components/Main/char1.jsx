// ChartBox1.jsx
import React, { useState } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import BasicTable from "./BasicTable"; // 테이블 컴포넌트 import

function ChartBox1() {
  // 상태 관리: 선택된 값을 저장
  const [selectedOption, setSelectedOption] = useState("option1");

  // 드롭다운 값 변경 핸들러
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      className="chart-box1"
      sx={{
        border: "1px solid rgb(211, 211, 211)",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid rgb(211, 211, 211)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        {/* 개정도 현황 제목 */}
        <Typography
          variant="subtitle1" // 더 작은 variant 사용
          sx={{ margin: "0px", padding: "0px", fontSize: "14px" }}
        >
          개정도 현황
        </Typography>

        {/* 드롭다운 메뉴 */}
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          sx={{
            minWidth: "80px",
            height: "30px",
            padding: "0px",
            fontSize: "14px",
          }}
        >
          <MenuItem value="option1">P1</MenuItem>
          <MenuItem value="option2">P2</MenuItem>
          <MenuItem value="option3">P3</MenuItem>
        </Select>
      </Box>

      <Box
        className="tableContainer"
        sx={{
          overflowY: "auto",
        }}
      >
        <BasicTable />
      </Box>
    </Box>
  );
}

export default ChartBox1;
