import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";

function Apple() {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        width: "100%", // 너비가 부모 요소의 100%를 차지
        maxWidth: "1900px", // 최대 너비 설정
        height: "30%",
        gap: "20px",
        margin: "10px",
        flexGrow: 0, // flex-grow가 0이면 요소가 더 이상 늘어나지 않음
      }}
    >
      {/* 첫 번째 드롭다운 */}
      <FormControl fullWidth>
        <InputLabel id="dropdown1-label">선박 종류</InputLabel>
        <Select
          labelId="dropdown1-label"
          id="dropdown1"
          value={selectedOption1}
          label="Select Option 1"
          onChange={handleChange1}
        >
          <MenuItem value="option1">P1</MenuItem>
          <MenuItem value="option2">P2</MenuItem>
          <MenuItem value="option3">P3</MenuItem>
        </Select>
      </FormControl>

      {/* 두 번째 드롭다운 */}
      <FormControl fullWidth>
        <InputLabel id="dropdown2-label">용접 방법</InputLabel>
        <Select
          labelId="dropdown2-label"
          id="dropdown2"
          value={selectedOption2}
          label="Select Option 2"
          onChange={handleChange2}
        >
          <MenuItem value="optionA">EGFC</MenuItem>
          <MenuItem value="optionB">EGW</MenuItem>
          <MenuItem value="optionC">FAB</MenuItem>
          <MenuItem value="optionD">FCAW</MenuItem>
          <MenuItem value="optionE">FCSA</MenuItem>
          <MenuItem value="optionF">SAW</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Apple;
