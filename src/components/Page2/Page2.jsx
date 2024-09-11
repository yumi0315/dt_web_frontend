import React, { useState, useEffect } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import "../../CSS/page2.css";
import { customFetch } from "../custom/customFetch";
import { useLocation } from "react-router-dom";
import Progress1 from "./Progress1";
import Progress2 from "./Progress2";
import Progress3 from "./Progress3";
import Table2 from "./Table2";
import DropDown2 from "./DropDown2";

const styles = {
  borderBottom: "1px solid rgb(211, 211, 211)",
};

const Page2 = () => {
  //   const pageLocation = useLocation();
  //   const [selectedOption, setSelectedOption] = useState("P1");
  const [dataP1, setDataP1] = useState(undefined);
  const [dataP2, setDataP2] = useState(undefined);
  const [dataP3, setDataP3] = useState(undefined);

  //   const handleSelectChange = (event) => {
  //     setSelectedOption(event.target.value);
  //   };

  useEffect(() => {
    const fetchDataP1 = async () => {
      const resultP1 = await customFetch({
        path: `/chart2/`,
        method: "GET",
      });

      setDataP1(resultP1); // 데이터를 상태에 저장
    };

    const fetchDataP2 = async () => {
      const resultP2 = await customFetch({
        path: `/chart2/`,
        method: "GET",
      });

      setDataP2(resultP2); // 데이터를 상태에 저장
    };

    const fetchDataP3 = async () => {
      const resultP3 = await customFetch({
        path: `/chart2/`,
        method: "GET",
      });

      setDataP3(resultP3); // 데이터를 상태에 저장
    };

    fetchDataP1(); // 비동기 함수 호출
    fetchDataP2(); // 비동기 함수 호출
    fetchDataP3(); // 비동기 함수 호출
  }, []);

  return (
    <main>
      <div className="Chart1">
        <Progress1 selectedOption="P1" chartData={dataP1} />
        <Progress2 selectedOption="P2" chartData={dataP2} />
        <Progress3 selectedOption="P3" chartData={dataP3} />
      </div>
      <div className="Chart2">
        <DropDown2 />
        <Table2 />
      </div>
    </main>
  );
};

export default Page2;
