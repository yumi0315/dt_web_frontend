import React from "react";
import Apple from "./apple";
import Banana from "./Banana";
// import DatePickerComponent from "./DatePickerComponent";
// import DateCalendarComponent from "./DateCalendarComponent";

const Main = () => {
  return (
    <main
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "1700px",
      }}
    >
      <div className="main-container">
        <Apple />
        <Banana />
      </div>
    </main>
  );
};

export default Main;
