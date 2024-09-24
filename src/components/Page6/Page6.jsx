import React, { useState, useEffect } from "react";
import Table6 from "./Table6";
import { Box } from "@mui/material";
import "../../CSS/page6.css";
import Tags from "./Tags";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { customFetch } from "../custom/customFetch";
import Contact from "./Contact";
import DatePicker6 from "./DatePicker6";

const Page6 = () => {
  const [selectedOption, setSelectedOption] = useState("LNG");

  const [data, setData] = useState(undefined);

  const [startdate, setStartdate] = React.useState(dayjs("2023.07.20"));
  const [enddate, setEnddate] = React.useState(dayjs().endOf("month"));

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await customFetch({
        path: `/page6/table`,
        method: "POST",
        body: {
          start: startdate.format("YYYY-MM-DD"),
          end: enddate.format("YYYY-MM-DD"),
        },
      });
      setData(result); // 데이터를 상태에 저장
    };
    fetchData(); // 비동기 함수 호출
  }, [startdate, enddate]);

  return (
    <main>
      <div className="page6">
        <Box
          className="container"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "1595px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="Page6Header">
            <Tags />
            <DatePicker6
              selectedOption={selectedOption}
              handleChange={handleChange}
              startdate={startdate}
              setStartdate={setStartdate}
              enddate={enddate}
              setEnddate={setEnddate}
            />
          </div>
          <Table6 tableData={data} />
        </Box>
        <div className="Contact">
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Page6;
