import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// 스타일 정의
const useStyles = makeStyles({
  tableContainer: {
    border: "1px solid #D5DDE4",
    borderRadius: "4px",
    borderBottom: 0,
  },
  tableRow: {
    height: 40,
    background: "#EFF2F5",
  },
  tableCell: {
    flexGrow: 1, // 모든 셀이 동일한 비율로 크기 조정
    "&.MuiTableCell-head": {
      padding: 0,
      textAlign: "center",
      borderRight: "1px solid #D5DDE4",
      fontFamily: "Spoqa-bold",

      "&:last-child": {
        borderRight: "0px",
      },
    },
    "&.MuiTableCell-body": {
      height: 35,
      padding: 0,
      textAlign: "center",
      fontFamily: "Spoqa-mid",
    },
    borderRight: "1px solid #e0e0e0", // 열 간 구분선 색상
    "&:last-child": {
      borderRight: "none", // 마지막 열에는 구분선이 없음
    },
  },
  tableBodyRow: {
    cursor: "pointer",
  },
});

function Page5Table3() {
  const classes = useStyles(); // 스타일 훅 사용

  // 임의의 데이터를 추가한 10개의 행
  const rowData = [
    { dep: "SHI", defect: 19, approved: 6714, defectRate: 0.28 },
    { dep: "Vendor", defect: 133, approved: 17585, defectRate: 0.76 },
    { dep: "D1", defect: 20, approved: 5432, defectRate: 0.36 },
    { dep: "D2", defect: 50, approved: 1825, defectRate: 0.87 },
    { dep: "D3", defect: 30, approved: 9874, defectRate: 0.12 },
    { dep: "D4", defect: 45, approved: 2398, defectRate: 0.52 },
    { dep: "D5", defect: 67, approved: 8210, defectRate: 0.61 },
    { dep: "D6", defect: 10, approved: 5498, defectRate: 0.18 },
    { dep: "D7", defect: 25, approved: 3210, defectRate: 0.42 },
    { dep: "D8", defect: 18, approved: 4789, defectRate: 0.29 },
  ];

  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "10px 0 ",
      }}
    >
      <TableContainer
        component={Paper}
        className={classes.tableContainer} // tableContainer 스타일 적용
        sx={{
          width: "90%",
          margin: "10px",
          maxHeight: "240px",
        }}
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow className={classes.tableRow}>
              {/* tableRow 스타일 적용 */}
              <TableCell
                align="center"
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              ></TableCell>
              <TableCell
                align="center"
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                보류
              </TableCell>
              <TableCell
                align="center"
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                승인
              </TableCell>
              <TableCell
                align="center"
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                불량률
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row, index) => (
              <TableRow key={index} className={classes.tableBodyRow}>
                {/* tableBodyRow 스타일 적용 */}
                <TableCell align="center" className={classes.tableCell}>
                  {row.dep}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.defect}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.approved}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.defectRate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Page5Table3;
