import React from "react";
import { Box } from "@mui/material";
import Excel3Table from "./Excel3Table";
import Excel3Chart from "./Excel3Chart";

function Excel3() {
  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        width: "1600px",
        height: "500px",
        gap: "10px", // gap을 줄여 여백 최소화
        margin: "0px auto",
      }}
    >
      <Excel3Table />
      <Excel3Chart />
    </Box>
  );
}

export default Excel3;
