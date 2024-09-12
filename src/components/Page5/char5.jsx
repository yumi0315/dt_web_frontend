import React, { useState, useEffect } from "react";
import "../../CSS/main.css";
import { Box, Typography } from "@mui/material";
import { customFetch } from "../custom/customFetch";
import Page5Chart from "./Page5Chart";
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
      className="Page5Container"
      sx={{
        display: "flex",
        border: "1px solid rgb(211, 211, 211)",
        padding: "0",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* <Box
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
      </Box> */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "50%",
          height: "500px",
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
                width: "200px",
                margin: "10px",
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
                sx={{ width: "200px", height: "200px" }}
              />
            </Box>
          ))
        ) : (
          <></>
        )}
      </Box>
      <Page5Table tableData={tableData} />
    </Box>
  );
}

export default ChartBox5;
