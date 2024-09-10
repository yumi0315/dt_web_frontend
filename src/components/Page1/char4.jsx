import React, { useState } from "react";
import "../../CSS/main.css";
import { Box, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useDemoData } from "@mui/x-data-grid-generator";
import dayjs from "dayjs";
import BasicTable from "../Main/BasicTable";

function ChartBox4() {
  const [selectedMonth, setSelectedMonth] = useState(dayjs().startOf("day"));
  const [data, setData] = useState([]); // 데이터는 선택된 월에 따라 필터링되어야 합니다.

  // 월 선택 핸들러
  const handleMonthChange = (date) => {
    if (date) {
      const startOfMonth = date.startOf("day");
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
      className="chart-box4"
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
          height: "20px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ margin: "10px", padding: "0px", fontSize: "12px" }}
        >
          용접 불량률 관리
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
              format="YY.MM.DD"
              slotProps={{
                textField: { size: "small", style: { minWidth: "unset" } },
              }}
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
                    width: "120px",
                    height: "22px",
                  },
              }}
            ></DatePicker>
            <span style={{ alignSelf: "center", paddingLeft: "8px" }}>~</span>
            <DatePicker
              // maxDate={searchTextFiled.enddt || dayjs().subtract(-6, "day")}
              format="YY.MM.DD"
              slotProps={{
                textField: {
                  size: "small",
                  style: { minWidth: "unset", marginLeft: "0px" },
                },
              }}
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
                    width: "120px",
                    height: "22px",
                  },
              }}
            ></DatePicker>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Box
        className="Chart"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Box
          className="PieChart"
          sx={{
            borderRight: "1px solid rgb(211, 211, 211)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
            margin: "10px",
          }}
        >
          123
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
            width: "40%",
          }}
        >
          <BasicTable />
        </Box>
      </Box>
    </Box>
  );
}

export default ChartBox4;
