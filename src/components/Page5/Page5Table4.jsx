import React from "react";
import { makeStyles } from "@mui/styles"; // 스타일 훅 가져오기
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// 스타일 정의
const useStyles = makeStyles({
  tableContainer: {
    border: "1px solid #D5DDE4",
    borderRadius: "4px",
    borderBottom: 0,
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
    borderRight: "1px solid #e0e0e0",
    "&:last-child": {
      borderRight: "none",
    },
  },
  tableBodyRow: {
    cursor: "pointer",
  },
});

function Page5Table4() {
  const classes = useStyles();

  const tableData = [
    { col1: "A", col2: "승인", col3: "보류", col4: "불량" },
    { col1: "A", col2: "B", col3: "C", col4: "D" },
  ];

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", margin: "0 18px" }}
    >
      <TableContainer
        component={Paper}
        className={classes.tableContainer}
        sx={{
          width: "50%",
          maxHeight: "370px",
          margin: "5px 0",
        }}
      >
        <Table
          sx={{ tableLayout: "fixed" }}
          aria-label="simple table"
          stickyHeader
        >
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                className={classes.tableBodyRow}
                style={
                  index === 0
                    ? { backgroundColor: "#EFF2F5", fontWeight: "bold" }
                    : {}
                }
              >
                {index === 0 ? (
                  <TableCell
                    className={classes.tableCell}
                    rowSpan={tableData.length}
                    style={{
                      backgroundColor: "#EFF2F5",
                      fontWeight: "bold",
                    }}
                  >
                    {row.col1}
                  </TableCell>
                ) : null}
                <TableCell
                  className={classes.tableCell}
                  style={index === 0 ? { fontWeight: "bold" } : {}}
                >
                  {row.col2}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  style={index === 0 ? { fontWeight: "bold" } : {}}
                >
                  {row.col3}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  style={index === 0 ? { fontWeight: "bold" } : {}}
                >
                  {row.col4}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Page5Table4;
