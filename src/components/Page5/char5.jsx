import React, { useState, useEffect } from "react";
import "../../CSS/main.css";
import { Box, Typography } from "@mui/material";
import { customFetch } from "../custom/customFetch";
import Page5Chart from "./Page5Chart";
import Page5Table from "./Page5Table";
import Page5Table2 from "./Page5Table2";
import Page5Table3 from "./Page5Table3";
import Page5Chart2 from "./Page5Chart2";

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
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box
        className="Page5Container1"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0",
          boxSizing: "border-box",
          width: "49%",
          height: "800px",
          borderRight: "1px solid #D5DDE4",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "100%",
            height: "400px",
          }}
        >
          {data ? (
            Object.keys(data).map((key, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "33.33%",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", textAlign: "center", width: "100%" }}
                >
                  {key}
                </Typography>
                <Page5Chart
                  chartData={data[key]}
                  onClick={handleSelectChange}
                />
              </Box>
            ))
          ) : (
            <></>
          )}
        </Box>
        <Page5Table tableData={tableData} />
      </Box>
      <Box
        className="Page5Container2"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0",
          boxSizing: "border-box",
          width: "49%",
          height: "800px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Page5Table2 />
        <Page5Table3 />
        <Page5Chart2 />
      </Box>
    </Box>
  );
}

export default ChartBox5;
