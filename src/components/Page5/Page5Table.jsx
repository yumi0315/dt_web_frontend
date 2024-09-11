// 임의로 작성한 테이블. 데이터 또한 하드 코딩으로 넣었기 때문에 수정해야 합니다.
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Page5Table({ tableData }) {
  console.log(tableData);

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "50%", //테이블 컨테이너 자체의 width를 50%로 지정하는 편이 스타일적인 정렬에 있어서 편리함.
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">부서명</TableCell>
            <TableCell align="right">보류수량</TableCell>
            <TableCell align="right">전체보류비율</TableCell>
            <TableCell align="right">C1</TableCell>
            <TableCell align="right">C2</TableCell>
            <TableCell align="right">C3</TableCell>
            <TableCell align="right">C4</TableCell>
            <TableCell align="right">C5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.dep}
              </TableCell>
              <TableCell align="right">{row.defect_count}</TableCell>
              <TableCell align="right">{row.def_rate}</TableCell>
              <TableCell align="right">{row.C1}</TableCell>
              <TableCell align="right">{row.C2}</TableCell>
              <TableCell align="right">{row.C3}</TableCell>
              <TableCell align="right">{row.C4}</TableCell>
              <TableCell align="right">{row.C5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Export the component
export default Page5Table;
