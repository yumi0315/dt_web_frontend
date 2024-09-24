import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info"; // Material UI의 정보 아이콘

const Info = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <InfoIcon style={{ fontSize: 20, color: "#3456dd" }} />
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "-330%",
            left: "350%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            padding: "20px",
            margin: "10px",
            color: "#333",
            padding: "5px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            zIndex: 1,
            fontSize: "14px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            boxSizing: "border-box",
            border: "1px solid #3333",
          }}
        >
          C1: 용입불량 <br></br>C2: 용합불량 <br></br>C3: 공극률 <br></br>C4:
          크랙
          <br></br>C5: 찌꺼기{" "}
        </div>
      )}
    </div>
  );
};

export default Info;
