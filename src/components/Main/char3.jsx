// ChartBox3.js
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import DatePickercom from "./DatePickercom"; // 수정된 파일 경로
import Chart3_Line from "./Chart3_Line";

function ChartBox3() {
  const [searchDateString, setSearchDateString] = useState("");
  const [selectedEndDateString, setSelectedEndDateString] = useState("");
  const isRangeSearch = true; // or false based on your requirement

  return (
    <Box
      className="chart-box3"
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
          부서별 업무 현황
        </Typography>
        <div style={{ margin: "20px" }}>
          <DatePickercom
            setSearchDateString={setSearchDateString}
            setSelectedEndDateString={setSelectedEndDateString}
            isRangeSearch={isRangeSearch}
          />
        </div>
      </Box>
      <Box>
        <Chart3_Line />
      </Box>
    </Box>
  );
}

export default ChartBox3;
