import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import VerticalAlignCenterIcon from "@mui/icons-material/VerticalAlignCenter";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { CompactPicker } from "react-color";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
  },
}));

const MyTextEditorToggleButton = () => {
  const [horizontalAlignment, setHorizontalAlignment] = useState("left");
  const [formats, setFormats] = useState([]);
  const [showCompactPicker, setShowCompactPicker] = useState(false);
  const [fontColor, setFontColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [inputValue, setInputValue] = useState("");

  const handleAlignment = (event, newAlignment) => {
    setHorizontalAlignment(newAlignment);
  };

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleChangeComplete = (color) => {
    setFontColor(color.hex);
  };

  const togglePicker = (event) => {
    setShowCompactPicker((prev) => !prev);
  };

  const applyStyles = {
    textAlign: horizontalAlignment,
    fontWeight: formats.includes("bold") ? "bold" : "normal",
    fontStyle: formats.includes("italic") ? "italic" : "normal",
    textDecoration: formats.includes("underlined") ? "underline" : "none",
    color: fontColor,
    backgroundColor: bgColor,
  };

  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // minWidth: "340px",
            // maxWidth: "120px",
            border: "1px solid darkgray",
            borderRadius: "0px",
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            value={horizontalAlignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>

          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <StyledToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton
              value="fontColor"
              aria-label="fontColor"
              onClick={togglePicker}
            >
              <ColorizeIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>

        {showCompactPicker && (
          <div
            style={{
              position: "absolute",
              zIndex: 1000,
              top: "275px",
              left: "320px",
            }}
          >
            <CompactPicker
              color={fontColor}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        )}

        <TextField
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            mt: -0.3,
            width: "100%",
            height: "300px",
            borderRadius: 0,
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
              height: "700px",
              "&:hover": {
                borderColor: "rgba(0, 0, 0, 0.23)", // 호버 시 색상 유지
              },
              "&.Mui-focused": {
                borderColor: "rgba(0, 0, 0, 0.23)", // 포커스 시 색상 유지
              },
            },
            ...applyStyles,
          }}
        />
      </Box>
    </div>
  );
};

export default MyTextEditorToggleButton;
