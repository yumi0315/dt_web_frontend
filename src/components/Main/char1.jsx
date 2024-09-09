import React, { useState, useEffect } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import BasicTable from "./BasicTable";
import { customFetch } from "../custom/customFetch";
import { useLocation } from "react-router-dom";

function ChartBox1() {
  const pageLocation = useLocation();
  const [selectedOption, setSelectedOption] = useState("P1");
  const [data, setData] = useState(undefined);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await customFetch({
        path: `${pageLocation.pathname}chart1/${selectedOption}`,
        method: "GET",
      });
      console.log(result);

      setData(result); // 데이터를 상태에 저장
    };
    fetchData(); // 비동기 함수 호출
  }, [selectedOption]);

  return (
    <Box
      className="chart-box1"
      sx={{
        border: "1px solid rgb(211, 211, 211)",
        padding: "0",
        boxSizing: "border-box",
        height: "350px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid rgb(211, 211, 211)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ margin: "0px", padding: "0px", fontSize: "14px" }}
        >
          개정도 현황
        </Typography>

        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          sx={{
            minWidth: "80px",
            height: "30px",
            padding: "0px",
            fontSize: "14px",
          }}
        >
          <MenuItem value="P1">P1</MenuItem>
          <MenuItem value="P2">P2</MenuItem>
          <MenuItem value="P3">P3</MenuItem>
        </Select>
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: "0",
        }}
      >
        <Box sx={{ width: "95%" }}>
          <BasicTable tableData={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default ChartBox1;
