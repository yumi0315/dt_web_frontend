import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

function DatePicker6() {
  const [startdate, setStartdate] = React.useState(null);
  const [enddate, setEnddate] = React.useState(null);

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        padding: "5px",
        borderRadius: "5px",
        background: "white",
        width: "460px",
        alignItems: "center",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <span style={{ margin: "0 18px", color: "gray" }}>조회 기간: </span>
        <DatePicker
          startdate={startdate}
          onChange={(newValue) => setStartdate(newValue)}
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
                width: "150px",
                height: "40px",
              },
          }}
        />
        <span style={{ display: "flex", alignItems: "center", margin: "8px" }}>
          ~
        </span>
        <DatePicker
          enddate={enddate}
          onChange={(newValue) => setEnddate(newValue)}
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
                width: "150px",
                height: "40px",
              },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
export default DatePicker6;
