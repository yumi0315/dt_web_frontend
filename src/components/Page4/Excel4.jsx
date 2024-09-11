import React, { useState, useEffect } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import Excel4Table from "./Excel4Table";
import Excel4Chart from "./Excel4Chart";
import DatePicker4 from "./DatePicker";
import dayjs from "dayjs";
import { customFetch } from "../custom/customFetch";

function Excel4() {
  const [date, setDate] = useState(dayjs());
  const [selectedOption, setSelectedOption] = useState("P1");
  const [data, setData] = useState(undefined);

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
  }, [selectedOption]);

  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        width: "1600px",
        height: "500px",
        gap: "10px", // gap을 줄여 여백 최소화
        margin: "0px auto",
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
        }}
      >
        <MenuItem value="P1">P1</MenuItem>
        <MenuItem value="P2">P2</MenuItem>
        <MenuItem value="P3">P3</MenuItem>
      </Select>
      <DatePicker4 date={date} setDate={setDate} />
      <Excel4Table tableData={data} />
      <Excel4Chart />
    </Box>
  );
}

export default Excel4;
