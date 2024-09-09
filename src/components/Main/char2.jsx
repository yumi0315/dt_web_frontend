import React from "react";
import { Box, Typography } from "@mui/material";
import "../../CSS/main.css";
import HalfDoughnutChart from "./HalfDoughnutChart";

const styles = {
  borderBottom: "1px solid rgb(211, 211, 211)",
};

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
      <HalfDoughnutChart />
    </Box>
  );
}

export default ChartBox2;
