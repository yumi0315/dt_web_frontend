import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import DatePicker6 from "./DatePicker6";

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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px",
        width: "95%",
        height: "100%",
        gap: "20px",
        margin: "10px",
        flexGrow: 0,
      }}
    >
      {/* 첫 번째 드롭다운 */}
      <FormControl
        sx={{
          width: "150px",
          height: "95%",
          background: "white",
          fontFamily: "Spoqa-Mid",
        }}
      >
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
      <DatePicker6 />
    </Box>
  );
}

export default Apple;
