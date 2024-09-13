import React, { useState, useEffect } from "react";
import { customFetch } from "../custom/customFetch";
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

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await customFetch({
        path: `/page5/table3`,
        method: "GET",
      });

      setTableData(result);
    };
    fetchData();
  }, []);

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
              <TableCell
                align="center"
                className={classes.tableCell}
                style={{ backgroundColor: "#EFF2F5" }}
              >
                구분
              </TableCell>
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
            {tableData.map((obj, index) => (
              <TableRow key={index} className={classes.tableBodyRow}>
                <TableCell align="center" className={classes.tableCell}>
                  {obj.super_code}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {obj.super_code_defect_count}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {obj.super_code_total_count}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {obj.defect_rate}
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
