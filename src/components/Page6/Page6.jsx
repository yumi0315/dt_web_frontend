import React from "react";
import Apple from "./apple";
import Table5 from "./Table5";
import { Box } from "@mui/material";
import "../../CSS/page6.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DatePicker6 from "./DatePicker6";

const Page6 = () => {
  return (
    <main>
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
        <Apple />
        <Table5 />
      </Box>
      <div className="Contact">
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contact</Button>
        </Stack>
      </div>
    </main>
  );
};

export default Page6;
