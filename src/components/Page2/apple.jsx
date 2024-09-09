import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns"; // 날짜 어댑터

function Apple() {
  // const [selectedOption1, setSelectedOption1] = useState("");
  // const [selectedOption2, setSelectedOption2] = useState("");
  // const [dateRange, setDateRange] = useState([null, null]);

  // const handleChange1 = (event) => {
  //   setSelectedOption1(event.target.value);
  // };

  // const handleChange2 = (event) => {
  //   setSelectedOption2(event.target.value);
  // };

  return (
    <></>
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    //   <Box
    //     sx={{
    //       background: "white",
    //       display: "flex",
    //       flexDirection: "row",
    //       padding: "10px",
    //       width: "100%",
    //       height: "30%",
    //       gap: "20px",
    //       margin: "10px",
    //     }}
    //   >
    //     {/* 첫 번째 드롭다운 */}
    //     <FormControl fullWidth>
    //       <InputLabel id="dropdown1-label">선박 종류</InputLabel>
    //       <Select
    //         labelId="dropdown1-label"
    //         id="dropdown1"
    //         value={selectedOption1}
    //         label="Select Option 1"
    //         onChange={handleChange1}
    //       >
    //         <MenuItem value="option1">P1</MenuItem>
    //         <MenuItem value="option2">P2</MenuItem>
    //         <MenuItem value="option3">P3</MenuItem>
    //       </Select>
    //     </FormControl>

    //     {/* 두 번째 드롭다운 */}
    //     <FormControl fullWidth>
    //       <InputLabel id="dropdown2-label">용접 방법</InputLabel>
    //       <Select
    //         labelId="dropdown2-label"
    //         id="dropdown2"
    //         value={selectedOption2}
    //         label="Select Option 2"
    //         onChange={handleChange2}
    //       >
    //         <MenuItem value="optionA">EGFC</MenuItem>
    //         <MenuItem value="optionB">EGW</MenuItem>
    //         <MenuItem value="optionC">FAB</MenuItem>
    //         <MenuItem value="optionD">FCAW</MenuItem>
    //         <MenuItem value="optionE">FCSA</MenuItem>
    //         <MenuItem value="optionF">SAW</MenuItem>
    //       </Select>
    //     </FormControl>

    //     {/* DateRangePicker 추가 */}
    //     <DateRangePicker
    //       startText="Start Date"
    //       endText="End Date"
    //       value={dateRange}
    //       onChange={(newValue) => {
    //         setDateRange(newValue);
    //       }}
    //       renderInput={(startProps, endProps) => (
    //         <>
    //           <TextField {...startProps} fullWidth />
    //           <Box sx={{ mx: 2 }}> to </Box>
    //           <TextField {...endProps} fullWidth />
    //         </>
    //       )}
    //     />
    //   </Box>
    // </LocalizationProvider>
  );
}

export default Apple;
