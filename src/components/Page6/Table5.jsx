import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { Component } from "react";
import "../../CSS/page6.css";
import { Pagination } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { Padding, Style } from "@mui/icons-material";

function Table5() {
  const columns = [
    { field: "Depnt No", headerName: "과", width: 190, headerAlign: "center" },
    {
      field: "Ratio",
      headerName: "불량률",
      width: 190,
      headerAlign: "center",
    },
    {
      field: "EGFC",
      headerName: "EGFC",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "EGW",
      headerName: "EGW",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "FAW",
      headerName: "FAW",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "FCAW",
      headerName: "FCAW",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "FCSA",
      headerName: "FCSA",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "SAW",
      headerName: "SAW",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "Range",
      headerName: "작업 가능 기간",
      width: 190,
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

  // const StyledPagenation = styled(Pagination)(({ theme }) => ({
  //   "& .MuiPagination-ul": {
  //     display: "flex",
  //     justifyContent: "flex-end",
  //   },
  //   "& .MuiPaginationItem-root": {
  //     Padding: "0px",
  //   },
  // }));

  return (
    <Box sx={{ height: 600, width: "95%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
        pagination={false}
        // componentsProps={{
        //   pagination: {
        //     component: StyledPagenation,
        //     sx: {
        //       width: "100%",
        //       overflow: "hidden", // 스크롤 숨기기
        //     },
        //   },
        // }}
        // component={{
        //   Pagination: StyledPagenation,
        // }}
      />
    </Box>
  );
}

export default Table5;
