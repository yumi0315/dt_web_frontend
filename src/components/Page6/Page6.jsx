import React, { useState } from "react";
import Apple from "./apple";
import Table6 from "./Table6";
import { Box } from "@mui/material";
import "../../CSS/page6.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DatePicker6 from "./DatePicker6";

const Page6 = () => {
  const [selectedOption, setSelectedOption] = useState("LNG");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main>
      <div className="page6">
        <Box
          className="container"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "1595px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Apple selectedOption={selectedOption} handleChange={handleChange} />
          <Table6 />
        </Box>
        <div className="Contact">
          <Stack spacing={2} direction="row">
            <Button variant="contained">Contact</Button>
          </Stack>
        </div>
      </div>
    </main>
  );
};

export default Page6;
