import React from "react";
import "../../CSS/main.css";
import { Box, Typography } from "@mui/material";
import PieChart from "./PieChart"; // PieChart 컴포넌트 import
// npm install chart.js react-chartjs-2 를 실행해서 모듈 설치 필요

function ChartBox2() {
  return (
    <Box
      className="chart-box2"
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
          height: "30px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ margin: "0px", padding: "0px", fontSize: "14px" }}
        >
          설계 변경 요청 완료 현황
        </Typography>
      </Box>
      <Box>
        <PieChart />
      </Box>
    </Box>
  );
}

export default ChartBox2;
