import React, { useState } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import BasicTable from "./BasicTable";

function ChartBox1() {
  const [selectedOption, setSelectedOption] = useState("option1");

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
        height: "350px",
        display: "flex",
        flexDirection: "column",
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
        <Typography
          variant="subtitle1"
          sx={{ margin: "0px", padding: "0px", fontSize: "14px" }}
        >
          개정도 현황
        </Typography>

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
        sx={{
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: "0",
        }}
      >
        <Box sx={{ width: "95%" }}>
          <BasicTable />
        </Box>
      </Box>
    </Box>
  );
}

export default ChartBox1;
