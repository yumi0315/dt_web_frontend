import React from "react";
import { Box } from "@mui/material";

const Page3 = () => {
  return (
    <main>
      <Box
        className="page3-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "2000px",
          background: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
    </main>
  );
};

export default Page3;
