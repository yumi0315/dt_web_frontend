import React, { useState, useEffect } from "react";
import "../../CSS/main.css";
import { Box, Typography } from "@mui/material";
import { customFetch } from "../custom/customFetch";
import { useLocation } from "react-router-dom";
import Donut from "./Donut";
import Page5Table from "./Page5Table";

function ChartBox5() {
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [data, setData] = useState(undefined);
  const [tableData, setTableData] = useState(undefined);

  const handleSelectChange = (text) => {
    setSelectedOption(text);
  };

  useEffect(() => {
    setTableData(data && data[selectedOption]);
  }, [selectedOption]);

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
      handleSelectChange(Object.keys(filterData)[0]);
      setData(filterData); // 데이터를 상태에 저장
    };
    fetchData(); // 비동기 함수 호출
  }, []);

  return (
    <Box
      className="chart-box5"
      sx={{
        border: "1px solid rgb(211, 211, 211)",
        padding: "0",
        boxSizing: "border-box",
        width: "1600px",
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
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // 여러 개의 차트가 가로로 나열되다가 공간이 부족하면 다음 줄로 넘김
            justifyContent: "space-around",
            width: "50%", // 각 차트 사이에 일정한 간격을 유지
          }}
        >
          {data ? (
            Object.keys(data).map((key, idx) => (
              <Donut
                key={idx}
                chartData={data[key]}
                onClick={handleSelectChange}
                sx={{ width: "200px", height: "200px", margin: "10px" }} // 각 Donut 차트의 크기를 지정
              />
            ))
          ) : (
            <></>
          )}
        </Box>
        <Page5Table tableData={tableData} />
      </Box>
    </Box>
  );
}

export default ChartBox5;
