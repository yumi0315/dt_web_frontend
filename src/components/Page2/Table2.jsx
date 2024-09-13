import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import "../../CSS/page2.css";

function Table2({ tableData }) {
  const columns = [
    {
      field: "reg_type",
      headerName: "등록구분",
      width: 220,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "ECN_No",
      headerName: "ECN No.",
      width: 330,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "import",
      headerName: "긴급도",
      width: 230,
      headerAlign: "center",
      renderCell: (params) => {
        // 셀의 값이 '상'을 포함하는지 확인
        const containsSpecialText = params.value.includes("상");

        return (
          <div
            style={{
              backgroundColor: containsSpecialText
                ? "rgba(255, 99, 132, 0.3)"
                : "transparent",
              color: containsSpecialText ? "red" : "black",
              textAlign: "center", // 셀 내용 가운데 정렬
              padding: "5px",
              borderRadius: "4px",
              width: "100%", // 셀 너비를 100%로 설정하여 가운데 정렬이 유지되도록 함
              boxSizing: "border-box", // 패딩과 테두리가 셀 크기에 포함되도록 설정
            }}
          >
            {params.value}
          </div>
        );
      },
    },
    {
      field: "urg",
      headerName: "중요도",
      width: 230,
      headerAlign: "center",
      renderCell: (params) => {
        // 셀의 값이 '상'을 포함하는지 확인
        const containsSpecialText = params.value.includes("High");

        return (
          <div
            style={{
              backgroundColor: containsSpecialText
                ? "rgba(255, 99, 132, 0.3)"
                : "transparent",
              color: containsSpecialText ? "red" : "black",

              textAlign: "center", // 셀 내용 가운데 정렬
              padding: "5px",
              borderRadius: "4px",
              width: "100%", // 셀 너비를 100%로 설정하여 가운데 정렬이 유지되도록 함
              boxSizing: "border-box", // 패딩과 테두리가 셀 크기에 포함되도록 설정
            }}
          >
            {params.value}
          </div>
        );
      },
    },
    {
      field: "request_dep",
      headerName: "요청부서",
      width: 220,
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "stat",
      headerName: "진행 상태",
      width: 220,
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
    import: item.urg,
    urg: item.import,
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
