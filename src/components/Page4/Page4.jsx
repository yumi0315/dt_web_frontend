import React from "react";
import { Box } from "@mui/material";
import Excel4 from "./Excel4";

const Page4 = () => {
  return (
    <main>
      <Box
        className="page4-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "space-between",
        }}
      >
        <Excel4 />
      </Box>
    </main>
  );
};

export default Page4;
