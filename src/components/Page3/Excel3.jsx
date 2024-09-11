import React, { useState, useEffect } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import Excel3Table from "./Excel3Table";
import Excel3Chart from "./Excel3Chart";
import dayjs from "dayjs";
import { customFetch } from "../custom/customFetch";

function Excel3() {
  const [date] = useState(dayjs());
  const [selectedOption, setSelectedOption] = useState("P1");
  const [data, setData] = useState(undefined);

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
  }, [selectedOption]);

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
      </Box>

      <Excel3Table tableData={data} />
      <Excel3Chart />
    </Box>
  );
}

export default Excel3;
