import React from "react";
import { Box } from "@mui/material";
import Excel4Table from "./Excel4Table";

function Excel4() {
  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        width: "100%", // 너비가 부모 요소의 100%를 차지
        maxWidth: "1900px", // 최대 너비 설정
        height: "auto", // 높이 자동 조정
        gap: "20px",
        margin: "10px",
        flexGrow: 0,
      }}
    >
      <div>
        <Excel4Table />
      </div>
    </Box>
  );
}

export default Excel4;
