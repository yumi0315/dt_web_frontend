import React, { useState, useEffect } from "react";
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
import { customFetch } from "../custom/customFetch";
import { useLocation } from "react-router-dom";
import { Donut } from "./Donut";

function ChartBox4() {
  const pageLocation = useLocation();
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [data, setData] = useState(undefined);

  const handleSelectChange = (text) => {
    setSelectedOption(text);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await customFetch({
        path: `/chart5`,
        method: "GET",
      });

      const filterData = result.reduce((acc, obj) => {
        if (!acc[obj.welding_meth]) {
          acc[obj.welding_meth] = [];
        }

        acc[obj.welding_meth].push(obj);

        return acc;
      }, {});
      console.log(filterData);

      setData(filterData); // 데이터를 상태에 저장
    };
    fetchData(); // 비동기 함수 호출
  }, []);

  const [startDate, setStartDate] = useState(dayjs().startOf("month"));
  const [endDate, setEndDate] = useState(dayjs().endOf("month"));

  // 날짜 변경 핸들러
  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
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
              value={startDate}
              onChange={handleStartDateChange}
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
            <span style={{ alignSelf: "center", marginLeft: "8px" }}>~</span>
            <DatePicker
              // maxDate={searchTextFiled.enddt || dayjs().subtract(-6, "day")}
              format="YY.MM.DD"
              slotProps={{
                textField: {
                  size: "small",
                  style: { minWidth: "unset", marginLeft: "0px" },
                },
              }}
              value={endDate}
              onChange={handleEndDateChange}
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
          {data &&
            Object.keys(data).map((key) => {
              <Donut chartData={data[key]} onClick={handleSelectChange} />;
            })}
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
