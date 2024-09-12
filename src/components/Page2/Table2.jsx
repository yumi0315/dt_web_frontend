import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import "../../CSS/page2.css";

function Table2({ tableData }) {
  const columns = [
    {
      field: "reg_type",
      headerName: "등록구분",
      width: 190,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "ECN_No",
      headerName: "ECN No.",
      width: 190,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "import",
      headerName: "긴급도",
      width: 140,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "urg",
      headerName: "중요도",
      width: 140,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "request_dep",
      headerName: "요청부서",
      width: 140,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "stat",
      headerName: "진행 상태",
      width: 140,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
  ];
  const rows = tableData.map((item, index) => ({
    id: index + 1, // or you can use any unique ID
    reg_type: item.reg_type,
    ECN_No: item.ECN_No,
    import: item.import,
    urg: item.urg,
    request_dep: item.request_dep,
    stat: item.stat,
  }));

  return (
    <Box sx={{ height: 400, width: "98%", margin: " 0 19px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
        pagination={false}
        sx={{ fontFamily: "Spoqa-Mid" }}
      />
    </Box>
  );
}

export default Table2;
