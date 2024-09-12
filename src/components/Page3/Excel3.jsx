import React, { useState, useEffect } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import Excel3Table from "./Excel3Table";
import Excel3Chart from "./Excel3Chart";
import dayjs from "dayjs";
import { customFetch } from "../custom/customFetch";
import DatePicker4 from "../Page4/DatePicker";
import LineChart from "./LineChart";

function Excel3() {
  const [date, setDate] = useState(dayjs());
  const [selectedOption, setSelectedOption] = useState("P1");
  const [data, setData] = useState(undefined);
  const [chartData, setChartData] = useState(undefined);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await customFetch({
        path: `/page3/table`,
        method: "POST",
        body: {
          date: date.format("YYYY-MM-DD"),
          proj: selectedOption,
        },
      });
      setData(result); // 데이터를 상태에 저장
    };
    fetchData(); // 비동기 함수 호출

    const fetchChartData = async () => {
      const result = await customFetch({
        path: `/page3/chart`,
        method: "POST",
        body: {
          date: date.format("YYYY-MM-DD"),
          proj: selectedOption,
        },
      });
      setChartData(result); // 데이터를 상태에 저장
    };
    fetchChartData(); // 비동기 함수 호출
  }, [selectedOption, date]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        id="Excel3Dropdown"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "95%",
        }}
      >
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          sx={{
            minWidth: "80px",
            height: "30px",
            padding: "0px",
            fontSize: "14px",
            background: "white",
          }}
        >
          <MenuItem value="P1">P1</MenuItem>
          <MenuItem value="P2">P2</MenuItem>
          <MenuItem value="P3">P3</MenuItem>
        </Select>
        <DatePicker4 date={date} setDate={setDate} />
      </Box>

      <Excel3Table tableData={data} />
      {data && <Excel3Chart data={data} />}
      {chartData && <LineChart data={chartData} />}
    </Box>
  );
}

export default Excel3;
