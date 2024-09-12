import React, { useState, useEffect } from "react";
import Table1 from "./Table1";
import { customFetch } from "../custom/customFetch";
import { useLocation } from "react-router-dom";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import "../../CSS/Page1.css";

const Page1 = () => {
  const pageLocation = useLocation();
  const [data, setData] = useState(undefined);

  const [selectedOption, setSelectedOption] = useState("P1");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await customFetch({
        path: `/chart1/${selectedOption}`,
        method: "GET",
      });

      setData(result); // 데이터를 상태에 저장
    };
    fetchData(); // 비동기 함수 호출
  }, [selectedOption]);

  return (
    <main>
      <div className="main-container">
        <Box
          sx={{
            padding: "10px 0 ",
            width: "95%",
            gap: "20px",
            margin: "10px 0",
          }}
        >
          {/* 첫 번째 드롭다운 */}
          <FormControl
            sx={{ width: "150px", height: "55px", background: "white" }}
          >
            <InputLabel id="dropdown1-label">프로젝트</InputLabel>
            <Select
              labelId="dropdown1-label"
              id="dropdown"
              value={selectedOption}
              label="Select Option"
              onChange={handleChange}
              MenuProps={{
                PaperProps: {
                  className: "custom-menu",
                },
              }}
            >
              <MenuItem value="P1">P1</MenuItem>
              <MenuItem value="P2">P2</MenuItem>
              <MenuItem value="P3">P3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Table1 tableData={data} />
      </div>
    </main>
  );
};

export default Page1;
