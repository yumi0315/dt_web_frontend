import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// 테이블 셀 스타일 설정
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EFF2F5",
    color: theme.palette.common.black,
    fontFamily: "Spoqa-bold",
    fontSize: "15px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontFamily: "Spoqa-Mid",
  },

  borderRight: "1px solid #e0e0e0", // 열 간 구분선 색상
  "&:last-child": {
    borderRight: "none", // 마지막 열에는 구분선이 없음
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "lightgray !important",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Table1({ tableData }) {
  return tableData ? (
    <TableContainer
      component={Paper}
      sx={{
        width: "45%",
        maxHeight: "658px",
        overflowY: "auto", // 세로 스크롤 활성화
        margin: "0", // 테이블의 상하 여백 제거
        padding: "0", // 테이블의 패딩 제거
        fontFamily: "Spoqa-Mid",
      }}
    >
      <Table
        sx={{
          minWidth: 500,
          mheight: "200px",
          tableLayout: "fixed",
          fontFamily: "Spoqa-Mid",
        }}
        aria-label="customized table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            {["도면명", "출도일자", "과제번호", "코드명"].map((key) => (
              <StyledTableCell align="center">{key}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, idx) => (
            <StyledTableRow key={idx}>
              {/* <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell> */}
              <StyledTableCell align="center">{row.draw_name}</StyledTableCell>
              <StyledTableCell align="center">{row.disp_date}</StyledTableCell>
              <StyledTableCell align="center">{row.disp_num}</StyledTableCell>
              <StyledTableCell align="center">{row.code_name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <></>
  );
}
