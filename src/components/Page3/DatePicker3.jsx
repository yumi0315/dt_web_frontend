import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

function DatePicker3({ date, setDate, title }) {
  const [selectedDatefix, setSelectedDatefix] = useState(dayjs("2011-06-29"));

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        padding: "5px",
        borderRadius: "5px",
        background: "white",
        alignItems: "center",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <span style={{ margin: "0 18px", color: "gray" }}>
          {title || " 조회 기간:"}
        </span>
        <DatePicker
          value={selectedDatefix}
          onChange={(newValue) => setSelectedDatefix(newValue)}
          renderInput={(params) => <TextField {...params} />}
          format="YY.MM.DD"
          slotProps={{
            textField: {
              size: "small",
              fontFamily: "Spoqa-Mid",
            },
          }}
          sx={{
            "& .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd":
              {
                padding: 0,
                height: "0.8em",
                width: "100%",
                marginLeft: "8px",
              },
            "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd":
              {
                width: "150px",
                height: "40px",
              },
          }}
        />
        <span
          style={{
            display: "flex",
            alignItems: "center",
            margin: "8px",
            fontFamily: "Spoqa-Mid",
          }}
        >
          ~
        </span>

        <DatePicker
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
          format="YY.MM.DD"
          slotProps={{
            textField: {
              size: "small",
              fontFamily: "Spoqa-Mid",
            },
          }}
          sx={{
            "& .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd":
              {
                padding: 0,
                height: "0.8em",
                width: "100%",
                marginLeft: "8px",
              },
            "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd":
              {
                width: "150px",
                height: "40px",
              },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
export default DatePicker3;
