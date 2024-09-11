// 임의로 작성한 테이블. 데이터 또한 하드 코딩으로 넣었기 때문에 수정해야 합니다.
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Example data
const rows = [
  { name: "Item 1", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Item 2", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: "Item 3", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
];

// BasicTable component
function Page5Table() {
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
            <TableCell>Name</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Export the component
export default Page5Table;
