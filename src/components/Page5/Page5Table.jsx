import React from "react";
import { makeStyles } from "@mui/styles"; // 스타일 훅 가져오기
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function Page5Table({ tableData }) {
  const classes = useStyles(); // 스타일 훅 사용

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TableContainer
        component={Paper}
        className={classes.tableContainer} // 테이블 컨테이너 스타일 적용
        sx={{
          width: "95%", // 테이블의 너비를 100%로 확장
          maxHeight: "250px",
          margin: "5px 0",
        }}
      >
        <Table
          sx={{ minWidth: 650, tableLayout: "fixed" }}
          aria-label="simple table"
          stickyHeader
        >
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                부서명
              </TableCell>
              <TableCell
                align="right"
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                보류건수
              </TableCell>
              <TableCell
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                불량율
              </TableCell>
              <TableCell
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                C1
              </TableCell>
              <TableCell
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                C2
              </TableCell>
              <TableCell
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                C3
              </TableCell>
              <TableCell
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                C4
              </TableCell>
              <TableCell
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                C5
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.map((row, index) => (
              <TableRow key={index} className={classes.tableBodyRow}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableCell}
                >
                  {row.dep}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {row.dep_defect_count}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {row.dep_def_rate}
                </TableCell>
                <TableCell className={classes.tableCell}>{row.C1}</TableCell>
                <TableCell className={classes.tableCell}>{row.C2}</TableCell>
                <TableCell className={classes.tableCell}>{row.C3}</TableCell>
                <TableCell className={classes.tableCell}>{row.C4}</TableCell>
                <TableCell className={classes.tableCell}>{row.C5}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Page5Table;
