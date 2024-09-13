import React, { useState, useEffect } from "react";
import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Excel3Table from "../Page3/Excel3Table";
import Excel3Chart from "../Page3/Excel3Chart";
import DatePicker3 from "../Page3/DatePicker3";
import dayjs from "dayjs";
import { customFetch } from "../custom/customFetch";
import LineChart from "../Page3/LineChart";

function Excel4() {
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
        path: `/page4/table`,
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
        path: `/page4/chart`,
        method: "POST",
        body: {
          date: date.format("YYYY-MM-DD"),
          proj: selectedOption,
        },
      });
      console.log(result);

      setChartData(result); // 데이터를 상태에 저장
    };
    fetchChartData(); // 비동기 함수 호출
  }, [selectedOption, date]);

  return (
    <Box
      className="Page3"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "0 30px",
      }}
    >
      <Box
        className="Page3Header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        <FormControl
          sx={{ width: "150px", height: "96%", background: "white" }}
        >
          <InputLabel id="dropdown-label">프로젝트</InputLabel>

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
            // marginRight: "5px",
            paddingRight: "25px",
            borderRight: "1px solid #3333",
          }}
        >
          <Excel3Table tableData={data} />
        </Box>
        <Box
          className="Page3Container2"
          sx={{
            width: "50%",
          }}
        >
          {data && <Excel3Chart data={data} />}
          {chartData && <LineChart data={chartData} />}
        </Box>
      </Box>
    </Box>
  );
}

export default Excel4;
