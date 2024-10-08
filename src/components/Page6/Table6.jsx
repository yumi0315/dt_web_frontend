import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { Component } from "react";
import "../../CSS/page6.css";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Table6({ tableData }) {
  const theme = createTheme({
    palette: {
      background: {
        default: "#90a4ae",
      },
    },
  });
  const columns = [
    { field: "dep", headerName: "과", width: 160, headerAlign: "center" },
    {
      field: "dept_defect_rate",
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
      width: 250,
      headerAlign: "center",
    },
  ];

  const rows = tableData?.map((item, index) => ({
    id: index + 1, // or you can use any unique ID
    dep: item.dep,
    dept_defect_rate: item.dept_defect_rate,
    EGFC: item.EGFC,
    EGW: item.EGW,
    FAW: item.FAW,
    FCAW: item.FCAW,
    FCSA: item.FCSA,
    SAW: item.SAW,
    Range: `${item.start_date} ~ ${item.end_date}`,
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: 600, width: "95%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[15]}
          checkboxSelection
          disableRowSelectionOnClick
          pagination={false}
          sx={{
            fontFamily: "Spoqa-Mid",
            "& .MuiDataGrid-columnHeaders": {
              color: "#e9ecef",
              fontFamily: "Spoqa-Bold",
            },
            "& .MuiDataGrid-cell": {
              display: "flex",
              justifyContent: "center", // 가로 정렬
              alignItems: "center", // 세로 정렬
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default Table6;
