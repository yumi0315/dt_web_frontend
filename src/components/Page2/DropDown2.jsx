import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";

function DropDown2({ selectedOption, handleSelectChange }) {
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
        margin: " 0 10px",
        flexGrow: 0,
      }}
    >
      {/* 첫 번째 드롭다운 */}
      <FormControl
        sx={{
          width: "150px",
          height: "98%",
          background: "white",
          fontFamily: "Spoqa-Bold",
        }}
      >
        <InputLabel id="dropdown1-label">프로젝트</InputLabel>
        <Select
          labelId="dropdown1-label"
          id="dropdown1"
          value={selectedOption}
          label="Select Option 1"
          onChange={handleSelectChange}
        >
          <MenuItem value="P1">P1</MenuItem>
          <MenuItem value="P2">P2</MenuItem>
          <MenuItem value="P3">P3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropDown2;
