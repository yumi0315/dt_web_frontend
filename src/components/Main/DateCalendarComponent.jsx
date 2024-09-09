import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const DateCalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // 기본 날짜 설정

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate} // 선택된 날짜
        onChange={(newDate) => setSelectedDate(newDate)} // 날짜 변경 이벤트
      />
    </LocalizationProvider>
  );
};

export default DateCalendarComponent;
