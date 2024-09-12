import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { Component } from "react";
import "../../CSS/page2.css";
import { Pagination } from "@mui/material";

function Table2() {
  const columns = [
    {
      field: "Part",
      headerName: "등록구분",
      width: 190,
      headerAlign: "center",
    },
    {
      field: "ECN No",
      headerName: "ECN No.",
      width: 190,
      headerAlign: "center",
    },
    {
      field: "IMPORT",
      headerName: "긴급도",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "URG",
      headerName: "중요도",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "Req_Dep",
      headerName: "요청부서",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "State",
      headerName: "진행 상태",
      width: 140,
      headerAlign: "center",
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

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
