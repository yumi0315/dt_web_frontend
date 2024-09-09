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
    backgroundColor: "#3490DD",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ tableData }) {
  return tableData ? (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        maxHeight: "250px", // 테이블의 최대 높이 제한
        overflowY: "auto", // 세로 스크롤 활성화
        margin: "0", // 테이블의 상하 여백 제거
        padding: "0", // 테이블의 패딩 제거
      }}
    >
      <Table
        sx={{ minWidth: 500, tableLayout: "fixed" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {Object.keys(tableData[0]).map((key) => (
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
