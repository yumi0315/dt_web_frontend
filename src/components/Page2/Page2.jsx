import React, { useState, useEffect } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import "../../CSS/page2.css";
import { customFetch } from "../custom/customFetch";
import Progress from "./Progress";
import Table2 from "./Table2";
import DropDown2 from "./DropDown2";

const styles = {
  borderBottom: "1px solid rgb(211, 211, 211)",
};

const Page2 = () => {
  const [selectedOption, setSelectedOption] = useState("P1");
  const [data, setData] = useState({});
  const [tableData, setTableData] = useState(undefined);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await customFetch({
        path: `/chart2`,
        method: "GET",
      });

      const transform = result.reduce((acc, cur) => {
        if (!acc[cur.proj]) {
          acc[cur.proj] = [];
        }
        acc[cur.proj].push(cur);
        return acc;
      }, {});

      setData(transform);
    };

    const fetchChart = async () => {
      const result = await customFetch({
        path: `/table2/${selectedOption}`,
        method: "GET",
      });
      console.log(result);

      setTableData(result);
    };

    fetchData();
    fetchChart();
  }, [selectedOption]);

  return (
    <main>
      <div className="Chart1">
        {Object.keys(data).map(
          (key, idx) =>
            data[key] && <Progress key={idx} chartData={data[key]} />
        )}
      </div>
      <div className="Chart2">
        <DropDown2
          selectedOption={selectedOption}
          handleSelectChange={handleSelectChange}
        />
        {tableData && <Table2 tableData={tableData} />}
      </div>
    </main>
  );
};

export default Page2;
