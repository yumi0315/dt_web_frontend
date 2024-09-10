import React from "react";
import Apple from "./apple";
import Banana from "./Banana";
import { Box } from "@mui/material";

const Page2 = () => {
  return (
    <main>
      <Box
        className="page2-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "2000px",
          background: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Apple />
        <Banana />
      </Box>
    </main>
  );
};

export default Page2;
