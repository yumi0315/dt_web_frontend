// Excel3Table.js
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../CSS/Page1.css";

// 테이블 셀 스타일 설정
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4A88DB",
    color: "#edeeff",
    fontFamily: "Spoqa-bold",
    fontSize: "15px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontFamily: "Spoqa-Mid",
    backgroundColor: "white",
  },
  borderRight: "1px solid #e0e0e0", // 열 간 구분선 색상

  "&:last-child": {
    borderRight: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "lightgray !important",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
  // 마지막 행에서도 열 구분선을 유지하기 위해, 모든 셀에 테두리를 적용
  "& td, & th": {
    borderRight: "1px solid #e0e0e0 !important",
  },
  // 마지막 셀의 오른쪽 테두리는 없음
  "& td:last-child, & th:last-child": {
    borderRight: "none",
  },
}));

export default function Excel3Table({ tableData }) {
  return tableData ? (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        height: "460px",
      }}
    >
      <Table sx={{ margin: "0px", padding: "0px" }} aria-label="basic table">
        <TableHead>
          <TableRow>
            {["분류", "실행계획(건)", "완료계획(건)", "달성률"].map((key) => (
              <StyledTableCell align="center">{key}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell align="center">
                {row.dp_bom_desc}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Plan_count}</StyledTableCell>
              <StyledTableCell align="center">
                {row.Completed_Tasks}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.Achievement_Rate}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <></>
  );
}
