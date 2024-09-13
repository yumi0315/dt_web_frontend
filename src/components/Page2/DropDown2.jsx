import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  styled,
} from "@mui/material";

// Custom styled FormControl
const CustomFormControl = styled(FormControl)(({ theme }) => ({
  width: "150px",
  background: "white",
  fontFamily: "Spoqa-Bold",
  "& .MuiInputBase-root": {
    height: 40, // Adjust the height of the Select field
  },
  "& .MuiSelect-select": {
    padding: "10px", // Adjust the padding inside the Select
  },
}));

// Custom styled Select
const CustomSelect = styled(Select)(({ theme }) => ({
  height: 40, // Adjust the height of the Select field
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    padding: "10px", // Adjust the padding inside the Select
  },
}));

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
      <CustomFormControl>
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
      </CustomFormControl>
    </Box>
  );
}

export default DropDown2;
