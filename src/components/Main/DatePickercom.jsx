// DatePickercom.js
import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { styled } from "@mui/material/styles";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// 스타일링
const CustomInputButton = styled("div")({
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "10px",
  background: "white",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
});

const DatePickercom = ({ setSearchDateString, setSelectedEndDateString }) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  // const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // const dateToString = (date) => {
  //   return (
  //     date.getFullYear() +
  //     "-" +
  //     (date.getMonth() + 1).toString().padStart(2, "0") +
  //     "-" +
  //     date.getDate().toString().padStart(2, "0")
  //   );
  // };

  // const CustomInput = ({ value, onClick }) => (
  //   <CustomInputButton onClick={onClick}>
  //     {value}
  //     {isCalendarOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
  //   </CustomInputButton>
  // );

  // useEffect(() => {
  //   setSearchDateString(dateToString(startDate));
  //   setSelectedEndDateString(dateToString(endDate));
  // }, [startDate, endDate, setSearchDateString, setSelectedEndDateString]);

  return (
    <></>
    // <div>
    //   <div className="startDateContainer">
    //     <DatePicker
    //       selected={startDate}
    //       onChange={(date) => setStartDate(date)}
    //       selectsStart
    //       maxDate={new Date()}
    //       customInput={<CustomInput />}
    //     />
    //   </div>

    //   <div className="range" />
    //   <div className="endDateContainer">
    //     <DatePicker
    //       selected={endDate}
    //       onChange={(date) => setEndDate(date)}
    //       selectsEnd
    //       startDate={startDate}
    //       minDate={startDate}
    //       maxDate={new Date()}
    //       customInput={<CustomInput />}
    //     />
    //   </div>
    // </div>
  );
};

export default DatePickercom;
