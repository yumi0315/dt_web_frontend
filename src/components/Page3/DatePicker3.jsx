import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

function DatePicker3({ date, setDate, title }) {
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
          {title || "기준일:"}
        </span>
        <DatePicker
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
          format="YY.MM.DD"
          slotProps={{
            textField: {
              size: "small",
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
                width: "130px",
                height: "40px",
              },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
export default DatePicker3;
