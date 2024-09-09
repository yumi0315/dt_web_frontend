import React from "react";
import "../../CSS/main.css";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import BasicTable from "./BasicTable";

function ChartBox4() {
  const { data } = useDemoData({
    dataSet: "",
    rowLength: 5,
    maxColumns: 6,
  });

  return (
    <Box
      className="chart-box4"
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
          height: "20px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ margin: "10px", padding: "0px", fontSize: "12px" }}
        >
          용접 불량률 관리
        </Typography>
      </Box>
      <Box
        className="Chart"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Box
          className="PieChart"
          sx={{
            borderRight: "1px solid rgb(211, 211, 211)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
            margin: "10px",
          }}
        >
          123
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
            width: "40%",
          }}
        >
          <BasicTable />
        </Box>
      </Box>
    </Box>
  );
}

export default ChartBox4;
