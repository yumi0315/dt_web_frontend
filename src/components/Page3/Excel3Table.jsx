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

export default function Excel3Table({ tableData }) {
  return tableData ? (
    <TableContainer
      component={Paper}
      sx={{ width: "100%", margin: "0 auto", padding: "0px" }}
    >
      <Table
        sx={{ minWidth: 500, margin: "0px", padding: "0px" }}
        aria-label="basic table"
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
