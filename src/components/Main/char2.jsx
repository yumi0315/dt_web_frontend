import React, { useState, useEffect } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import "../../CSS/main.css";
import HalfDoughnutChart from "./HalfDoughnutChart";
import { customFetch } from "../custom/customFetch";
import { useLocation } from "react-router-dom";

const styles = {
  borderBottom: "1px solid rgb(211, 211, 211)",
};

function ChartBox2() {
  const pageLocation = useLocation();
  const [selectedOption, setSelectedOption] = useState("P1");
  const [data, setData] = useState(undefined);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await customFetch({
        path: `/chart2`,
        method: "GET",
      });

      setData(result); // 데이터를 상태에 저장
    };
    fetchData(); // 비동기 함수 호출
  }, []);

  return (
    <Box
      className="chart-box2"
      sx={{
        border: "1px solid rgb(211, 211, 211)",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid rgb(211, 211, 211)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
          height: "30px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ margin: "0px", padding: "0px", fontSize: "14px" }}
        >
          설계 변경 요청 완료 현황
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
      <HalfDoughnutChart selectedOption={selectedOption} chartData={data} />
    </Box>
  );
}

export default ChartBox2;
