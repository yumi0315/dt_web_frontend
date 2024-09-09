import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function Banana() {
  // 예시 데이터 (행)
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGrid", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "Rocks" },
  ];

  // 컬럼 정의
  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <Box
      sx={{
        height: 400, // 그리드 높이 지정
        width: "100%", // 그리드 너비 지정
        padding: "10px",
        background: "white",
        width: "100%",
        height: "55%",
        margin: "10px",
      }}
    >
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </Box>
  );
}

export default Banana;
