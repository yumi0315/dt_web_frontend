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

function Page5Table2() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">보류</TableCell>
            <TableCell align="center">승인</TableCell>
            <TableCell align="center">불량률</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">SHI</TableCell>
            <TableCell align="center">19</TableCell>
            <TableCell align="center">6714</TableCell>
            <TableCell align="center">0.28</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Vendor</TableCell>
            <TableCell align="center">133</TableCell>
            <TableCell align="center">17585</TableCell>
            <TableCell align="center">0.76</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Page5Table2;
