import React, { useState, useEffect } from "react";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import Excel3Table from "./Excel3Table";
import Excel3Chart from "./Excel3Chart";
import dayjs from "dayjs";
import { customFetch } from "../custom/customFetch";
import DatePicker3 from "./DatePicker3";
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
      className="Page5"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "0px",
      }}
    >
      <Box
        className="Page3Header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <FormControl
          sx={{ width: "150px", height: "96%", background: "white" }}
        >
          <InputLabel id="dropdown-label">선박 종류</InputLabel>

          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedOption}
            label="Select Option"
            onChange={handleSelectChange}
          >
            <MenuItem value="P1">P1</MenuItem>
            <MenuItem value="P2">P2</MenuItem>
            <MenuItem value="P3">P3</MenuItem>
          </Select>
        </FormControl>

        <DatePicker3 date={date} setDate={setDate} />
      </Box>
      <Box
        className="PageContents"
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        <Box
          className="Page3Container1"
          sx={{
            width: "50%",
            marginRight: "5px",
            paddingRight: "25px",
            borderRight: "1px solid #D5DDE4",
          }}
        >
          <Excel3Table tableData={data} />
        </Box>
        <Box
          className="Page3Container2"
          sx={{
            width: "50%",
            marginLeft: "10px",
          }}
        >
          {data && <Excel3Chart data={data} />}
          {chartData && <LineChart data={chartData} />}
        </Box>
      </Box>
    </Box>
  );
}

export default Excel3;
