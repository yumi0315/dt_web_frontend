import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import DatePicker6 from "./DatePicker6";

function Apple({ selectedOption, handleChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px",
        width: "95%",
        height: "100%",
        gap: "20px",
        margin: "10px",
        flexGrow: 0,
      }}
    >
      {/* 첫 번째 드롭다운 */}
      <FormControl
        sx={{
          width: "150px",
          height: "95%",
          background: "white",
          fontFamily: "Spoqa-Mid",
        }}
      >
        <InputLabel id="dropdown1-label">선박 종류</InputLabel>
        <Select
          labelId="dropdown1-label"
          id="dropdown1"
          value={selectedOption}
          label="Select Option 1"
          onChange={handleChange}
        >
          <MenuItem value="LNG">LNG</MenuItem>
          <MenuItem value="COT">COT</MenuItem>
          <MenuItem value="CNT">CNT</MenuItem>
        </Select>
      </FormControl>
      <DatePicker6 />
    </Box>
  );
}

export default Apple;
