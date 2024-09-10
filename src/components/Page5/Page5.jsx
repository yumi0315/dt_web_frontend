import React from "react";

import Chart5 from "./char5";

import Apple from "./apple";
import Table5 from "./Table5";
import { Box } from "@mui/material";
import "../../CSS/page5.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Page5 = () => {
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

export default Page5;
