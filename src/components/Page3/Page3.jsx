import React from "react";
import { Box } from "@mui/material";
import Excel3 from "./Excel3";

const Page3 = () => {
  return (
    <main>
      <Box
        className="page3-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "space-between",
        }}
      >
        <Excel3 />
      </Box>
    </main>
  );
};

export default Page3;
