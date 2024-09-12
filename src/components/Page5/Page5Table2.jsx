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

  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "3px 0 ",
      }}
    >
      <TableContainer
        component={Paper}
        className={classes.tableContainer} // tableContainer 스타일 적용
        sx={{
          width: "90%",
          height: "113px",
          margin: "10px",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableRow}>
              {" "}
              {/* tableRow 스타일 적용 */}
              <TableCell
                align="center"
                className={classes.tableCell}
              ></TableCell>
              <TableCell align="center" className={classes.tableCell}>
                보류
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                승인
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                불량률
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.tableBodyRow}>
              {" "}
              {/* tableBodyRow 스타일 적용 */}
              <TableCell align="center" className={classes.tableCell}>
                SHI
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                19
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                6714
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                0.28
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableBodyRow}>
              {" "}
              {/* tableBodyRow 스타일 적용 */}
              <TableCell align="center" className={classes.tableCell}>
                Vendor
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                133
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                17585
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                0.76
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Page5Table3;
