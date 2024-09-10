// ChartBox3.js
import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Chart3_Line from "./Chart3_Line";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

function ChartBox3() {
  const [selectedMonth, setSelectedMonth] = useState(dayjs().startOf("month"));
  const [data, setData] = useState([]); // 데이터는 선택된 월에 따라 필터링되어야 합니다.

  // 월 선택 핸들러
  const handleMonthChange = (date) => {
    if (date) {
      const startOfMonth = date.startOf("month");
      setSelectedMonth(startOfMonth);
      fetchDataForMonth(startOfMonth); // 선택된 월에 따라 데이터 가져오기
    }
  };

  // 월에 대한 데이터 가져오기
  const fetchDataForMonth = (month) => {
    // 여기에 데이터 필터링 로직 추가
    // 예를 들어, API 호출 또는 로컬 데이터 필터링 등
    console.log(`Fetching data for ${month.format("YYYY-MM")}`);
    // 예시로 임의의 데이터 설정
    setData([
      /* 필터링된 데이터 배열 */
    ]);
  };

  return (
    <Box
      className="chart-box3"
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
          sx={{ margin: "0px", padding: "0px", fontSize: "12px" }}
        >
          부서별 업무 현황
        </Typography>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          sx={{ height: "30px", display: "flex", alignItems: "center" }}
        >
          <DemoContainer
            components={["DatePicker"]}
            sx={{
              p: 0,
              minWidth: 0,
              "& .MuiStack-root": {
                paddingRight: "10px",
              },
            }}
          >
            <DatePicker
              // maxDate={searchTextFiled.enddt || dayjs().subtract(-6, "day")}
              format="YY.MM"
              slotProps={{
                textField: { size: "small", style: { minWidth: "unset" } },
              }}
              views={["year", "month"]}
              value={selectedMonth}
              onChange={handleMonthChange}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "150px" }} />
              )}
              sx={{
                minWidth: 0,
                paddingLeft: 1,
                overflow: "hidden",
                "& .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd":
                  {
                    padding: 0,
                    height: "0.75em",
                    width: "100%",
                    marginLeft: "8px",
                  },
                "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd":
                  {
                    width: "98px",
                    height: "22px",
                  },
              }}
            ></DatePicker>
            <span style={{ alignSelf: "center" }}>~</span>
            <DatePicker
              // maxDate={searchTextFiled.enddt || dayjs().subtract(-6, "day")}
              format="YY.MM"
              slotProps={{
                textField: { size: "small", style: { minWidth: "unset" } },
              }}
              views={["year", "month"]}
              value={selectedMonth}
              onChange={handleMonthChange}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "150px" }} />
              )}
              sx={{
                minWidth: 0,
                paddingLeft: 1,
                overflow: "hidden",
                "& .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd":
                  {
                    padding: 0,
                    height: "0.75em",
                    width: "100%",
                    marginLeft: "8px",
                  },
                "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd":
                  {
                    width: "98px",
                    height: "22px",
                  },
              }}
            ></DatePicker>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Box>
        <Chart3_Line />
      </Box>
    </Box>
  );
}

export default ChartBox3;
